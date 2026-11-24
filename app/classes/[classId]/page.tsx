import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ClassDetail } from '@/components/class-detail'
import { getAllClassesIds, getClassById } from '@/lib/classes-data'

type ClassPageProps = {
  params: Promise<{
    classId: string
  }>
}

export async function generateStaticParams() {
  const ids = getAllClassesIds()
  return ids.map((classId) => ({ classId }))
}

export async function generateMetadata({ params }: ClassPageProps): Promise<Metadata> {
  const { classId } = await params
  const classData = getClassById(classId)
  if (!classData) {
    return {
      title: 'Класс не найден',
    }
  }
  return {
    title: classData.name
  }
}

export default async function ClassPage({ params }: ClassPageProps) {
  const { classId } = await params
  const classData = getClassById(classId)
  if (!classData) {
    notFound()
  }

  return (
    <ClassDetail
      name={classData.name}
    />
  )
}
