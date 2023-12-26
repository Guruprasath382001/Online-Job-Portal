function bigImg(x) {
    x.style.height = "600px";
    x.style.width = "800px";
  }
  
  function normalImg(x) {
    x.style.height = "500px";
    x.style.width = "700px";
  }

//   onmouseover
// onmouse out
// onclick


function myFunction1(x) {
    x.style.background = "yellow";
  }


  function myFunction() {
    alert("Profile updated");
  }

//   onfocus
// onsubmit

function myFunction() {
    let x = document.getElementById("name");
    x.value = x.value.toUpperCase();
  }

//  onblur 
// onchange
 function myFunction2() {
     var x = document.getElementById("mySelect").value;
     document.getElementById("demo").innerHTML = "You selected: " + x;
   }

function mouseDown() {
    document.getElementById("myP").style.color = "red";
  }
  
  function mouseUp() {
    document.getElementById("myP").style.color = "blue";
  }

//   mousedown
// mouseup


function myFunctionr() {
    let w = window.outerWidth;
    let h = window.outerHeight;
    let txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("demon").innerHTML = txt;
  }


//  onload and onclick in announcement