import ColorRunner from '../models/ColorRunner'

const $ = require('jquery')
const $textArea = $('textarea')
const $submissionSection = $('.text-submission')
const $submitButton = $('button')
const $topColor = $('.top-color')

ColorRunner.topColor($topColor)

$($submitButton).on('click', (event)=>{
  combinedCallback(event)
})

$($textArea).keypress((event)=>{
  if (event.which == 13) combinedCallback(event)
})

const combinedCallback = (event) => {
  const text = $('textarea')[0].value
  $('textarea')[0].value = ""
  ColorRunner.convertText(text)
}
