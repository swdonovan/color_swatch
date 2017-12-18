const $ = require('jquery')

module.exports = class HTMLHelper{
  static appendTopWord(data, element){
    $(element).append(
      `Top Color: ${data.value} Count: ${data.color_count}`
    )
  }
}
