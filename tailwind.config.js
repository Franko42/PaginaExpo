/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Make sure the paths are correct
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Cg fill=%22%23fc3a63%22 fill-opacity=%221%22%3E%3Cpolygon fill-rule=%22evenodd%22 points=%278 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4%27/%3E%3C/g%3E%3C/svg%3E')",
      },

      colors: {
        customRed: '#f71546',
        customBlue: '#083175',
      }
    },
  },
  plugins: [],
};