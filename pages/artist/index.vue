<template>
  <div class="container">
    <h1 class="page-title">The Artist</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("artist").fetch();
    return {
      page
    };
  }
};
</script>
