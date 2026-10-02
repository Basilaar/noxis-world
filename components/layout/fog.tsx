'use client'

import { useEffect, useRef } from 'react'
import styles from './fog.module.scss'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  baseVx: number
  baseVy: number
  radius: number
  baseAlpha: number
  alpha: number
  rotation: number
  vRot: number
  puffType: number
  phase: number
}

export function Fog() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) return

    let animationFrameId: number
    let width = 0
    let height = 0
    let dpr = 1

    // Mouse tracking state
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
      radius: 220, // repulsion radius in CSS pixels
    }

    // Pre-render fog puff sprites for optimal performance
    const spriteCanvasList: HTMLCanvasElement[] = []
    const spriteSize = 256

    const createSpritePuffs = () => {
      spriteCanvasList.length = 0
      const puffConfigs = [
        { innerStop: 0.1, midStop: 0.45, outerStop: 0.85, color: '185, 175, 160' },
        { innerStop: 0.05, midStop: 0.5, outerStop: 0.9, color: '200, 185, 160' },
        { innerStop: 0.15, midStop: 0.4, outerStop: 0.8, color: '160, 150, 140' },
      ]

      puffConfigs.forEach((cfg) => {
        const sprite = document.createElement('canvas')
        sprite.width = spriteSize
        sprite.height = spriteSize
        const sCtx = sprite.getContext('2d')
        if (!sCtx) return

        const center = spriteSize / 2
        const grad = sCtx.createRadialGradient(
          center,
          center,
          0,
          center,
          center,
          center
        )

        grad.addColorStop(0, `rgba(${cfg.color}, 0.9)`)
        grad.addColorStop(cfg.innerStop, `rgba(${cfg.color}, 0.7)`)
        grad.addColorStop(cfg.midStop, `rgba(${cfg.color}, 0.35)`)
        grad.addColorStop(cfg.outerStop, `rgba(${cfg.color}, 0.08)`)
        grad.addColorStop(1, `rgba(${cfg.color}, 0)`)

        sCtx.fillStyle = grad
        sCtx.beginPath()
        sCtx.arc(center, center, center, 0, Math.PI * 2)
        sCtx.fill()

        spriteCanvasList.push(sprite)
      })
    }

    createSpritePuffs()

    // Particles pool
    const particles: Particle[] = []

    const initParticles = () => {
      particles.length = 0
      // Scale particle count according to screen area
      const area = width * height
      const targetCount = Math.min(
        Math.max(Math.floor(area / 35000), 24),
        60
      )

      for (let i = 0; i < targetCount; i++) {
        const radius = Math.random() * 140 + 130 // 130px - 270px radius
        const baseVx = (Math.random() * 0.35 + 0.15) * (Math.random() > 0.1 ? 1 : -0.5) // predominantly drifting rightward
        const baseVy = (Math.random() - 0.5) * 0.15

        particles.push({
          x: Math.random() * (width + radius * 2) - radius,
          y: Math.random() * (height + radius * 2) - radius,
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
          radius,
          baseAlpha: Math.random() * 0.18 + 0.08, // soft misty opacity
          alpha: 0,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.002,
          puffType: Math.floor(Math.random() * spriteCanvasList.length),
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      initParticles()
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Mouse & Touch listeners
    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0
      let clientY = 0

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
      } else if ('clientX' in e) {
        clientX = e.clientX
        clientY = e.clientY
      }

      mouse.targetX = clientX
      mouse.targetY = clientY
      mouse.active = true
    }

    const onPointerLeave = () => {
      mouse.active = false
    }

    window.addEventListener('mousemove', onPointerMove, { passive: true })
    window.addEventListener('touchmove', onPointerMove, { passive: true })
    window.addEventListener('mouseleave', onPointerLeave, { passive: true })
    window.addEventListener('touchend', onPointerLeave, { passive: true })

    let lastTime = performance.now()

    // Main animation loop
    const render = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1)
      lastTime = currentTime

      // Smooth mouse coordinate interpolation
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.18
        mouse.y += (mouse.targetY - mouse.y) * 0.18
      } else {
        // Move mouse away when inactive
        mouse.x += (-1000 - mouse.x) * 0.05
        mouse.y += (-1000 - mouse.y) * 0.05
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.scale(dpr, dpr)

      const timeSec = currentTime * 0.001

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Natural floating waving motion
        p.phase += dt * 0.5
        const waveX = Math.sin(p.phase) * 0.15
        const waveY = Math.cos(p.phase * 0.7) * 0.2

        // Mouse avoidance / repulsion physics
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.hypot(dx, dy)
        const repulsionRadius = mouse.radius + p.radius * 0.35

        if (dist < repulsionRadius && dist > 0.01) {
          // Calculate repulsion force inversely proportional to distance
          const forcePercent = (repulsionRadius - dist) / repulsionRadius
          const pushForce = Math.pow(forcePercent, 1.4) * 280 * dt // impulse strength
          const nx = dx / dist
          const ny = dy / dist

          p.vx += nx * pushForce
          p.vy += ny * pushForce
        }

        // Apply friction and return smoothly to base wind drift
        const friction = Math.pow(0.92, dt * 60)
        p.vx = p.vx * friction + p.baseVx * (1 - friction)
        p.vy = p.vy * friction + p.baseVy * (1 - friction)

        // Update positions
        p.x += (p.vx + waveX) * (dt * 60)
        p.y += (p.vy + waveY) * (dt * 60)
        p.rotation += p.vRot

        // Screen wrap-around with smooth bounds
        const margin = p.radius * 1.5
        if (p.x < -margin) p.x = width + margin
        if (p.x > width + margin) p.x = -margin
        if (p.y < -margin) p.y = height + margin
        if (p.y > height + margin) p.y = -margin

        // Fade in smoothly at startup
        if (p.alpha < p.baseAlpha) {
          p.alpha = Math.min(p.alpha + dt * 0.1, p.baseAlpha)
        }

        // Render puff sprite
        const sprite = spriteCanvasList[p.puffType]
        if (sprite) {
          ctx.save()
          ctx.translate(p.x, p.y)
          ctx.rotate(p.rotation)
          ctx.globalAlpha = p.alpha
          ctx.drawImage(
            sprite,
            -p.radius,
            -p.radius,
            p.radius * 2,
            p.radius * 2
          )
          ctx.restore()
        }
      }

      ctx.restore()
      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('touchmove', onPointerMove)
      window.removeEventListener('mouseleave', onPointerLeave)
      window.removeEventListener('touchend', onPointerLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.fog} aria-hidden="true" />
}
