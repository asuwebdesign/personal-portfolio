module.exports = {
  plugins: {
    'postcss-pxtorem': {
      propList: [
        'font',
        'font-size',
        'line-height',
        'letter-spacing',
        'left',
        'right',
        'top',
        'bottom',
        'width',
        'height',
        'padding',
        'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
        'margin',
        'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
        'border',
        'border-width',
      ],
    }
  }
}
