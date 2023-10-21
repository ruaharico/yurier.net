import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import ThankYouLetterScreenshot1 from './Arc aagD26w9@2x.png'
import ThankYouLetterScreenshot2 from './Arc ynleUdHy@2x.png'

const title = 'AMA 一对一咨询'
const description =
  '百合研社团'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Ask Me Anything / 一对一咨询
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
            <RichLink
              href="https://y.qq.com/n/ryqq/songDetail/003c0O9B3firAU"
              favicon={false}
              target="_blank"
            >
              英文说唱
            </RichLink>
        <h2>感谢信</h2>
        <p>
          下面两个截图摘选自两名 Twitter
          朋友的私信，能够帮助到更多的人一直是我的使命：
        </p>
        <p className="grid items-center gap-4 lg:grid-cols-2">
          <Image
            src={ThankYouLetterScreenshot1}
            alt=""
            className="max-w-full"
          />
          <Image
            src={ThankYouLetterScreenshot2}
            alt=""
            className="max-w-full"
          />
        </p>
      </article>
    </Container>
  )
}
