<template>
  <div class="container">
    <h1>Contact</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("contact").fetch();
    return {
      page
    };
  }
};
</script>
