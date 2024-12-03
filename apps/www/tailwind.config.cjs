const baseConfig = require("../../tailwind.config.cjs")

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    "content/**/*.mdx",
    "registry/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      ...baseConfig.theme?.extend,
      colors: {
        ...baseConfig.theme?.extend?.colors,
        tprimary: '#F9B21A',
        tsecondary: '#1D2F54',
        tblack: '#222831',
        tgrey: '#30363F',
        tsilver: '#E4E0E0',
        tred: '#c1554e',
      },
      borderColor: {
        border: 'hsl(var(--border))', // Add this line
      },
    },
  },
}