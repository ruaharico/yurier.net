'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { PeekabooLink } from '~/components/links/PeekabooLink'
import { SocialLink } from '~/components/links/SocialLink'

function Line1() {
  return (
    <span className="group">
      <span>百合研社团</span>
    </span>
  )
}

function Line2() {
  return (
    <span className="group">
      <span>「与你·一起绽放」的</span>
    </span>
  )
}

function Line3() {
  return (
    <span className="group">
      <span>百合向研究·服务·媒体社团</span>
    </span>
  )
}

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Line1 />
        <br />
        <Line2 />
        <br />
        <Line3 />
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          这里是百合研社团（Yurier Department）的官方网站。
          <br />
          研究：花韵潮汐
          <br />
          服务与基础建设：<PeekabooLink href="https://yuriboat.cn">访问「百合花船」企划官网</PeekabooLink>
          <br />
          媒体：观察与点击小图标，即可知道和关注我们在各大社媒平台的账号。
          <br />
          纲领：<PeekabooLink href="https://yurier66.feishu.cn/docx/AJAvdK1tAoiouHxngvhcl5Vqn4d">阅读《百合研社团章程》</PeekabooLink>
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://space.bilibili.com/643844175"
          aria-label="我们在 Bilibili"
          platform="bilibili"
        />
        <SocialLink
          href="https://ctwitter.com/YurierDept"
          aria-label="我们在X(Twitter)"
          platform="twitter"
        />
        <SocialLink
          href="#"
          aria-label="我的 YouTube"
          platform="youtube"
        />
        <SocialLink
          href="#"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="mailto:harico@yurier.net"
          aria-label="主编的邮箱"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
