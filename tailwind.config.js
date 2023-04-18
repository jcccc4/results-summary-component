/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#87CEFA",
        "violet-a": "#7755FF",
        "violet-b": "#6943FF",
        "violet-c": "#2F2CE9",
        "light-blue": "#CAC9FF",
        "circle-a": "#4D21C9",
        "circle-b": "rgba(37, 33, 201, 0)",
        "blue-a": "#D9D9D9",
        "dark-navy": "#303B59",
        "font-red":"#FF5555",
        "font-yellow":"#FFB21E",
        "font-green":"#00BB8F",
        "font-blue":"#1125D6",
        "very-light-blue":"#ECF2FF",
      },
      borderRadius: {
        "custom-box": "0 0 32px 32px",
        "custom-box-lg": "32px 32px 32px 32px",
      },
      height: {
        356: "356px",
        140: "140px",
        72: "72px",
        128:"512px",
        184:"736px",
        50:"200px",
        33.5:"134px",
        15.5:"62px",
        10.5:"42"
      },
      width: {
        356: "356px",
        140: "140px",
        65: "260px",
        95: "95px",
        315:"315px",
        128:"512px",
        184:"736px",
        92:"368px",
        184:"736px",
        50:"200px"
      },
      margin: {
        29: "29px",
      },
      fontFamily: {
        "HankenGrotesk-Bold": "HankenGrotesk-Bold",
        "HankenGrotesk-ExtraBold": "HankenGrotesk-ExtraBold",
        "HankenGrotesk-Medium": "HankenGrotesk-Medium",
        "HankenGrotesk": "HankenGrotesk",
      },
      fontSize: {
        56: "56px",
        8:"32px",
      },
      textOpacity: {
        51: ".5168",
      },
      textColor:{
        "custom-blue": "#D9D9D9",
      },
      margin:{
        6.75:"27px",
        9.5:"38px",
        8.75:"35px",
        6.5:"26px"
      },
      dropShadow: {
        '3xl': '0 30px 60px rgba(61, 108, 236, 0.15)',}
      //...
    },
  },
  plugins: [],
};
// 'violet-a': '#7755FF',
// 'violet-b': '#6943FF',
// 'violet-c': '#2F2CE9',
