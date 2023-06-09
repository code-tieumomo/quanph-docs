// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require("dotenv").config();

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "...",
  tagline: "...",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url:
    process.env.APP_ENV === "development"
      ? "http://localhost:3000"
      : "https://quanph.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "code-tieumomo", // Usually your GitHub org/user name.
  projectName: "quanph-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "vi",
    locales: ["vi"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/code-tieumomo/quanph-docs/tree/master/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/code-tieumomo/quanph-docs/tree/master/",
          blogSidebarTitle: "Tất cả bài viết",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "...",
        // hideOnScroll: true,
        logo: {
          alt: "Logo",
          src: "https://img.icons8.com/arcade/100/null/book-shelf.png",
        },
        items: [
          {
            to: "/docs/intro",
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tài liệu",
            sidebarid: "docs",
          },
          {
            to: "/posts/intro",
            position: "left",
            label: "Bài viết",
            activeBaseRegex: `/posts/`,
            sidebarid: "posts",
          },
          {
            to: "/teaching/intro",
            position: "left",
            label: "Giảng dạy",
            activeBaseRegex: `/teaching/`,
            sidebarid: "teaching",
          },
          {
            href: "/settings",
            position: "right",
            className: "header-config-link",
          },
          {
            href: "https://github.com/code-tieumomo/quanph-docs",
            position: "right",
            className: "header-github-link",
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()}. Được <a href="https://github.com/code-tieumomo" target="_blank">Quân</a> xây dựng bằng Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: "vi",
      },
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "posts",
        path: "posts",
        routeBasePath: "posts",
        // editUrl: ({ locale, versionDocsDirPath, docPath }) => {
        //     if (locale !== defaultLocale) {
        //         return `https://crowdin.com/project/docusaurus-v2/${locale}`;
        //     }
        //     return `https://github.com/facebook/docusaurus/edit/main/website/${versionDocsDirPath}/${docPath}`;
        // },
        // remarkPlugins: [npm2yarn],
        editCurrentVersion: true,
        sidebarPath: require.resolve("./sidebarsPosts.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editUrl: "https://github.com/code-tieumomo/quanph-docs/tree/master/",
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "teaching",
        path: "teaching",
        routeBasePath: "teaching",
        editCurrentVersion: true,
        sidebarPath: require.resolve("./sidebarsTeaching.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editUrl: "https://github.com/code-tieumomo/quanph-docs/tree/master/",
      }),
    ],
    [
      "docusaurus2-dotenv-2",
      {
        systemvars: true,
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-26EESYPVB9",
        anonymizeIP: true,
      },
    ],
    [
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-TV5CB5P",
      },
    ],
  ],
};

module.exports = config;
