<template>
  <ul class="tab-nav--tabs">
    <li class="tab-nav--item" v-for="(item, index) in list" :key="index">
      <a
        class="tab-nav--link"
        :class="{ active: activeItemIndex === index }"
        @click.prevent="tabChanged(index)"
        :href="`#tab-${index}`"
      >
        <span class="tab-nav--inner-link">
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
    };
  },
  methods: {
    tabChanged(index) {
      this.activeItemIndex = index;
      this.$emit("tabChanged", index);
    }
  }
};
</script>

<style lang="postcss">
.tab-nav--tabs {
  /* common layout */
  @apply flex flex-wrap items-stretch justify-between
  border-gray-900;

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

  /* horizontal layout */
  &.tab-h {
    flex: 1 1 100%;
    @apply ml-auto;
    @apply border-b;

    & .tab-nav--item {
      flex: 1 1 100%;
      @apply lg:flex-1;
    }
  }

  /* vertical layout */
  &.tab-v {
    @apply block relative h-full;
    @apply border-r;
    background-color: #3b5997;

    & .tab-nav--item {
      flex: 1 1 100%;
    }

    @screen lg {
      & .tab-nav--link {
        @apply text-left py-2;
      }
    }
  }
}
</style>
