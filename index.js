// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatles = {};
  var counter = 0;
  for (counter = 0; counter < 5; counter++) {
    beatles.push(`${musicians} + " plays " + ${instruments}`);
  }
  return beatles;
}