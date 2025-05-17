import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Doc],
  mdx: { rehypePlugins: [[rehypePrettyCode, { theme: 'one-dark-pro' }]] },
})
