/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'CanopyTax',
    image: 'img/canopy-logo-icon.svg',
    infoLink: 'https://www.canopytax.com',
    pinned: true,
  },
  {
    caption: 'DealerSocket',
    image: 'img/dealersocket.png',
    infoLink: 'https://dealersocket.com/',
    pinned: true,
  },
  {
    caption: 'Beamery',
    image: 'img/beamery.svg',
    infoLink: 'https://beamery.com/',
    pinned: true,
  },
];

const siteConfig = {
  title: 'single-spa' /* title for your website */,
  tagline: 'a javascript meta-framework for simplistic front-end microservices',
  url: 'https://canopytax.github.io/single-spa.js.org' /* your website url */,
  baseUrl: '/single-spa.js.org/' /* base url for your project */,
  projectName: 'single-spa',
  headerLinks: [
    {doc: 'building-applications', label: 'Docs'},
    {doc: 'api', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
    { href: "https://github.com/CanopyTax/single-spa", label: "GitHub" },
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/logo-white-bgblue.svg',
  footerIcon: 'img/logo-white-bgblue.svg',
  favicon: 'img/logo-blue-favicon.ico',
  /* colors for website */
  colors: {
    primaryColor: '#0011FF',
    secondaryColor: '#464646',
  },
  /* custom fonts for website */
  fonts: {
    mainFont: [
      'Roboto',
      'sans-serif'
    ],
    accentFont: [
      'Montserrat',
      '-apple-system',
      'system-ui',
    ],
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' CanopyTax',
  organizationName: 'CanopyTax', // or set an env variable ORGANIZATION_NAME
  projectName: 'single-spa.js.org', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: [],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/CanopyTax/single-spa',
  editUrl: 'https://github.com/CanopyTax/single-spa.js.org/blob/master/docs/'
};

module.exports = siteConfig;
