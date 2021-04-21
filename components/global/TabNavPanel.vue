<template>
  <div class="tab-nav--contents">
    <article class="tab-nav--panel">
      <nuxt-content :document="data.content"></nuxt-content>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="postcss" scoped>
.tab-nav--contents {
  @apply px-8 pb-10 w-full h-full;
  background-color: inherit;

  & .tab-nav--panel {
    display: block;
  }

  &.tab-h {
    & .tab-nav--contents {
      flex: 1 1 100%;
      @apply ml-auto;
    }
  }

  /* vertical layout */
  &.tab-v {
    & .tab-nav--contents {
      flex: 1 1 auto;
    }
  }
}
</style>
