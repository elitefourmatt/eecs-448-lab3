function changeCSS() {
    let backgroundR = document.getElementById("backR").value;
    let backgroundG = document.getElementById("backG").value;
    let backgroundB = document.getElementById("backB").value;
    let bordR = document.getElementById("borderR").value;
    let bordG = document.getElementById("borderG").value;
    let bordB = document.getElementById("borderB").value;
    let bordW = document.getElementById("borderW").value;
  
    document.getElementById("paragraph").style.backgroundColor='rgb('+backgroundR+','+backgroundG+','+backgroundB+')';
  
  
    document.getElementById("paragraph").style.border=bordW + 'px ridge '+'rgb('+bordR+','+bordG+','+bordB+')';
  
  }


