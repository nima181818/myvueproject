export function limit () {
  console.log('dede')
  var returnArray = []
  var limx = document.getElementsByClassName('limx')[0]
  var inputfunc = document.getElementsByClassName('inputfunc')[0]
  var limxText = limx.value
  var inputfuncText = inputfunc.value
  returnArray.push(limxText, inputfuncText)
  return returnArray
}
