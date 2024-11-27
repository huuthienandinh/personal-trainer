module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'Noto-Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
            },
        },
        screens: {
            xs: '360px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
