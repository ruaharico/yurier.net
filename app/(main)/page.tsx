import React from 'react'

import { BlogPosts } from '~/app/(main)/blog/BlogPosts'
import { Headline } from '~/app/(main)/Headline'
import { Container } from '~/components/ui/Container'

export default function BlogHomePage() {
  return (
    <>
      <Container className="mt-10">
        <Headline />
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-6 pt-6">
            <BlogPosts />
          </div>
          <aside className="space-y-10 lg:sticky lg:top-8 lg:h-fit lg:pl-16 xl:pl-20">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <span>提示</span>
              </h2>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 md:text-sm">
              <span><b>·</b>在桌面端的顶栏、移动端的「菜单」，可访问本站的更多板块，如「项目列表」。</span>
              <span><b>·想加入百合研社团？</b>到「关于我们」了解更多。</span>
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </>
  )
}
export const revalidate = 60

