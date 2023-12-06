---
layout: page
title: Meet the Team
description: The development of AstroCoin is guided by an international team.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/mkbek.png',
    name: 'Muhammadqodir Khamrakulov',
    title: 'Fullstack Developer & UI/UX Designer',
    links: [
      { icon: 'github', link: 'https://github.com/mkbek' },
      { icon: 'twitter', link: 'https://twitter.com/muhammadiy_k' },
      { icon: 'instagram', link: 'https://www.instagram.com/muhammadiy.k/' },
      {
        icon: {
          svg: '<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M256 32C132.293 32 32 132.293 32 256C32 379.702 132.286 479.992 255.986 480H256C379.707 480 480 379.707 480 256C480 132.293 379.707 32 256 32ZM272 67.2879V144.127C291.67 142.786 310.558 138.996 328.301 133.105C325.728 127.341 322.995 121.861 320.124 116.693C305.25 89.9159 288.13 73.7643 272 67.2879ZM240 144.127V67.2879C223.87 73.7642 206.75 89.9158 191.876 116.693C189.005 121.861 186.272 127.341 183.699 133.105C201.442 138.996 220.33 142.786 240 144.127ZM240 176.192V240H159.701C160.992 212.22 165.597 186.209 172.58 163.129C193.833 170.286 216.47 174.783 240 176.192ZM127.67 240C129.027 208.084 134.403 177.905 142.843 150.961C131.228 145.315 120.171 138.824 109.771 131.575C84.4678 161.283 68.0569 198.798 64.6573 240H127.67ZM64.6573 272H127.67C129.027 303.916 134.403 334.095 142.843 361.039C131.228 366.685 120.171 373.176 109.771 380.425C84.4678 350.717 68.0569 313.202 64.6573 272ZM159.701 272H240V335.808C216.47 337.217 193.833 341.714 172.58 348.871C165.597 325.791 160.992 299.78 159.701 272ZM240 367.873C220.33 369.214 201.442 373.004 183.699 378.895C186.272 384.659 189.005 390.139 191.876 395.307C206.75 422.084 223.87 438.236 240 444.712V367.873ZM272 444.712V367.873C291.67 369.214 310.558 373.004 328.301 378.895C325.728 384.659 322.995 390.139 320.124 395.307C305.25 422.084 288.13 438.236 272 444.712ZM272 335.808V272H352.299C351.008 299.78 346.403 325.791 339.42 348.871C318.167 341.714 295.53 337.217 272 335.808ZM352.299 240H272V176.192C295.53 174.783 318.167 170.286 339.42 163.129C346.403 186.209 351.008 212.22 352.299 240ZM384.33 272C382.973 303.916 377.597 334.095 369.157 361.039C380.772 366.685 391.829 373.176 402.229 380.425C427.532 350.717 443.943 313.202 447.343 272H384.33ZM447.343 240H384.33C382.973 208.084 377.597 177.905 369.157 150.961C380.772 145.315 391.829 138.824 402.229 131.575C427.532 161.283 443.943 198.798 447.343 240ZM163.902 101.154C160.441 107.384 157.177 113.959 154.13 120.844C146.78 117.144 139.706 113.058 132.941 108.618C146.097 97.6215 160.748 88.3532 176.544 81.1626C172.017 87.4464 167.793 94.1481 163.902 101.154ZM176.544 430.837C160.748 423.647 146.097 414.378 132.941 403.382C139.706 398.942 146.78 394.856 154.13 391.157C157.177 398.041 160.441 404.616 163.902 410.846C167.793 417.852 172.017 424.554 176.544 430.837ZM348.098 410.846C351.559 404.616 354.823 398.041 357.87 391.156C365.22 394.856 372.294 398.942 379.059 403.382C365.903 414.378 351.252 423.647 335.456 430.837C339.983 424.554 344.206 417.852 348.098 410.846ZM335.456 81.1625C351.252 88.3531 365.903 97.6215 379.059 108.618C372.294 113.058 365.22 117.144 357.87 120.844C354.823 113.959 351.559 107.384 348.098 101.154C344.206 94.1481 339.983 87.4464 335.456 81.1625Z" fill="currentColor"/></svg>',
        },
        link: 'https://muhammadiy.uz/'
      }
    ],
    sponsor: 'https://www.github.com/sponsors/mkbek'
  },
  {
    avatar: 'https://www.github.com/shaxzod5625.png',
    name: 'Shaxzod Safarov',
    title: 'Frontend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/shaxzod5625' },
      { icon: 'instagram', link: 'https://www.instagram.com/shaxzod_sf/' }
    ]
  },
  {
    avatar: 'https://www.github.com/uubek.png',
    name: 'Ulugbek Tursunkulov',
    title: 'Backend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/uubek' },
      { icon: 'instagram', link: 'https://www.instagram.com/uu.bek/' }
    ]
  },
  {
    avatar: 'https://www.github.com/devDoubleH.png',
    name: 'Islomjon Abduqahhorov',
    title: 'React Native Developer',
    links: [
      { icon: 'github', link: 'https://github.com/devDoubleH' },
      { icon: 'twitter', link: 'https://twitter.com/devDoubleH' },
      { icon: 'instagram', link: 'https://www.instagram.com/this.ismail' }
    ]
  },
  {
    avatar: 'https://www.github.com/to-rex.png',
    name: 'Dilshodjon Haydarov',
    title: 'Flutter Developer',
    links: [
      { icon: 'github', link: 'https://github.com/to-rex' },
      { icon: 'twitter', link: 'https://twitter.com/yorvoration' },
      { icon: 'instagram', link: 'https://www.instagram.com/torex.dev' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of AstroCoin is guided by an Astrum Laboratory
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>