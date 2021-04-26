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
        // create the new property 'tabs'
        // check for 'tabnav' property
        if (document.hasOwnProperty("tabnav") && document.tabnav) {
          const tabs = [];
          for (let i = 0; i < document.tabNumber; i++) {
            const tabVal = await database.markdown.toJSON(
              document["tab" + (i + 1)]
            );
            tabs.push(tabVal);
          }
          Object.assign(document, { tabs });

          // detect nested tabs
          // if (document.hasOwnProperty("isNested") && document.isNested) {
          //   console.log(">>detected nested tabs here");
          //   const nested = [];
          //   for (let i = 0; i < document.nestedTabNumber; i++) {
          //     const nesVal = await database.markdown.toJSON(
          //       document["solo" + (i + 1)]
          //     );
          //     nested.push(nesVal);
          //   }
          //   // document.tab4 = document.tab4.replace(
          //   //   /:dataSource=""/g,
          //   //   ':dataSource="{' + nested + '}"'
          //   // );
          //   // const tab4Val = await database.markdown.toJSON(document["tab4"]);
          //   Object.assign(document, { nested /*, tab4: tab4Val*/ });
          // }
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
