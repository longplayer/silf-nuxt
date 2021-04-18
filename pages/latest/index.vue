<template>
  <div class="container">
    <h1 class="page-title">Latest Aquisitions</h1>
    <viewer :dataSourceURL="'/data/latest.json'"></viewer>
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
