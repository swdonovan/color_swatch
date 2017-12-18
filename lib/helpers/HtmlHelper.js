const $ = require('jquery')
const $swatchArticle = $('.colorized-text')

module.exports = class HTMLHelper{
  static appendTopWord(data, element){
    $(element).append(
      `Top Color: ${data.value} Count: ${data.color_count}`
    )
  }

  static appendColorSwatches(color){
    $($swatchArticle).append(
      `<div class="swatch" style="background-color:${color};"></div>`
    )
  }
}
