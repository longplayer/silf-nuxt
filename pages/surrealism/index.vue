<template>
  <div class="container">
    <h1 class="page-title">Surrealism</h1>
    <viewer :dataSourceURL="'/data/surrealism.json'"></viewer>
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
