<template>
  <div class="tab-nav--contents">
    <article class="tab-nav--panel">
      <!-- TODO: transition doesn't work!! -->
      <transition
        name="component-fade"
        mode="out-in"
        :duration="1000"
        :key="data.id"
      >
        <component :is="'nuxt-content'" :document="data.content"></component>
      </transition>
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

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
