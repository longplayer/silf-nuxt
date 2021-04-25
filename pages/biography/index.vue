<template>
  <div class="container">
    <h1 class="page-title">Biography</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("biography").fetch();
    console.log(">asyncData", page);
    return { page };
  }
};
</script>
