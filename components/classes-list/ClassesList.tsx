'use client'

import { useEffect } from 'react'

import { selectClasses, useClassesStore } from '@/store/classes'

import { ClassCard } from '../class-card'

export function ClassesList() {
  const { fetchClasses } = useClassesStore()
  const classes = useClassesStore(selectClasses)

  useEffect(() => {
    fetchClasses()
  }, [])

  return (
    <>
      {
        classes.map((classData) => (
          <ClassCard
            key={classData.id}
            classData={classData}
          />
        ))
      }
    </>
  )
}
