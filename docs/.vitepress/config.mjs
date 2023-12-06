import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',

  outline: [2, 3],
  title: 'AstroCoin',
  description: 'The currency for the Astrum IT Academy',
  head: [
    ['link', { rel: 'icon', href: 'https://camo.githubusercontent.com/9cca37250e98e4949613addec14e065d4800910ec0f3f77b0a1ff4652e59b10b/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f616c706861636f6e74726f6c2e61707073706f742e636f6d2f636f696e2e77656270' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  lastUpdated: true,
  cleanUrls: true,

  devServer: {
    https: true
  },

  markdown: {
    headers: {
      level: [0, 0]
    }
  },


  appearance: false,
  themeConfig: {
    logo: 'https://camo.githubusercontent.com/9cca37250e98e4949613addec14e065d4800910ec0f3f77b0a1ff4652e59b10b/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f616c706861636f6e74726f6c2e61707073706f742e636f6d2f636f696e2e77656270',
    nav: nav(),
    socialLinks: socials(),
    footer: {
      // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2021 <a href="https://github.com/astrum-lab">Astrum Lab.</a> Made by <a href="https://sombra.uz">Sombra</a>.',
    }
  },
})

function nav() {
  return [
    {
      text: 'Our Team',
      link: '/team'
    },
    {
      text: 'Get Apps',
      items: [
        {
          text: 'Google Play',
          link: 'https://play.google.com/store/apps/details?id=app.app.astrocoin'
        },
      ]
    },
    {
      text: 'Links',
      items: [
        {
          text: 'Wallet',
          link: 'https://wallet.astrocoin.uz'
        },
        {
          text: 'Store',
          link: 'https://store.astrocoin.uz',
        },
      ]
    }
  ]
}

function socials() {
  return [
    { icon: 'github', link: 'https://github.com/astrum-lab' },
    {
      icon: {
        svg: '<svg width="330" height="330" viewBox="0 0 330 330" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_483_28)"><path opacity="0.5" d="M290 0H0V290H290V0Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39.5264 290H290V39.5264H329.526V329.526H39.5264V290Z" fill="currentColor"/><path d="M181.117 240.315C184.881 241.254 189.256 242.052 194.242 242.709C199.323 243.273 204.169 243.554 208.779 243.554C211.132 243.554 213.437 243.507 215.695 243.414C218.047 243.32 221.058 243.085 224.727 242.709V216.515L211.32 215.529C205.016 215.06 199.841 214.356 195.795 213.417C191.749 212.384 188.55 210.976 186.198 209.192C183.94 207.314 182.34 204.873 181.399 201.869C180.552 198.865 180.129 195.062 180.129 190.462C180.129 183.702 180.976 178.35 182.669 174.407C184.457 170.37 187.327 167.46 191.279 165.676C195.23 163.892 200.452 163 206.945 163C211.837 163 216.589 163.235 221.199 163.704C225.81 164.08 230.561 164.737 235.454 165.676L233.619 176.801C229.479 176.05 225.386 175.534 221.34 175.252C217.294 174.877 212.778 174.689 207.791 174.689C205.063 174.689 202.852 174.736 201.158 174.83C199.464 174.924 197.583 175.111 195.513 175.393V201.869L211.179 202.855C218.612 203.324 224.398 204.451 228.538 206.235C232.772 207.925 235.736 210.6 237.43 214.262C239.217 217.923 240.111 222.899 240.111 229.19C240.111 235.668 239.076 240.832 237.006 244.681C234.936 248.436 231.502 251.159 226.703 252.849C221.999 254.445 215.601 255.243 207.509 255.243C202.522 255.243 197.724 254.962 193.113 254.398C188.503 253.929 183.799 253.084 179 251.863L181.117 240.315Z" fill="currentColor"/><path d="M110 67H25V79H110V67Z" fill="currentColor"/><path d="M145 35H25V47H145V35Z" fill="currentColor"/></g><defs><clipPath id="clip0_483_28"><rect width="330" height="330" fill="white"/></clipPath></defs></svg>'
      },
      link: 'https://sombra.uz'
    },
  ]
}