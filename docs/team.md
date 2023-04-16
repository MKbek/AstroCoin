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
    name: 'Muhammadqodir Khudoyorkhonov',
    title: 'Fullstack Developer & UI/UX Designer',
    links: [
      { icon: 'github', link: 'https://github.com/mkbek' },
      { icon: 'twitter', link: 'https://twitter.com/muhammadiy_k' },
      { icon: 'instagram', link: 'https://www.instagram.com/muhammadiy.k/' }
    ]
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