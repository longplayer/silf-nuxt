<template>
  <div class="tab-nav">
    <!-- navigation -->
    <ul class="tab-nav--tabs">
      <li v-for="(item, index) in list" :key="index" class="tab-nav--item">
        <a
          @click.prevent="setActive(index)"
          class="tab-nav--link"
          :class="{ active: isActive(index) }"
          :href="`#tab-${index}`"
          >{{ item.title }}</a
        >
      </li>
    </ul>

    <!-- contents -->
    <div class="tab-nav--contents">
      <article class="tab-nav--panel active show" v-if="list.length">
        <nuxt-content :document="list[activeItemIndex].content"></nuxt-content>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Object
    },
    tabnavOpt: {
      type: Object
    }
  },

  data() {
    return {
      activeItemIndex: 0,
      list: [],
      options: {
        horizontalNav: true
      }
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

    // define element visbility on loading
    this.activeItemIndex = 0;
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
  }
};
</script>

<style lang="postcss" scoped>
.tab-nav {
  @apply border border-gray-900 w-full;

  & .tab-nav--tabs {
    @apply flex border-b border-gray-900;
  }
  & .tab-nav--item {
    @apply mr-1;

    &:last-child {
      @apply mr-0;
    }
  }
  & .tab-nav--link {
    background-color: #3b5997;
    @apply inline-block py-2 px-4 text-gray-300 hover:text-gray-100 font-normal text-base;

    &.active {
      @apply bg-white text-gray-900;
    }
    &.disabled {
      cursor: default;
      color: #6c8ac6;
    }
  }

  & .tab-nav--contents {
  }
  & .tab-nav--panel {
    display: none;
    &.show {
      display: block;
    }
  }
}
</style>
