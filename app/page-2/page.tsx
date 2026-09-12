import type { Metadata } from 'next'
import { PageSection } from '@/components/page/PageSection'

export const metadata: Metadata = {
  title: 'Page 2',
}

export default function PageTwo() {
  return (
    <PageSection eyebrow="Chronicle III" title="Page 2">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur.
      </p>
      <p>
        Temporibus autem quibusdam et aut officiis debitis aut rerum
        necessitatibus saepe eveniet ut et voluptates repudiandae sint et
        molestiae non recusandae itaque earum rerum hic tenetur a sapiente
        delectus.
      </p>
    </PageSection>
  )
}
