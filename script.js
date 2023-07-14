const heading = document.getElementById("h1");

setInterval(() => {
  if (heading.style.color == "blue") {
    heading.style.color = "red";
  } else {
    heading.style.color = "blue";
  }
}, 1000);
