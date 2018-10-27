export function funcCanvas () {
  console.log('d')
  var text1 = document.getElementsByClassName('showLeft')[0]
  var text2 = document.getElementsByClassName('showRight')[0]
  var text3 = document.getElementsByClassName('funcInput')[0]
  var btn = document.getElementsByClassName('clearca')[0]
  var btn1 = document.getElementsByClassName('getPaining')[0]
  var drawing = document.getElementsByClassName('mycanvas')[0]
  drawing.onclick = function (event) {
    getMousePos(drawing, event)
  }

  function getMousePos (drawing, event) {
    var rect = drawing.getBoundingClientRect()
    var x = event.clientX - rect.left * (drawing.width / rect.width)
    var y = event.clientY - rect.top * (drawing.height / rect.height)
    console.log('x:' + x + ',y:' + y)
  }
  if (drawing.getContext) {
    var context = drawing.getContext('2d')
  }
  btn.onclick = function () {
    if (drawing.getContext) {
      var context = drawing.getContext('2d')
      context.clearRect(0, 0, 2000, 2000)
      context.beginPath()
      context.strokeStyle = 'gray'

      context.strokeRect(10, 10, 10, 10)
      context.fillStyle = 'black'
      context.textBaseline = 'top'

      context.lineWidth = 1
      for (var i = 0; i < 50; i++) {
        for (var j = 0; j < 50; j++) {
          context.strokeRect(20 * j, 20 * i, 20, 20)
        }
      }
      context.stroke()
      context.beginPath()
      context.strokeText(0, 500, 500)
      for (i = 1; i <= 40; i++) {
        i = i.toString()
        console.log('鞋子')
        context.strokeText(i, 500 + 20 * i, 500)
        context.strokeText(i, 500, 500 - 20 * i)
        context.strokeText('-' + i, 500 - 20 * i, 500)
      }
      context.stroke()
    }
  }
  btn1.onclick = function () {
    console.log('fuck?')
    var c = text3.value
    var a1 = text1.value
    var b1 = text2.value
    // context.strokeStyle = 'gray'
    // for (var i = 0; i < 50; i++) {
    //   for (var j = 0; j < 50; j++) {
    //     context.strokeRect(20 * j, 20 * i, 20, 20)
    //   }
    // }
    context.stroke()
    // context.strokeStyle = 'red'
    // context.moveTo(0,0)
    var re = /x/g
    var newc = '20*' + '(' + c + ')'
    newc = newc.replace(re, '((x-500)/20)')
    console.log('开始函数结果' + newc)
    newc = '500-' + newc // 这里还是函数
    var nnewc = newc
    console.log('函数结果' + newc)
    var newa1 = '20*' + '(' + a1 + ')' + '+500'
    var newb1 = '20*' + '(' + b1 + ')' + '+500'
    console.log('范围结果' + newa1)
    var resultArray = [newa1, newb1, nnewc]
    return resultArray
  }

  return btn1.onclick
}
