const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,about}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        a: {
          bg: "#ecfeff", //cyan-50 
          a: "#3B82F6", //sky-500 
        }
      },
      fontFamily: {
        a: ["Lato", ...fontFamily.sans],
      }

    },
  },
  plugins: [],
};
