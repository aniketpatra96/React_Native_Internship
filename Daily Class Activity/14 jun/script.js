let isChange = true;
const change = () => {
  if (!isChange) {
    document.getElementById("text").innerHTML = "Hello! Aniket Patra";
    document.body.style.backgroundColor = "pink";
    isChange = !isChange;
  } else {
    document.getElementById("text").innerHTML = "Hello World";
    document.body.style.backgroundColor = "green";
    isChange = !isChange;
  }
};
// window.onload = change
