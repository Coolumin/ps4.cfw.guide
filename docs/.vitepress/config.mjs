/*
  Copyright (C) 2024 Nintendo Homebrew
  Copyright (C) 2024 emiyl
  SPDX-License-Identifier: MIT
*/

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

import container from 'markdown-it-container'

import * as i18n from './i18n'


export default defineConfig({
  title: "PS4 Guide",
  description: "A complete guide to enabling PS4 homebrew; from stock to GoldHEN.",
  head: [
    ['link', { rel: 'icon', href: '/assets/images/favicon.ico' }],
    [ 'script', { type: 'text/javascript', src: '//cdn.thisiswaldo.com/static/js/5303.js' } ],
    [ 'script', { src: 'https://www.googletagmanager.com/gtag/js?id=UA-152619365-1'} ],
		[ 'script', {}, 'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-152619365-1");' ],
  ],
  locales: {
    root: i18n.en_US
  },
  sitemap: {
    hostname: 'https://ps4.emiyl.com'
  },
  themeConfig: {
    search: {
      provider: 'local' 
    docFooter: {
      prev: false,
      next: false
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/2ApmZKs' },
      { icon: 'github', link: 'https://github.com/cfw-guide/ps4.cfw.guide' }
    ],
    adUnits: [
      '5340',
      '5342'
    ],
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPHero.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFooter.vue', import.meta.url)
          )
        }
      ]
    }
  },
  markdown: {
    config: (md) => {
      md.use(container, "tabs", {
        render: (tokens, idx) => {
          const token = tokens[idx];
          if (token.nesting === 1) {
            return `<Tabs ${token.info}>\n`;
          } else {
            return `</Tabs>\n`;
          }
        }
      });
      md.use(container, 'tab', {
        render: (tokens, idx) => {
          const token = tokens[idx];
          if (token.nesting === 1) {
            let tokenData = token.info.match(/^ ?tab\s(default\s)?(.*)$/);
            let isDefault = typeof tokenData[1] !== 'undefined';
            let name = tokenData[2];
            return `<Tab name="${name}" ${isDefault ? "default=true" : ""}>`;
          } else {
            return `</Tab>\n`;
          }
        }
      });
    }
  }
})
