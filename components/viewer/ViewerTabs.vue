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
