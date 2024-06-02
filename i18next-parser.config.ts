module.exports = {
    defaultNamespace: 'translation',
    lexers: {
        ts: ['TsxLexer'],
        default: ['TypescriptLexer'],
    },
    locales: ['en', 'ru', 'ua', 'by'],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    input: ['src/*.ts',]
};