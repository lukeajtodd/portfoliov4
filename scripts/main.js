"use strict";for(var night_box=document.querySelector(".night"),star_limit=45,i=0;i<star_limit;i++){var star=document.createElement("div");star.classList.add("star"),star.style.width=Math.floor(3*Math.random()+2)+"px",star.style.height=star.style.width,star.style.top=Math.floor(100*Math.random())+"%",star.style.left=Math.floor(100*Math.random())+"%",night_box.appendChild(star)}