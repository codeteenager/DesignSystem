module.exports = {
    title: '设计系统',
    description: '设计系统的相关资料',
    base: '/DesignSystem/',
    markdown: {
        lineNumbers: true, //显示代码行数
    },
    lastUpdated: true,
    head: [
        ['link', { rel: 'icon', href: '/DesignSystem/favicon.ico' }]
    ],
    themeConfig: {
        // siteTitle: false,
        // logo: "/logo.svg",
        nav: [
            // {
            //     text: '',
            //     link: "/"
            // }
        ],
        outlineTitle: '在本页面',
        lastUpdatedText: '最近更新时间',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present codeteenager'
        },
        socialLinks: [{ icon: "github", link: "https://github.com/codeteenager/DesignSystem" }],
        // sidebar: {
        //     "/web/": [

        //         {
        //             text: "基础",
        //             items: [
        //                 {
        //                     text: "介绍",
        //                     link: "/web/introduction",
        //                 }
        //             ],
        //         }
        //     ],
        // },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    }
}