module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    plugins: [
      'vuepress-plugin-mermaidjs',
      'vuepress-plugin-graphviz'
    ],
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            '/',
            '/demo-graphviz.md',
            '/demo-mermaidjs.md'
        ]
    }
}