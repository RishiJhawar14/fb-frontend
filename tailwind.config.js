// @type {import('tailwindcss').Config}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "3xs": "8px",
        "2xs": "10px",
      },
      colors: {
        primary: {
          blue: {
            50: "#d8e6e8",
            DEFAULT: "#063970",
          },
          red: {
            DEFAULT: "#cc0000",
          },
          gray: {
            50: "#F8F8F9",
            60: "#f0f0f0",
            80: "#EBEBEC",
            100: "#f4f4f4",
            150: "#e3e3e3",
            180: "#BDC1CA",
            200: "#d8d8d8",
            250: "#A4A2A5",
            280: "#8D8A8E",
            300: "#6d6d6d",
            350: "#747474",
            400: "#424242",
            450: "#474747",
            500: "#332e35",
            600: "#323232",
            800: "#363430",
            900: "#171A1FFF",
            1000: "#171718",
          },
        },
      },
    },
  },
  plugins: [],
};
