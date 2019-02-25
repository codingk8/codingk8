let i = 0;
let txt = "Hello, I am Catherine (aka Codingk8)";
let speed = 300;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}