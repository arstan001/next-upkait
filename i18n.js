const NextI18Next = require('next-i18next').default


module.exports = new NextI18Next({
    otherLanguages:['ru'],
    defaultNS: 'common',
    localeSubpaths: {
        ru: 'ru'
    },
    localePath: 'public/static/locales'
})