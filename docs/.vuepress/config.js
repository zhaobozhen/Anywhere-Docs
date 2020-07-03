module.exports = {
  base: '/Anywhere-Docs/',
  title: 'Anywhere-',
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Noto+Sans+SC:400,500,700&display=swap'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,500,700&display=swap'
    }],
    ['link', { rel: 'icon', type: 'image/png', size: '192x192', href: '/icon/android-icon-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', size: '32x32', href: '/icon/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', size: '96x96', href: '/icon/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/png', size: '16x16', href: '/icon/favicon-16x16.png' }]
  ],
  locales: {
    '/': {
      lang: 'zh-Hans',
      description: '快捷方式文件夹'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: '语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        sidebar: {
          '/guide/': getSidebar()
        },
        nav: getNavbar('/', '指南', '更新日志', '下载'),
        lastUpdated: '最后更新'
      }
    },
    displayAllHeaders: true,
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true
    },
    repo: 'https://github.com/zhaobozhen/Anywhere-Docs',
    docsRepo: 'https://github.com/zhaobozhen/Anywhere-Docs',
    docsDir: 'docs',
    editLinks: true
  },
}

function getSidebar() {
  return ['', 'URL-Scheme-Usage', 'Root-Mode-Usage', 'Shizuku-Mode-Usage', 'Put-Intent-Extras', 'Adding-Approach']
}

function getNavbar(prefix, guide, changelog, download) {
  return [
    { text: guide, link: `${prefix}guide/` },
    { text: changelog, link: `${prefix}changelog.html` },
    { text: download, link: `${prefix}download.html` },
  ]
}