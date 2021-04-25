<template>
  <div class="container">
    <h1 class="page-title" v-if="!tabTitle.length">{{ pageTitle }}</h1>
    <template v-else>
      <h2 class="sup-title">{{ pageTitle }}</h2>
      <h1 class="page-title">{{ tabTitle }}</h1>
    </template>
    <TabNav :dataSource="page" v-on:titleChanged="updateTitle"></TabNav>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const page = await context.$content("foundation").fetch();
    return { page };
  },
  data() {
    return {
      pageTitle: "The Foundation",
      tabTitle: ""
    };
  },
  methods: {
    updateTitle(title) {
      this.tabTitle = title;
    },
    getTitleConf() {
      return {
        title: this.tabTitle,
        suptitle: this.pageTitle
      };
    }
  }
};
</script>
