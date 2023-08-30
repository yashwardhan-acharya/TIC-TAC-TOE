function sub_3() {
  d1 = document.getElementById("f-name").value;
  localStorage.setItem("d", d1);
  d2 = document.getElementById("s-name").value;
  localStorage.setItem("b", d2);

}
function my() {
  a = localStorage.getItem("d");
  if (a==0) {
    document.getElementById("name").innerHTML = " ";
    
  } else {
    
    document.getElementById("name").innerHTML = a + " - X";
    document.getElementById("ans").innerHTML='First Turn- ' + a ; 
  }

  d1 = localStorage.getItem("b");
  if (d1==0) {
    document.getElementById("name-2").innerHTML =" ";
    
  } else {
    
    document.getElementById("name-2").innerHTML = d1 + " - O";
  }
}
setTimeout(my, 10);

function f() {
  a = localStorage.getItem("d");
  d1 = localStorage.getItem("b");
  // p1 = document.getElementById("f-name").value;
  // p2 = document.getElementById("s-name").value;

  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  if (b1 == "X" && b2 == "X" && b3 == "X") {
    document.getElementById("ans").innerHTML = a + " won";

    document.getElementById("b1").className = "red";
    document.getElementById("b2").className = "red";
    document.getElementById("b3").className = "red";

    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b1 == "X" && b4 == "X" && b7 == "X") {
    document.getElementById("ans").innerHTML = a + " won";

    document.getElementById("b1").className = "red";
    document.getElementById("b4").className = "red";
    document.getElementById("b7").className = "red";

    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b7 == "X" && b8 == "X" && b9 == "X") {
    document.getElementById("ans").innerHTML = a + " won";

    document.getElementById("b7").className = "red";
    document.getElementById("b8").className = "red";
    document.getElementById("b9").className = "red";

    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
  } else if (b3 == "X" && b6 == "X" && b9 == "X") {
    document.getElementById("ans").innerHTML = a + " won";

    document.getElementById("b3").className = "red";
    document.getElementById("b6").className = "red";
    document.getElementById("b9").className = "red";

    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
  } else if (b1 == "X" && b5 == "X" && b9 == "X") {
    document.getElementById("ans").innerHTML = a + " won";

    document.getElementById("b1").className = "red";
    document.getElementById("b5").className = "red";
    document.getElementById("b9").className = "red";

    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
  } else if (b3 == "X" && b5 == "X" && b7 == "X") {
    document.getElementById("ans").innerHTML = a + " won";

    document.getElementById("b3").className = "red";
    document.getElementById("b5").className = "red";
    document.getElementById("b7").className = "red";

    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b2 == "X" && b5 == "X" && b8 == "X") {
    document.getElementById("ans").innerHTML = a + " won";

    document.getElementById("b2").className = "red";
    document.getElementById("b5").className = "red";
    document.getElementById("b8").className = "red";

    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b4 == "X" && b5 == "X" && b6 == "X") {
    document.getElementById("ans").innerHTML = a + " won";

    document.getElementById("b4").className = "red";
    document.getElementById("b5").className = "red";
    document.getElementById("b6").className = "red";

    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b1 == "O" && b2 == "O" && b3 == "O") {
    document.getElementById("ans").innerHTML = d1 + " won";

    document.getElementById("b1").className = "red";
    document.getElementById("b2").className = "red";
    document.getElementById("b3").className = "red";

    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b1 == "O" && b4 == "O" && b7 == "O") {
    document.getElementById("ans").innerHTML = d1 + " won";

    document.getElementById("b1").className = "red";
    document.getElementById("b4").className = "red";
    document.getElementById("b7").className = "red";

    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b7 == "O" && b8 == "O" && b9 == "O") {
    document.getElementById("ans").innerHTML = d1 + " won";

    document.getElementById("b7").className = "red";
    document.getElementById("b8").className = "red";
    document.getElementById("b9").className = "red";

    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
  } else if (b3 == "O" && b6 == "O" && b9 == "O") {
    document.getElementById("ans").innerHTML = d1 + " won";

    document.getElementById("b3").className = "red";
    document.getElementById("b6").className = "red";
    document.getElementById("b9").className = "red";

    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
  } else if (b1 == "O" && b5 == "O" && b9 == "O") {
    document.getElementById("ans").innerHTML = d1 + " won";

    document.getElementById("b1").className = "red";
    document.getElementById("b5").className = "red";
    document.getElementById("b9").className = "red";

    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
  } else if (b3 == "O" && b5 == "O" && b7 == "O") {
    document.getElementById("ans").innerHTML = d1 + " won";

    document.getElementById("b3").className = "red";
    document.getElementById("b5").className = "red";
    document.getElementById("b7").className = "red";

    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b2 == "O" && b5 == "O" && b8 == "O") {
    document.getElementById("ans").innerHTML = d1 + " won";

    document.getElementById("b2").className = "red";
    document.getElementById("b5").className = "red";
    document.getElementById("b8").className = "red";

    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b4 == "O" && b5 == "O" && b6 == "O") {
    document.getElementById("ans").innerHTML = d1 + " won";

    document.getElementById("b4").className = "red";
    document.getElementById("b5").className = "red";
    document.getElementById("b6").className = "red";

    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (
    (b1 == "X" || b1 == "O") &&
    (b2 == "X" || b2 == "O") &&
    (b3 == "X" || b3 == "O") &&
    (b4 == "X" || b4 == "O") &&
    (b5 == "X" || b5 == "O") &&
    (b6 == "X" || b6 == "O") &&
    (b7 == "X" || b7 == "O") &&
    (b8 == "X" || b8 == "O") &&
    (b9 == "X" || b9 == "O")
  ) {
    document.getElementById("ans").innerHTML = "Match Tie";
  } else {
    if (i % 2 == 0) {
      document.getElementById("ans").innerHTML = a + "'s Turn";
    } else {
      document.getElementById("ans").innerHTML = d1 + "'s Turn";
    }
  }
}

i = 2;

function fun_1() {
  if (i % 2 == 0) {
    document.getElementById("b1").value = "X";
    // document.getElementById("ans").innerHTML="player-X";
    document.getElementById("b1").disabled = true;
    i++;
  } else {
    document.getElementById("b1").value = "O";
    // document.getElementById("ans").innerHTML="player-O";
    document.getElementById("b1").disabled = true;
    i++;
  }
}
function fun_2() {
  if (i % 2 == 0) {
    // document.getElementById("ans").innerHTML="player-X";
    document.getElementById("b2").value = "X";
    document.getElementById("b2").disabled = true;
    i++;
  } else {
    document.getElementById("b2").value = "O";
    document.getElementById("b2").disabled = true;
    // document.getElementById("ans").innerHTML="player-O";

    i++;
  }
}
function fun_3() {
  if (i % 2 == 0) {
    document.getElementById("b3").value = "X";
    document.getElementById("b3").disabled = true;
    // document.getElementById("ans").innerHTML="player-X";

    i++;
  } else {
    document.getElementById("b3").value = "O";
    document.getElementById("b3").disabled = true;
    // document.getElementById("ans").innerHTML="player-O";

    i++;
  }
}
function fun_4() {
  if (i % 2 == 0) {
    document.getElementById("b4").value = "X";
    document.getElementById("b4").disabled = true;
    // document.getElementById("ans").innerHTML="player-X";

    i++;
  } else {
    document.getElementById("b4").value = "O";
    document.getElementById("b4").disabled = true;
    // document.getElementById("ans").innerHTML="player-O";

    i++;
  }
}
function fun_5() {
  if (i % 2 == 0) {
    document.getElementById("b5").value = "X";
    document.getElementById("b5").disabled = true;
    // document.getElementById("ans").innerHTML="player-X";

    i++;
  } else {
    document.getElementById("b5").value = "O";
    document.getElementById("b5").disabled = true;
    // document.getElementById("ans").innerHTML="player-O";

    i++;
  }
}
function fun_6() {
  if (i % 2 == 0) {
    document.getElementById("b6").value = "X";
    document.getElementById("b6").disabled = true;
    // document.getElementById("ans").innerHTML="player-X";

    i++;
  } else {
    document.getElementById("b6").value = "O";
    document.getElementById("b6").disabled = true;
    // document.getElementById("ans").innerHTML="player-O";

    i++;
  }
}
function fun_7() {
  if (i % 2 == 0) {
    document.getElementById("b7").value = "X";
    document.getElementById("b7").disabled = true;
    // document.getElementById("ans").innerHTML="player-X";

    i++;
  } else {
    document.getElementById("b7").value = "O";
    document.getElementById("b7").disabled = true;
    // document.getElementById("ans").innerHTML="player-O";

    i++;
  }
}
function fun_8() {
  if (i % 2 == 0) {
    document.getElementById("b8").value = "X";
    document.getElementById("b8").disabled = true;
    // document.getElementById("ans").innerHTML="player-X";

    i++;
  } else {
    document.getElementById("b8").value = "O";
    document.getElementById("b8").disabled = true;
    // document.getElementById("ans").innerHTML="player-O";

    i++;
  }
}
function fun_9() {
  if (i % 2 == 0) {
    document.getElementById("b9").value = "X";
    document.getElementById("b9").disabled = true;
    // document.getElementById("ans").innerHTML="player-X";

    i++;
  } else {
    document.getElementById("b9").value = "O";
    document.getElementById("b9").disabled = true;
    // document.getElementById("ans").innerHTML="player-O";

    i++;
  }
}
