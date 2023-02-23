import pkg from '../../package.json'

export default {
  lang: 'en-US',

  outline: [2, 3],
  title: 'AstroCoin',
  description: 'Just playing around.',
  head: [
    ['link', { rel: 'icon', href: '/coin.webp' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    logo: '/coin.webp',
    colorMode: false,
    nav: nav(),
    sidebar: [

    ],
    socialLinks: socials(),
    footer: {
      // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2021 <a href="https://github.com/astrum-lab">Astrum Lab.</a> Made by <a href="https://sombra.uz">Sombra</a>.',
    }
  },
}

function nav() {
  return [
    { text: 'Our Team', link: '/team' },
    { text: 'Links',
      collapsed: false,
      items: [
        { text: 'Wallet', link: 'https://wallet.astrocoin.uz'},
        { text: 'Store', link: 'https://store.astrocoin.uz'},
      ]
    },
  ]
}

function socials() {
  return [
    { icon: 'github', link: 'https://github.com/astrum-lab' },
  ]
}