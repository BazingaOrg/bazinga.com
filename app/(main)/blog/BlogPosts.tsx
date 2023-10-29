import { SparkleIcon } from '~/assets'
import { kvKeys } from '~/config/kv'
import { env } from '~/env.mjs'
import { redis } from '~/lib/redis'
import { getLatestBlogPosts } from '~/sanity/queries'

import { BlogPostCard } from './BlogPostCard'

export async function BlogPosts({ limit = 5 }) {
  const posts = await getLatestBlogPosts({ limit, forDisplay: true })
  const postIdKeys = posts.map(({ _id }) => kvKeys.postViews(_id))

  let views: number[] = []
  if (env.VERCEL_ENV === 'development' || posts.length === 0) {
    views = posts.map(() => Math.floor(Math.random() * 1000))
  } else {
    views = await redis.mget<number[]>(...postIdKeys)
  }

  const emptyProject = <p className="text-zinc-500 dark:text-zinc-400 flex items-center"><SparkleIcon className='mr-1'/>暂无文章，晚点就有啦</p>

  return (
    posts?.length ?
    <>
      {posts.map((post, idx) => (
        <BlogPostCard post={post} views={views[idx] ?? 0} key={post._id} />
      ))}
    </> : emptyProject
  )
}
