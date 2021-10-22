<template>
  <div class="sidebar">
    <NuxtLink to="/">
      <div class="flex justify-content-center items-center pa-lg logo">
        <img src="~/assets/images/Logo.png" />
      </div>
    </NuxtLink>
    <ul>
      <li>Beranda</li>
      <li>Most Popular</li>
    </ul>
    <hr style="border: 1px solid black" />
    <ul>
      <li>
        <NuxtLink class="text-yellow" to="/user"> Playlist </NuxtLink>
      </li>
    </ul>
    <hr style="border: 1px solid black" />
    <ul>
      <li>News</li>
      <li>Entertainment</li>
      <li>Sport</li>
      <li>Lifestyle</li>
      <li>Travel</li>
    </ul>
    <hr style="border: 1px solid black" />
    <ul v-for="(item, index) in linkIcon" :key="index">
      <li class="icons">
        <img
          :src="item['img']"
          style="width: 24px; height: auto; margin: 0 4px 0 0"
        />
        <span>{{ item['label'] }}</span>
      </li>
    </ul>
    <hr style="border: 1px solid #302f2f" />
    <div class="follow-us">
      <div>Follow Us:</div>
      <div class="my-md">
        <img src="../assets/images/fb.png" alt="" />
        <img src="../assets/images/tw.png" alt="" />
        <img src="../assets/images/ig.png" alt="" />
        <img src="../assets/images/yt.png" alt="" />
      </div>
      <div class="font-11 text-grey-4 opacity-60">
        <div class="text-bold">PT. Arkadia Media Nusantara</div>
        <div>
          Jln Mega Kuningan Timur Blok C6 Kav.9 Kawasan Mega Kuningan, Jakarta
          12950, Indonesia
        </div>
        <div>Tel: 021 - 724 1888 / 021 - 720 8374 Fax: 021 - 724 1887</div>
        <div>
          Email: redaksi@suara.com <br />
          Iklan: sales@suara.com
        </div>
      </div>
    </div>
    <hr style="border: 1px solid #302f2f" />
    <div class="font-11 opacity-60 text-center my-md">
      © 2021 clickmov - All Rights Reserved.
    </div>
  </div>
</template>

<script setup>
  const linkIcon = [
    {
      img: '../assets/images/icons/Icon_suara.png',
      label: 'Suara.com'
    },
    {
      img: '../assets/images/icons/Icon_mata2.png',
      label: 'Matamata.com'
    },
    {
      img: '../assets/images/icons/Icon_sukabumi.png',
      label: 'Sukabumiupdate.com'
    },
    {
      img: '../assets/images/icons/Icon_jabar.png',
      label: 'Jabarnews.com'
    },
    {
      img: '../assets/images/icons/Icon_hitekno.png',
      label: 'Hitekno.com'
    },
    {
      img: '../assets/images/icons/Icon_medan.png',
      label: 'Kabarmedan.com'
    },
    {
      img: '../assets/images/icons/Icon_jatim.png',
      label: 'Beritajatim.com'
    },
    {
      img: '../assets/images/icons/Icon_batam.png',
      label: 'Batamnews.com'
    },
    {
      img: '../assets/images/icons/Icon_bolatimes.png',
      label: 'Bolatimes.com'
    },
    {
      img: '../assets/images/icons/Icon_suara.png',
      label: 'Suarakalbar.com'
    },
    {
      img: '../assets/images/icons/Icon_riau.png',
      label: 'Riauonline.com'
    },
    {
      img: '../assets/images/icons/Icon_maluku.png',
      label: 'Terasmaluku.com'
    },
    {
      img: '../assets/images/icons/Icon_ayobandung.png',
      label: 'Ayobandung.com'
    },
    {
      img: '../assets/images/icons/Icon_solopos.png',
      label: 'Solopos.com'
    },
    {
      img: '../assets/images/icons/Icon_say.png',
      label: 'Yoursay.com'
    },
  ] 
</script>

<style lang="scss">
ul {
  li.icons {
    display: flex;
    justify-items: center;
  }
}
</style>