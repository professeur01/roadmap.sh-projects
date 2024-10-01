const box_date = document.querySelector(".box_date");
const box_boule = document.querySelector(".box_boule").children;
const box_sentence = document.querySelector(".box_sentence");

// The Event
box_date.addEventListener("mouseover", hoverDate);
function hoverDate(e) {
  let target = e.target;
  if (target.classList.contains("d_one")) {
    box_boule[0].style.backgroundColor = "hsl(20, 100%, 50%)";
  } else if (target.classList.contains("d_two")) {
    box_boule[1].style.backgroundColor = "hsl(96, 100%, 50%)";
  } else if (target.classList.contains("d_three")) {
    box_boule[2].style.backgroundColor = "hsl(259, 100%, 50%)";
  } else if (target.classList.contains("d_four")) {
    box_boule[3].style.backgroundColor = "hsl(301, 100%, 50%)";
  } else if (target.classList.contains("d_five")) {
    box_boule[4].style.backgroundColor = "hsl(348, 100%, 50%)";
  } else if (target.classList.contains("d_six")) {
    box_boule[5].style.backgroundColor = "hsl(61, 100%, 50%)";
  } else if (target.classList.contains("d_seven")) {
    box_boule[6].style.backgroundColor = "hsl(167, 100%, 50%)";
  }
}
box_date.addEventListener("mouseout", hoverDateOut);
function hoverDateOut(e) {
  let target = e.target;
  if (target.classList.contains("d_one")) {
    console.log(box_date);
    box_boule[0].style.backgroundColor = "";
  } else if (target.classList.contains("d_two")) {
    box_boule[1].style.backgroundColor = "";
  } else if (target.classList.contains("d_three")) {
    box_boule[2].style.backgroundColor = "";
  } else if (target.classList.contains("d_four")) {
    box_boule[3].style.backgroundColor = "";
  } else if (target.classList.contains("d_five")) {
    box_boule[4].style.backgroundColor = "";
  } else if (target.classList.contains("d_six")) {
    box_boule[5].style.backgroundColor = "";
  } else if (target.classList.contains("d_seven")) {
    box_boule[6].style.backgroundColor = "";
  }
}
box_sentence.addEventListener("mouseover", hoverSentence);
function hoverSentence(e) {
  let target = e.target;
  if (target.classList.contains("s_one")) {
    box_boule[0].style.backgroundColor = "hsl(20, 100%, 50%)";
  } else if (target.classList.contains("s_two")) {
    box_boule[1].style.backgroundColor = "hsl(96, 100%, 50%)";
  } else if (target.classList.contains("s_three")) {
    box_boule[2].style.backgroundColor = "hsl(259, 100%, 50%)";
  } else if (target.classList.contains("s_four")) {
    box_boule[3].style.backgroundColor = "hsl(301, 100%, 50%)";
  } else if (target.classList.contains("s_five")) {
    box_boule[4].style.backgroundColor = "hsl(348, 100%, 50%)";
  } else if (target.classList.contains("s_six")) {
    box_boule[5].style.backgroundColor = "hsl(61, 100%, 50%)";
  } else if (target.classList.contains("s_seven")) {
    box_boule[6].style.backgroundColor = "hsl(167, 100%, 50%)";
  }
}
box_sentence.addEventListener("mouseout", hoverSentenceOut);
function hoverSentenceOut(e) {
  let target = e.target;
  if (target.classList.contains("s_one")) {
    console.log(box_date);
    box_boule[0].style.backgroundColor = "";
  } else if (target.classList.contains("s_two")) {
    box_boule[1].style.backgroundColor = "";
  } else if (target.classList.contains("s_three")) {
    box_boule[2].style.backgroundColor = "";
  } else if (target.classList.contains("s_four")) {
    box_boule[3].style.backgroundColor = "";
  } else if (target.classList.contains("s_five")) {
    box_boule[4].style.backgroundColor = "";
  } else if (target.classList.contains("s_six")) {
    box_boule[5].style.backgroundColor = "";
  } else if (target.classList.contains("s_seven")) {
    box_boule[6].style.backgroundColor = "";
  }
}
