<template>
  <div class="container">
    <h1 class="page-title">The Artist</h1>
    <TabNav :dataSource="page" :tabnavOpt="config"></TabNav>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const page = await context.$content("artist").fetch();
    return { page };
  },
  data() {
    return {
      config: {
        navDirection: "v"
      }
    };
  }
};
</script>
