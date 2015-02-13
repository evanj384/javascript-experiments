var flipCoin = function(){ 
  if(Math.random() > 0.5){
    return true;
  } else {
    return false;
  } 
}

var bass = "bass";
var snare = "snare";
var hi_hat = "hi-hat";
 
var myIntervalTimer = setInterval(function(){ 
  bass += "bass";
  if(bass.length > 1){
    bass = "bass";
  }
  if(flipCoin()){
    console.log('%c'+bass, 'background: black; color: purple; font-size: '+(Math.random() >= 0.5) *50+'px;');
  } else {
    console.log('%c'+snare, 'background: red; color: orange; font-size: '+(Math.random() <= 0.5) *30+'px;');
  }
}, 200);
 
setTimeout(function(){ 
  clearInterval(myIntervalTimer);
}, 1000 * 10);
