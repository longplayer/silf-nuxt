<template>
  <div class="container">
    <h1 class="page-title">Photorealism</h1>
    <viewer :dataSourceURL="'/data/photorealism.json'"></viewer>
  </div>
</template>

<script>
export default {
  // async asyncData ({ $content }) {
  //   const page = await $content('news').fetch()
  //   return {
  //     page
  //   }
  // }
};
</script>
