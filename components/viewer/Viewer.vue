<template>
  <div class="app-viewer">
    <!-- grid -->
    <div class="app-viewer--grid" v-if="isLoaded">
      <div class="app-viewer--item" v-for="(item, index) in list" :key="index">
        <a
          href="#"
          class="app-viewer--link"
          :title="item.title"
          @click.prevent="showItem(index, list)"
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

    <!-- viewer -->
    <div v-if="activeData.hasOwnProperty('title')" class="app-viewer--view">
      <figure class="app-viewer--fig">
        <img
          :src="require(`@/assets/img/artworks/${activeData.image}`)"
          :alt="activeData.title"
          class="app-viewer--image"
        />
        <figcaption
          class="app-viewer--caption"
          v-html="activeData.description"
        ></figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      isLoaded: false,
      list: [],
      activeData: {}
    };
  },

  methods: {
    showItem(index, list) {
      this.activeData = list[index];
    }
  },

  computed: {
    updatedList() {
      return this.dataSource;
    }
  },

  created() {
    this.list = this.dataSource;
    this.isLoaded = true;
    this.showItem(0, this.list);
  }
};
</script>

<style lang="postcss" scoped>
.app-viewer {
  @apply w-full h-full bg-white flex;

  & .app-viewer--grid {
    max-width: 270px;
    flex: 0 0 40%;
  }
  & .app-viewer--view {
    @apply flex-auto;
  }
}

.app-viewer--grid {
  @apply grid grid-cols-5 gap-1 p-1;

  & .app-viewer--item {
    text-overflow: hidden;
    overflow: hidden;
    @apply bg-gray-300;

    & .app-viewer--link {
      @apply relative block w-full h-full;

      & .app-viewer--thumb {
        @apply object-cover h-full w-full;
      }
      & .app-viewer--label {
        @apply absolute invisible;
      }
    }
  }
}
.app-viewer--view {
  & .app-viewer--fig {
    @apply w-full h-full flex flex-wrap;
    & .app-viewer--image {
      flex: 1 1 auto;
      width: 100%;
      height: auto;
    }
    & .app-viewer--caption {
      width: 100%;
      height: 30%;
      flex: 1 1 auto;
      @apply p-2;
    }
  }
}
</style>
