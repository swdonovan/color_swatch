import COLORS from '../data/colors'
import HtmlHelper from '../helpers/HtmlHelper'
import Ajax from '../ajax/ajax_runner'


module.exports = class WordRunner{

  static textColorSort(text){
    let colors = []
    text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\r?\n|\r]/g," ")
    .split(' ').forEach((word)=>{
      if (COLORS[word]) {
        Ajax.postColor(word)
        if (colors.includes(word) == false) {
          colors.push(word)
          HtmlHelper.appendColorSwatches(COLORS[word])
        }
      }
    })
  }
}
