import Ajax from '../ajax/ajax_runner'
import HtmlHelper from '../helpers/HtmlHelper'


module.exports = class Color{

  static topColor(element) {
    Ajax.topColor().then((data)=>{
      HtmlHelper.appendTopWord(data, element)
    })
  }
}
