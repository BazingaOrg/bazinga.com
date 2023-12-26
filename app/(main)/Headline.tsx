'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { HourglassIcon } from '~/assets'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      <span className="font-mono">&lt;</span>Developer
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
      🧑🏻‍💻
    </span>
  )
}

function OCD() {
  return (
    <span className="group">
      <HourglassIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span>I live and I lived 🤪</span>
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
        <Developer />
        <br />
        <OCD />
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
          嗨 👋 , 我是 Bazinga ！这空间或许承载着对生活的一些感慨 🥴
          ，也可能记录了一些技术的折腾 🤔 。我想记录我的想法 ✍️
          ，将其作为我思考的快照 📸 ，供未来的我参考 😃
          。也许未来的我会证明现在的我错了 🤯 ，也许错的是未来的我 🫨
          。不管怎样，这对我自己来说都是有意义的 ✌️ 。
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
          href="https://twitter.com/zhangyouxiu6"
          aria-label="我的推特"
          platform="twitter"
        />
        <SocialLink
          href="https://github.com/BazingaOrg"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink
          href="https://space.bilibili.com/142160958"
          aria-label="我的 Bilibili"
          platform="bilibili"
        />
      </motion.div>
    </div>
  )
}
