<template>
  <ul class="viewer-nav--tabs">
    <li class="viewer-nav--item" v-for="(item, index) in list" :key="index">
      <a
        class="viewer-nav--link"
        :class="{ active: activeItemIndex === index }"
        @click.prevent="tabChanged(index)"
        :href="`#tab-${index}`"
      >
        <span class="viewer-nav--inner-link">
          {{ item.title }}
        </span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeItemIndex: 0
      // list: []
    };
  },
  methods: {
    tabChanged(index) {
      this.activeItemIndex = index;
      this.$emit("tabChanged", index);
    }
  },
  created() {
    // this.list = this.compConfig.contents
  }
};
</script>

<style lang="postcss" scoped>
.viewer-nav--tabs {
  /* common layout */
  @apply flex flex-nowrap items-stretch justify-between
  border-gray-900 mb-2 mr-2;
  background-color: #3b5997;

  @screen md {
    @apply justify-start;
  }

  & .viewer-nav--item {
    @apply flex-auto;

    @screen md {
      flex: 0 0 auto;
    }
  }

  & .viewer-nav--link {
    background-color: #3b5997;
    @apply flex p-6 h-full w-full items-center
    uppercase text-center justify-center text-gray-300 hover:text-gray-100 font-normal;

    @screen md {
      @apply px-2 py-2;
    }
    @screen lg {
      @apply px-4;
    }

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

    & .viewer-nav--inner-link {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box !important;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
      @apply flex-auto;
    }
  }

  /* horizontal layout */
  &.tab-h {
    flex: 1 1 100%;
    @apply ml-auto border-b;

    & .viewer-nav--item {
      flex: 1 1 100%;
      @apply lg:flex-1;
    }
  }

  /* vertical layout */
  &.tab-v {
    @apply block relative h-full;
    @apply border-r;
    background-color: #3b5997;

    & .viewer-nav--item {
      flex: 1 1 100%;
    }

    @screen lg {
      & .viewer-nav--link {
        @apply text-left py-2;
      }
    }
  }
}
</style>
