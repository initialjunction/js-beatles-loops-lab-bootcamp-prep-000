// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = {};
  var counter = 0;
  for (counter = 0; counter < 5; counter++) {
    beatlesArray.push(`${musicians} + " plays " + ${instruments}`);
  }
  return beatlesArray;
}