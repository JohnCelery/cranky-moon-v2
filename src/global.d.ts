declare module 'contentlayer/source-files'
declare module 'rehype-pretty-code'
declare module 'framer-motion'
declare module 'next/image'
declare module 'next/link'
declare module 'tailwindcss' {
  export interface Config {}
}
declare module 'react' {
  export type ReactNode = any
  export const useState: any
  export const useEffect: any
  const React: any
  export default React
}
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}
