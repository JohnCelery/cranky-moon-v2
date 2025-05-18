import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    date: { type: 'date', required: true },
    cover: { type: 'string', required: false },
    excerpt: { type: 'string', required: true },
  },
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Post],
  mdx: { rehypePlugins: [[rehypePrettyCode, { theme: 'one-dark-pro' }]] },
})
