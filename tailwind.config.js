module.exports = {

  plugins: [
      require('flowbite/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.js"
],
variants: {
  extend: {
    // enable group-hover variant
    backgroundColor: ['dark', 'dark:hover', 'group-hover'],
    textColor: ['dark', 'dark:hover', 'group-hover'],
    borderColor: ['dark', 'dark:hover', 'group-hover'],
    // add more variants as needed
  },
},

} 