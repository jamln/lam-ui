import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lam-ui",
  description: "A Vue based front-end ui component toolkit",
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.ico"}],
  ],
  base: '/lam-ui-docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    nav: [
      { text: 'Home', link: '/' },
      { text: '示例', link: '/examples/button/' }
    ],

    sidebar: [
      {
        text: '基础组件',
        items: [
          { text: '按钮', link: '/examples/button/' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jamln/lam-ui' }
    ],
    outline: {
      label: '本页内容'
    }
  }
})
