const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pacman-top-bar.png") {
    myImage.setAttribute("src", "images/red-ghost.gif");
  } else {
    myImage.setAttribute("src", "images/pacman-top-bar.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Pac-Man is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Pac-Man is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
