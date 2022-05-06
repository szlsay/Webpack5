import './style.css';

function component() {
  var element = document.createElement('div')
  element.innerHTML = ['Hello', 'webpack'].join(' ')
  element.classList.add('box');
  return element
}
document.body.appendChild(component())
