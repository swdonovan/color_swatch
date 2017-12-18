import COLORS from '../data/colors'
import HtmlHelper from '../helpers/HtmlHelper'
import Ajax from '../ajax/ajax_runner'


module.exports = class WordRunner{

  static textColorSort(text){
    let colors = []
    this.convertText(text).forEach((word)=>{
      this.checkWord(word, colors)
    })
  }

  static convertText(text){
    return text.toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\r?\n|\r]/g," ")
    .split(' ')
  }

  static checkWord(word, colors){
    if (COLORS[word]) {
      Ajax.postColor(word)
      if (colors.includes(word) == false) {
        colors.push(word)
        HtmlHelper.appendColorSwatches(COLORS[word])
      }
    }
  }
}
