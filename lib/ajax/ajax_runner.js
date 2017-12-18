const $ = require('jquery')
const apiURL = "https://color-swatch-api.herokuapp.com/"

module.exports = class AjaxRunner{

  static topColor (){
    return $.getJSON(`${apiURL}/api/v1/top_color`)
  }
}
