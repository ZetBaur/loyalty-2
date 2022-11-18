/* eslint-env node */

module.exports = {
    content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],

    // content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],

    // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

    theme: {
        extend: {
            backgroundImage: {}
        }
    },

    plugins: []
};
