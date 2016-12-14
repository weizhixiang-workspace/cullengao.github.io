var color = ["#CCCCCC","#333333","#990099"];
var mytitle = document.getElementById("title");
var rand   = Math.floor(Math.random()*colors.length);
mytitle.style.borderColor = colors[rand];
