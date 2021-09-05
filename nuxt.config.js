export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Maxi Ruti",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Hi! I am Maxi and this is my portfolio website, where I share some of my projects and write post and reviews about web development courses.",
      },
      {
        hid: "image",
        name: "image",
        content:
          "https://pbs.twimg.com/profile_images/1403603169742135297/SnjE8QCF_400x400.jpg",
      },
      { name: "format-detection", content: "telephone=no" },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      { hid: "twitter:site", name: "twitter:site", content: "@MaxCodeJourney" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://my-portfolio-blog-website.netlify.app/",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "My portfolio-blog website",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Hi! I am Maxi and this is my portfolio website, where I share some of my projects and write post and reviews about web development courses.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content:
          "https://pbs.twimg.com/profile_images/1403603169742135297/SnjE8QCF_400x400.jpg",
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: "og:site_name", property: "og:site_name", content: "Nuxt" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://my-portfolio-blog-website.netlify.app/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "My portfolio-blog website",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Hi! I am Maxi and this is my portfolio website, where I share some of my projects and write post and reviews about web development courses.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://pbs.twimg.com/profile_images/1403603169742135297/SnjE8QCF_400x400.jpg",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content:
          "https://pbs.twimg.com/profile_images/1403603169742135297/SnjE8QCF_400x400.jpg",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Maxi Ruti",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/icon.png" }],
  },
  googleFonts: {
    families: {
      Roboto: true,
      "Roboto+Condense": true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/style.css", "@fortawesome/fontawesome-svg-core/styles.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/fontawesome.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/pwa",
  ],
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/, /fas.*/],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    nestedProperties: ["author.name"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: true,
  },
};
