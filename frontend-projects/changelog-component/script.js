const box_date = document.querySelector(".box_date");
const box_boule = document.querySelector(".box_boule").children;
const box_sentence = document.querySelector(".box_sentence").children;

// The Event
box_date.addEventListener("mouseover", hoverDate);
box_date.addEventListener("mouseleave", hoverDate);
function hoverDate(e) {
  if (e.type === "mouseover") {
    let target = e.target;
    if (target.classList.contains("d_one")) {
      console.log(box_date);
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
  } else if (e.type === "mouseleave") {
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
