/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },

    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c",
      "custom-blur": "rgba(252, 252, 252, 0.25) 5px 10px 40px 4px",
      "custom-glow": "rgba(244, 225, 174, 0.35) 0px 0px 50px 0px",
      "custom-raised":
        "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    },

    extend: {
      colors: {
        green: {
          DEFAULT: "#8b8c64",
          100: "#d1d1c1",
          200: "#a2a383",
          300: "#878c64",
          500: "#5F5F44",
          700: "#383828",
        },
        brown: {
          DEFAULT: "#8b8c64",
          100: "#d1d1c1",
          200: "#846b51",
          300: "#8F8F66",
          500: "#53543c",
          700: "#383828",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#11182a",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
        night: {
          DEFAULT: "#78624d",
          100: "#344424",
          200: "#233b44",
          300: "#243836",
          500: "#041c24",
          700: "#0d1418",
        },
        //* Original Day
        // day: {
        //   DEFAULT: "#78624d",
        //   100: "#8c8964",
        //   200: "#bf9774",
        //   300: "#b3723c",
        //   500: "#894e30",
        //   700: "#3f2e24",
        // },
        //* Forest 1
        // day: {
        //   DEFAULT: "466640f",
        //   100: "#edebd5",
        //   200: "#d6d4a2",
        //   300: "#8a8324",
        //   500: "#666116",
        //   700: "#4a430d",
        // },
        // day: {
        //   DEFAULT: "#66640f",
        //   100: "#edebd5",
        //   200: "#d6d4a2",
        //   300: "#8a8324",
        //   500: "#666116",
        //   700: "#4a430d",
        // },
        day: {
          DEFAULT: "#66640f",
          100: "#8ea594",
          200: "#abad71",
          300: "#8e6a55",
          500: "#495e4d",
          700: "#374046",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
