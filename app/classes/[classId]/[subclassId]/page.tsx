import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { SubclassDetail } from '@/components/subclass-detail'
import { getAllClassesIds, getClassById } from '@/lib/sub-classes-data'

type SubclassPageProps = {
  params: Promise<{
    classId: string
    subclassId: string
  }>
}

export async function generateStaticParams() {
  const ids = getAllClassesIds()

  return ids.flatMap((classId) => {
    const classData = getClassById(classId)

    if (!classData) return []

    return classData.subclasses.map((subclass) => ({
      classId,
      subclassId: subclass.id,
    }))
  })
}

export async function generateMetadata({
  params,
}: SubclassPageProps): Promise<Metadata> {
  const { classId, subclassId } = await params

  const classData = getClassById(classId)

  if (!classData) {
    return {
      title: 'Класс не найден',
    }
  }

  const subclass = classData.subclasses.find(
    (subclass) => subclass.id === subclassId
  )

  if (!subclass) {
    return {
      title: 'Подкласс не найден',
    }
  }

  return {
    title: subclass.title,
  }
}

export default async function SubclassPage({
  params,
}: SubclassPageProps) {
  const { classId, subclassId } = await params

  const classData = getClassById(classId)

  if (!classData) {
    notFound()
  }

  const subclass = classData.subclasses.find(
    (subclass) => subclass.id === subclassId
  )

  if (!subclass) {
    notFound()
  }

  return (
    <SubclassDetail
      name={classData.name}
      title={classData.title}
      levels={classData.levels}
      features={classData.features}
      subclasses={classData.subclasses}
    />
  )
}