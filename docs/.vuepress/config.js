module.exports = {
    title: "Taoshaoyu's homepage",
    description: 'Just playing around',

    markdown: {
      extendMarkdown: md => {
        md.set({ html: true })
        md.use(require('markdown-it-plantuml'))
      }
    },
    
    plugins: [
      'vuepress-plugin-mermaidjs',
      'vuepress-plugin-flowchart-js',
      'vuepress-plugin-graphviz'
    ],
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Qeumu', link: '/qemu/' }
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