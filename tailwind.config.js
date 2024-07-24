module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
  ],
  theme: {
    extend: {},
  },
  presets: [require("@digitalservice4germany/style-dictionary/tailwind")],
  variants: {},
  plugins: [],
};
