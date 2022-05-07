import '../css/index.css'
import catImg from '../img/cat.jpg'

function component() {
  const element = document.createElement('div')
  element.innerHTML = ['Hello', 'webpack'].join(' ')
  element.classList.add('box')

  // 创建一个img元素,设置src属性
  const imgEl = new Image()
  // imgEl.src = require('../img/cat.jpg').default
  imgEl.src = catImg
  element.appendChild(imgEl)

  // 创建一个div, 设置背景图片
  const bgDivEl = document.createElement('div')
  bgDivEl.style.width = 170 + 'px'
  bgDivEl.style.height = 180 + 'px'
  bgDivEl.className = 'bg-image'
  bgDivEl.style.backgroundColor = 'red'
  element.appendChild(bgDivEl)

  // 创建一个i元素, 设置一个字体
  const iEl = document.createElement('i')
  iEl.style.color = 'green'
  iEl.className = 'toutiao toutiao-shouye'
  element.appendChild(iEl)

  return element
}
document.body.appendChild(component())
