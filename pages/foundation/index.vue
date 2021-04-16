<template>
  <div class="container">
    <h1>The Foundation</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("foundation").fetch();
    return {
      page
    };
  }
};
</script>
