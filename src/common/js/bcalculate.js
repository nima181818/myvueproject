export function accountIt (ss) {
  var father = document.getElementsByClassName('operator')
  father[0].onclick = function (event) {
    var ev = event
    var target = ev.target
    if (target.innerHTML !== 'c' &&
      target.innerHTML !== 'del' &&
      target.innerHTML !== '=') {
      ss += target.innerHTML
    }
    console.log('js中' + ss)

    return ss
  }
  return father[0].onclick
}
