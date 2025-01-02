/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'], // Phông chữ chính
        sans: ['sans-serif'], // Phông chữ chính
        Poppins: ['Poppins'],
        Arial: ['Arial'],
      },
      colors: {
        purple: '#7D6AFF', // Màu sắc tùy chỉnh
      },
    },
  },
  plugins: [],
};
