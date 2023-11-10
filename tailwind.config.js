
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily :{
        source: ['Source Sans 3', "sans-serif"],
        nunito: ['Nunito Sans', 'sans-serif'] 

      },
      backgroundImage: {
        'hero_bg': `../rumtipet/src/assets/img/hero/hero_bg.png`
      }
    
    },
  },
  plugins: [],
}

