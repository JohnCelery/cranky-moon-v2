import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const metadata = {
  title: 'Blog',
}

export default function BlogPage() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <main className="mx-auto max-w-3xl p-4 space-y-8">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="space-y-12">
        {posts.map((post) => (
          <li key={post._id} className="flex flex-col">
            <Link href={`/blog/${post.slug}`} className="space-y-2 group">
              {post.cover && (
                <img
                  src={post.cover}
                  alt=""
                  className="rounded-md mb-2 object-cover w-full"
                  width={600}
                  height={300}
                />
              )}
              <h2 className="text-xl font-semibold group-hover:underline">
                {post.title}
              </h2>
            </Link>
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {formatDate(post.date)}
            </time>
            <p className="mt-2">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
