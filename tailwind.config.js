/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        //primary
        Purple: "hsl(259, 100%, 65%)",
        LightRed: "rgb(237, 31, 131)",
        //neutral
        White: "hsl(0, 0%, 100%)",
        OffWhite: "hsl(0,0%,94%)",
        LightGrey: "hsl(0,0%,86%)",
        SmokeyGrey: "hsl(0,1%,44%)",
        OffBlack: "hsl(0,0%,8%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      mobile: "375px",
      laptop: "768px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
