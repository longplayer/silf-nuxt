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
  },
  created: function() {
    console.log(this);
  }
  // computed: {
  //   showPage: async () => {
  //     const page = await this.$content("biography").fetch();
  //     console.log(page);
  //     return page;
  //   }
  // }
};
</script>
