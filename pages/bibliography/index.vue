<template>
  <div class="container">
    <h1>Bibliography</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("bibliography").fetch();
    return {
      page
    };
  }
};
</script>
