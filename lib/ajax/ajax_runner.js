const $ = require('jquery')
const apiURL = "https://color-swatch-api.herokuapp.com/api/v1"

module.exports = class AjaxRunner{

  static topColor (){
    return $.getJSON(`${apiURL}/top_color`)
  }

  static postColor(color){
    $.post(`${apiURL}/colors`, { color: { value: color } }
    )
  }
}
