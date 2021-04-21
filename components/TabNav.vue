<template>
  <div class="tab-nav" :class="tabClass + options.navDirection">
    <!-- navigation -->
    <ul class="tab-nav--tabs">
      <li class="tab-nav--item" v-for="(item, index) in list" :key="index">
        <a
          class="tab-nav--link"
          :class="{ active: isActive(index) }"
          @click.prevent="setActive(index)"
          :href="`#tab-${index}`"
        >
          <span class="tab-nav--inner-link">
            {{ item.title }}
          </span>
        </a>
      </li>
    </ul>

    <!-- contents -->
    <div class="tab-nav--contents">
      <article class="tab-nav--panel" v-if="list.length">
        <nuxt-content :document="list[activeItemIndex].content"></nuxt-content>
      </article>
    </div>
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

    this.options = this.tabnavOpt;
    console.log(this.tabClass + this.options.navDirection);
  }
};
</script>

<style lang="postcss" scoped>
.tab-nav {
  @apply border border-gray-900 w-full h-full;
  background-color: inherit;

  display: grid;
  grid-template-columns: 1fr;

  /* common layout */
  & .tab-nav--tabs {
    @apply flex flex-wrap items-stretch justify-between
    border-gray-900;
  }

  & .tab-nav--link {
    background-color: #3b5997;
    @apply flex py-2 px-4 h-full w-full items-center
    uppercase text-center justify-center text-gray-300 hover:text-gray-100 font-normal;

    &.active {
      cursor: default;
      @apply bg-white hover:bg-white text-gray-900;
    }
    &.disabled {
      cursor: default;
      color: #6c8ac6;
    }
    &:hover {
      background-color: #5470ab;
    }

    & .tab-nav--inner-link {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box !important;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
      @apply flex-auto;
    }
  }

  & .tab-nav--contents {
    @apply px-8 pb-10 w-full h-full;
    background-color: inherit;
  }

  & .tab-nav--panel {
    display: block;
  }

  /* horizontal layout */
  &.tab-nav--h {
    /* @apply flex-wrap; */
    /* grid-template-columns: 1fr; */

    & .tab-nav--tabs,
    & .tab-nav--contents {
      flex: 1 1 100%;
      @apply ml-auto;
    }
    & .tab-nav--tabs {
      @apply border-b;
    }
    & .tab-nav--item {
      flex: 1 1 100%;
      @apply lg:flex-1;
    }
  }

  /* vertical layout */
  &.tab-nav--v {
    /* grid-template-columns: 300px 1fr; */

    & .tab-nav--tabs {
      @apply block relative h-full;
      background-color: #3b5997;
    }
    & .tab-nav--contents {
      flex: 1 1 auto;
    }
    & .tab-nav--tabs {
      @apply border-r;
    }
    & .tab-nav--item {
      flex: 1 1 100%;
    }
    & .tab-nav--link {
      /* @apply text-left items-start py-2; */
    }

    /* & .tab-nav--tabs::after {
      content: "";
      display: block;
      background: #3b5997;
    } */

    @screen lg {
      grid-template-columns: 300px 1fr;

      & .tab-nav--link {
        @apply text-left py-2;
        /* @apply text-left items-center justify-items-start py-2; */
      }
    }
  }
}

/* @media (min-width: 1024px) {
  .tab-nav.tab-nav--v {
    grid-template-columns: 300px 1fr;

    & .tab-nav--link {
      @apply text-left items-start py-2;
    }
  }
} */
</style>
