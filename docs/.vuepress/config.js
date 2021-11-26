module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    plugins: [
      'vuepress-plugin-mermaidjs'
    ],
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            '/',
            '/art1',
            ['/art2', 'Explicit link text']
        ]
    }
}