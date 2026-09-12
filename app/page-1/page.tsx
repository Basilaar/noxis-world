import type { Metadata } from 'next'
import { PageSection } from '@/components/page/PageSection'

export const metadata: Metadata = {
  title: 'Page 1',
}

export default function PageOne() {
  return (
    <PageSection eyebrow="Chronicle II" title="Page 1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident.
      </p>
      <p>
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
        impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
        assumenda est, omnis dolor repellendus.
      </p>
    </PageSection>
  )
}
