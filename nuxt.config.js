export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Christian Silvain - Foundation",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  loading: {
    color: "#6c8ac6",
    height: "5px"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "@nuxtjs/axios"],

  hooks: {
    "content:opions": options => {
      // console.log("content options", options);
    },
    "content:file:beforeInsert": async (document, database) => {
      if (document.extension === ".md" && document.body) {
        // check for 'tabnav' property
        if (document.hasOwnProperty("tabnav") && document.tabnav) {
          const tabs = [];
          for (let i = 0; i < document.tabNumber; i++) {
            const tabVal = await database.markdown.toJSON(
              document["tab" + (i + 1)]
            );
            tabs.push(tabVal);
          }
          // create the new property 'tabs'
          Object.assign(document, { tabs });
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {
    cssPath: "~/assets/styles/tailwind.css"
    // jit: false,
    // exposeConfig: true,
  },

  pageTransition: {
    name: "fade",
    mode: "out-in"
  }
};
