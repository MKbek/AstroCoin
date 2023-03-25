---
layout: home

title: AstroCoin
titleTemplate: The currency for the Astrum IT Academy

hero: 
  name: AstroCoin
  text: The currency for the Astrum IT Academy 
  tagline: You can use AstroCoin to buy courses, books, and other things in the Astrum IT Academy store.
  image:
    src: /coin.webp
    alt: AstroCoin
  actions:
    - theme: brand
      text: Get Started
      link: https://wallet.astrocoin.uz/qwasar-check
    - theme: alt
      text: Already using
      linkText: AstroCoin
      link: https://wallet.astrocoin.uz/
    - theme: get googleplay
      text: Google Play
      linkText: get
      link: https://play.google.com/store/apps/details?id=app.app.astrocoin

features:
  - icon: 👛
    title: Convenient wallet for managing coins
    details: Coin monitoring, and a convenient interface for transferring and receiving coins
  - icon: 🧺
    title: AstroCoin Store - with a large assortment
    details: Students can also purchase various valuable gifts on the market using these coins.
  - icon: 🚀
    title: Transfers are instant
    details: Transfer or ask for coins from friends, and the transfer will be carried out instantly
  - icon: 📱
    title: Mobile application
    details: We will soon release a mobile app for iOS devices
---

<script setup>
import {onMounted} from "vue";

const iosDeviceStatus = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ].includes(navigator.platform)
      // iPad on iOS 13 detection
      || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
const removeButton = () => {
    document.querySelector('.googleplay').style.display = 'none'
}
onMounted(() => {
    if (iosDeviceStatus) {
        removeButton()
    }
})
</script>