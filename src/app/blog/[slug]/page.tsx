import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug)
  if (!post) return notFound()
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="prose dark:prose-invert mx-auto p-4">
      {post.cover && (
        <img
          src={post.cover}
          alt=""
          className="rounded-md mb-6 object-cover w-full"
          width={800}
          height={400}
        />
      )}
      <h1>{post.title}</h1>
      <time className="text-sm text-gray-500 dark:text-gray-400">
        {formatDate(post.date)}
      </time>
      <MDXContent />
    </article>
  )
}
