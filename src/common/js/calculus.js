export function calculusIt () {
  var resultOfjs = []
  var topLimit = document.getElementById('top1')
  var middles = document.getElementById('middle1')
  var botomLimit = document.getElementById('bottom1')
  var topLimitInnerText = topLimit.value
  var middleInnerText = middles.value
  var bottomLimitInnerText = botomLimit.value
  // console.log('js相应')
  // console.log(topLimit)
  resultOfjs.push(topLimitInnerText, middleInnerText, bottomLimitInnerText)
  var resultsArray = resultOfjs
  return resultsArray
  // console.log(topLimitInnerText)
}
