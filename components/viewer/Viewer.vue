<template>
  <div class="app-viewer">
    <!-- grid -->
    <viewer-grid
      :data="{ isLoaded, config, list }"
      v-on:dataChanged="listenNewData"
    ></viewer-grid>

    <!-- viewer -->
    <transition name="fade" mode="out-in">
      <component
        :is="'viewer-panel'"
        :data="{ isLoaded, activeData }"
        :key="activeData.id"
      ></component>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    compConfig: {
      type: Object,
      default: () => {
        return {
          gridSize: 6
        };
      }
    }
  },

  data() {
    return {
      activeData: {},
      isLoaded: false,
      list: [],
      config: {}
    };
  },

  created() {
    this.list = this.addIndex(this.dataSource);
    this.isLoaded = this.list.length > 0;
    this.activeData = this.isLoaded ? this.list[0] : {};
    this.config = this.compConfig;
    console.log(this.activeData);
  },

  methods: {
    showItem(data) {
      this.activeData = data;
    },
    listenNewData(data) {
      // console.log(">change data", data);
      this.showItem(data);
    },
    addIndex(array) {
      return array.map((obj, index) => {
        Object.defineProperties(obj, {
          id: {
            value: index,
            writable: true
          }
        });
        return obj;
      });
    }
  }
};
</script>

<style lang="postcss">
.app-viewer {
  @apply flex w-full h-full;
  background-color: inherit;

  & .app-viewer--grid {
    max-width: 270px;
    flex: 0 0 40%;
  }
  & .app-viewer--view {
    @apply flex-auto;
  }
}

.app-viewer--grid {
  @apply grid gap-2 pr-2 mb-auto;
  user-select: none;

  & .app-viewer--item {
    text-overflow: hidden;
    overflow: hidden;

    & .app-viewer--link {
      @apply relative block w-full h-full;

      & .app-viewer--thumb {
        @apply object-cover h-full w-full transition-opacity duration-700 opacity-50;

        &:hover {
          @apply opacity-100;
        }
      }

      & .app-viewer--label {
        @apply absolute invisible;
      }

      &:hover .app-viewer--thumb,
      &:focus .app-viewer--thumb {
        @apply opacity-100;
      }
    }

    &.selected {
      & .app-viewer--link {
        @apply border border-gray-300;
        border-color: red;

        & .app-viewer--thumb {
          @apply opacity-100;
        }
      }
    }
  }
}
.app-viewer--view {
  & .app-viewer--fig {
    @apply w-full bg-gray-300 flex flex-wrap;

    & .app-viewer--image {
      flex: 1 1 auto;
      width: 100%;
      height: auto;
    }
    & .app-viewer--caption {
      width: 100%;
      height: 30%;
      flex: 1 1 auto;
      @apply p-4;

      & .caption-title {
        @apply font-bold pb-4;
      }
      & .caption-desc {
      }
    }
  }
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  /* don't need to precise opacity:1, because 1 is already the default value */
  /* opacity: 1; */
  transition: opacity 1s;
}

.fade-leave {
  /* same here, 1 already the is default value */
  /* opacity: 1; */
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 1s;
}
</style>
