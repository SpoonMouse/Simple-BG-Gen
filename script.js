
// Query Selector for the "Click Me Button"
const button = document.querySelector("button");

// Function for random color
const getBg = () => {
    const randomColor = 
     Math.floor(Math.random()*26777215).toString(16);
     document.body.style.backgroundColor
      = "#" + randomColor;
     color.innerHTML = "#" + randomColor;
}

// Listener for "Click Me" Button
button.addEventListener("click", getBg);
getBg();