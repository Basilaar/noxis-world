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
    console.log(classId)
    console.log(classData.subclasses)
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
  console.log(classId)
  console.log(subclassId)
  const subClassData = getClassById(subclassId)

  if (!subClassData) {
    return {
      title: 'Подкласс не найден',
    }
  }

  return {
    title: subClassData.title,
  }
}

export default async function SubclassPage({
  params,
}: SubclassPageProps) {
  const { classId, subclassId } = await params
  console.log(classId)
  console.log(subclassId)
  const subClassData = getClassById(subclassId)

  if (!subClassData) {
    notFound()
  }

  return (
    <SubclassDetail
      name={subClassData.name}
      title={subClassData.title}
      levels={subClassData.levels}
      features={subClassData.features}
      subclasses={subClassData.subclasses}
    />
  )
}