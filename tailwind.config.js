/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        './src/**/*.{html,js}',
        './node_modules/tw-elements/dist/js/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FB4C59',
                secondary: '#51CCF3'
            }
        },
        fontFamily: {
            fontPrimary: 'Outfit'
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tw-elements/dist/plugin')
    ],
}