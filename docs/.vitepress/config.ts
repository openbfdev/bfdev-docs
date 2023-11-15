import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
    title: "bfdev-docs",
    description: 'The bfdev library documentation',
    base: '/bfdev-docs/',

    locales: {
        root: {
            label: 'English',
            lang: 'en'
        }
    },

    themeConfig: {
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/openbfdev/bfdev'
            }
        ],

        editLink: {
            text: 'Edit this page on GitHub',
            pattern: 'https://github.com/openbfdev/bfdev-docs/edit/master/docs/:path'
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023 Openbfdev development team'
        }
    }
})
