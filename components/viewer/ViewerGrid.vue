<template>
  <div
    class="app-viewer--ingrid"
    :class="'auto-cols-max md:grid-cols-' + data.config.gridSize"
  >
    <div
      class="app-viewer--item"
      v-for="(item, index) in tabContent"
      :key="index"
      :class="{ selected: selectedItemIndex === index }"
    >
      <a
        href="#"
        class="app-viewer--link"
        :title="item.title"
        @click.prevent="changeDataTo({ data: tabContent[index], index })"
      >
        <img
          class="app-viewer--thumb"
          :src="require(`@/assets/img/artworks/${item.thumb}`)"
          :alt="item.title"
        />
        <span class="app-viewer--label">{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedItemIndex: 0,
      selectTabIndex: 0,
      tabContent: {},
      tabnavConfig: {},
      counter: 1
    };
  },
  methods: {
    changeDataTo(payload) {
      this.selectedItemIndex = payload.index;
      this.$emit("dataChanged", payload.data);
    },
    changeTabTo(index) {
      this.selectedItemIndex = 0; //reset navigation
      this.selectTabIndex = index;
      this.tabContent = this.tabnavConfig.contents[index];
    },
    splitArray(data) {
      const response = [];
      const nPanels = data.config.nPanels;
      const nItems = data.list.length;
      const rest = nItems % nPanels;
      let divider = !rest ? nItems / nPanels : (nItems - rest) / nPanels;
      let c = 0;
      for (let i = 0; i < nItems; i++) {
        // increment panel counter
        if (
          i % divider === 0 && // only when the index is divisible by the divider
          i > 0 && // exclude first index, otherwise it create a empty array at index 0
          i < nItems - rest // expclude last index, otherwise it create a last array with all ohter items (array length is equal to rest)
        ) {
          c++;
        }

        // check if the sub array exisits, if not we create it
        if (typeof response[c] === "undefined") {
          response.push([]);
        }

        // add data to the current sub-array 'c'
        response[c].push(data.list[i]);
      }

      return response;
    }
  },
  created() {
    // split data into N array depending on the nPanels property
    // this will allow to create separated slide content for N tabs
    this.tabnavConfig = { contents: this.splitArray(this.data) };
    this.tabContent = this.tabnavConfig.contents[this.selectedItemIndex];
    this.tabnavConfig.tabs = this.tabnavConfig.contents.map((v, index) => {
      return {
        title: index + 1,
        id: index
      };
    });
  }
};
</script>
