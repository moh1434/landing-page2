module.exports = {
    purge: {
        content: ['./public/index.html']
    },

    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            minWidth: {
                '72': '18rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}