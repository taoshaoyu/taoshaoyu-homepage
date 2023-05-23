module.exports = {
    title: "Taoshaoyu's homepage",
    description: 'Just playing around',

    markdown: {
      extendMarkdown: md => {
        md.set({ html: true })
        md.use(require('markdown-it-plantuml'))
        md.linkify.set({ fuzzyEmail: false })
      }
    },
    
    plugins: [
      'vuepress-plugin-mermaidjs',
      'vuepress-plugin-flowchart-js',
      'vuepress-plugin-graphviz',
      '@renovamen/vuepress-plugin-katex'
    ],
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Qeumu', link: '/qemu/' },
          { text: 'Private', link: '/priv/' }
        ],
        sidebar: [
            '/',
            '/demo-graphviz.md',
            '/demo-mermaidjs.md',
            '/demo-flowchartjs.md',
            '/demo-plantUML.md',
            '/demo-misc.md'
        ]
    }
}