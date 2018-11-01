export function accountIt (ss) {
  // ss = ''
  var father = document.getElementsByClassName('operator')
  father[0].onclick = function (event) {
    var ev = event
    var target = ev.target
    if (target.innerHTML !== 'c' &&
      target.innerHTML !== 'del' &&
      target.innerHTML !== '=' &&
      target.innerHTML[0] !== '<') {
      ss += target.innerHTML
    }
    console.log('js中' + ss)

    return ss
  }
  return father[0].onclick
}
