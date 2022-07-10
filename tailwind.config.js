const { default: plugin } = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        cloud: "url('../../public/images/cloud.jpg')",
      },
      colors: {
        main: "#FCFCFB",
        pink: "#FB90A7",
        lpink: "#FCA2B5",
        sky: "#79A8EF",
      },
      width: {
        128: "32rem",
      },
      height: {
        108: "26rem",
      },
      minHeight: {
        "1/2": "50%",
        halfScreen: "70vh",
      },
      animation: {
        right: "fadeRight 2.5s",
        rightsm: "fadeRightsm 2.5s",
        show: "modalShow 0.3s",
        close: "modalClose 1s",
        showInfinity: "modalShow 1s infinite alternate",
        showDisplay: "itemShow 0.5s",
        showExp: "expansion 0.5s",
        shimmer: "shimmer 1.3s linear infinite",
        shimmerShort: "shimmerShort 1.1s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": {
            backgroundPosition: "-160px 0",
          },
          "100%": {
            backgroundPosition: "160px 0",
          },
        },
        shimmerShort: {
          "0%": {
            backgroundPosition: "-60px 0",
          },
          "100%": {
            backgroundPosition: "60px 0",
          },
        },
        expansion: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.2)" },
        },
        fadeRight: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        fadeRightsm: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(3rem)" },
        },
        modalShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        modalClose: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        itemShow: {
          from: {
            opacity: 0,
            transform: "scale(0)",
          },
          to: {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      animationDelay: {
        1000: "1000ms",
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
      },
    },
  },
  variants: {
    animationFillMode: ["responsive"],
  },
  plugins: [require("tailwindcss-animation")],
};
