'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { PeekabooLink } from '~/components/links/PeekabooLink'
import { SocialLink } from '~/components/links/SocialLink'

function Line1() {
  return (
    <span className="group">
      <span>百合研社团，</span>
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
          ·百合研社团(Yurier Department)官方网站·
          <br />
          <b>研究：</b>访问「花韵潮汐」(Yurier Research)  -  （暂未开站，敬请期待）
          <br />
          <b>服务与基础建设：</b>请访问<PeekabooLink href="https://yuriboat.cn">「百合花船」企划官网</PeekabooLink>
          <br />
          <b>媒体：</b>观察与点击下方的小图标，即可了解和关注我们在各大社媒平台的账号。（暂未收录所有账号）
          <br />
          <b>我们的理念是？</b>请阅读<PeekabooLink href="https://yurier66.feishu.cn/docx/AJAvdK1tAoiouHxngvhcl5Vqn4d">《百合研社团章程》</PeekabooLink>
          <br />
          <b>社员常用：</b><PeekabooLink href="https://yurier.net">登入网页版「飞书」</PeekabooLink>（云文档、邮箱…）
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
          href="https://twitter.com/YurierDept"
          aria-label="我们在X(Twitter)"
          platform="twitter"
        />
        <SocialLink
          href="mailto:harico@yurier.net"
          aria-label="主编的邮箱"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
