var time = 0;

 var timer = setInterval(function(){
  time += 1;
  console.log( time + ' seconds have passed'); 

  if (time > 14) {
    clearInterval(timer);
  }
}, 1000);