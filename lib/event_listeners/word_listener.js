import ColorRunner from '../models/ColorRunner'

const $ = require('jquery')
const $textArea = $('textarea')
const $submitButton = $('button')
const $topColor = $('.top-color')

ColorRunner.topColor($topColor)

$($submitButton).on('click', (event)=>{
  debugger;
})
