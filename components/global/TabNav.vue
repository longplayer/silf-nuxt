<template>
  <div class="tab-nav" :class="tabClass + options.navDirection">
    <!-- navigation -->
    <tab-nav-item
      :list="list"
      v-on:tabChanged="setActive"
      :class="'tab-' + options.navDirection"
    ></tab-nav-item>

    <!-- contents -->
    <transition name="fade" mode="out-in">
      <component
        :is="'tab-nav-panel'"
        :data="list[activeItemIndex]"
        :class="'tab-' + options.navDirection"
        :key="activeItemIndex"
      ></component>
    </transition>
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
      titleSelected: "",
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
      this.emitTitle(this.list[this.activeItemIndex].title);
    },
    emitTitle(title) {
      this.$emit("titleChanged", title);
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
    this.titleSelected = this.list[this.activeItemIndex].title;
    this.emitTitle(this.titleSelected);
  }
};
</script>
