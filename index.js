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
}, 200);

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
