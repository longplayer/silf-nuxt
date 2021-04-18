<template>
  <div class="tab-nav">
    <!-- navigation -->
    <ul class="tab-nav--tabs">
      <li v-for="(item, index) in list" :key="index" class="tab-nav--item">
        <a
          @click.prevent="activeItem = index"
          :class="{ 'tab-nav--link': true, active: activeItem === index }"
          :href="`#tab-${index}`"
          >{{ item.title }}</a
        >
      </li>
    </ul>

    <!-- contents -->
    <div class="tab-nav--contents">
      <article
        v-for="(item, index) in list"
        :key="index"
        class="tab-nav--panel"
        :class="{ 'active show': activeItem === index }"
        v-html="item.description"
      ></article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },

  data() {
    return {
      activeItem: 0,
      list: [
        {
          id: "tab-1",
          title: "Tab 1",
          description: "<p><strong>1. </strong> Content one...</p>"
        },
        {
          id: "tab-2",
          title: "Tab 2",
          description: "<p><strong>2. </strong> Content two...</p>"
        },
        {
          id: "tab-3",
          title: "Tab 3",
          description: "<p><strong>3. </strong> Content three...</p>"
        }
      ]
    };
  },

  methods: {
    isActive: index => this.activeItem === index,
    setActive: index => {
      this.activeItem = index;
    }
  },

  mounted() {
    // console.log(this.data.props);

    // this.data.body.children.forEach(v => {
    //   if (v.type === "element") console.log(v.tag);
    // });

    this.activeItem = 0;
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
