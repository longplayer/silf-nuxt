<template>
  <aside class="aside--content">
    <!-- intro -->
    <!-- main -->
    <ul class="aside--list">
      <li
        class="aside--list-item"
        v-for="(item, index) in dataSource"
        :key="index"
      >
        <figure class="aside--item-fig">
          <img
            class="aside--item-img"
            :src="require('~/static/img/' + item.image)"
            :alt="item.title"
          />
          <figcaption class="aside--item-caption">
            <p>{{ item.title }}</p>
          </figcaption>
        </figure>
      </li>
    </ul>
    <!-- outro -->
  </aside>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="postcss">
.aside--list {
  @apply flex flex-wrap justify-evenly items-start
  my-2;

  @screen lg {
    @apply my-6;
  }
}
.aside--list-item {
  @apply mt-0 mb-2;
  flex: 0 0 30%;

  &:last-child {
    @apply mb-0;
  }

  @screen lg {
    @apply mx-6;
    flex: 1 1 auto;
  }
}
.aside--item-fig {
}
.aside--item-img {
  @apply relative mx-auto w-full h-auto;
}
.aside--item-caption {
  @apply text-left pt-2 text-xs tracking-tight;
}
</style>
