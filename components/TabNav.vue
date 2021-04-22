<template>
  <div class="tab-nav" :class="tabClass + options.navDirection">
    <!-- navigation -->
    <tab-nav-item
      :list="list"
      v-on:tabChanged="setActive"
      :class="'tab-' + options.navDirection"
    ></tab-nav-item>

    <!-- contents -->
    <tab-nav-panel
      :data="list[activeItemIndex]"
      :class="'tab-' + options.navDirection"
    ></tab-nav-panel>
  </div>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Object,
      required: true
    },
    tabnavOpt: {
      type: Object,
      default: () => {
        return {
          navDirection: "h"
        };
      }
    }
  },

  data() {
    return {
      activeItemIndex: 0,
      tabClass: "tab-nav--",
      list: [],
      options: {}
    };
  },

  methods: {
    isActive(index) {
      return this.activeItemIndex === index;
    },
    setActive(index) {
      this.activeItemIndex = index;
    }
  },

  created() {
    // abord initialisation if tabnav is false
    if (this.dataSource.hasOwnProperty("tabnav") && !this.dataSource.tabnav)
      return;

    // get data from source to create tabs buttons
    this.dataSource.tabs.forEach(tab => {
      tab.toc.forEach(item => {
        if (item.depth === 2) {
          this.list.push({
            id: item.id,
            title: item.text,
            content: tab
          });
        }
      });
    });

    this.options = this.tabnavOpt;
  }
};
</script>

<style lang="postcss">
.tab-nav {
  @apply grid border border-gray-900 w-full h-full;
  grid-template-columns: 1fr;
  background-color: inherit;

  /* vertical layout */
  &.tab-nav--v {
    @screen lg {
      grid-template-columns: 300px 1fr;
    }
  }
}
</style>
