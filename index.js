var p = document.getElementById('text');
p.innerHTML = '';
var n = 0;
var m = 0;
var str = 'Welcome to My Portfolio.';
var typeTimer = setInterval(function() {
  n = n + 1;
  if(m === 0){
  p.innerHTML = "> " + str.slice(0, n);
    m = 1;
  }else{
    p.innerHTML = "> " + str.slice(0, n) + "|"
    m = 0;
  }
  
  if (n === str.length) {
    clearInterval(typeTimer);
    p.innerHTML =  str;
    n = 0;
    setInterval(function() {

      if (n === 0) {
        p.innerHTML = str + "|"
        n = 1;
      } else {
        p.innerHTML = str + "&nbsp"
        n = 0;
      };
    }, 700);
  };
}, 500)
