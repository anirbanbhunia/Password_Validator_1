const ip = document.getElementById("pass1");
const ip2 = document.getElementById("pass2");
const butt = document.getElementById("but1");
let para = document.getElementById("pra");
function getVal() {
  if (ip.value.length < 4) {
    para.innerText = "Enter minimum 4 size password";
  } else if (ip.value == "" && ip2.value == "") {
    para.textContent = `Please enter  currect`;
  } else if (ip.value == ip2.value) {
    para.textContent = "";
    localStorage["password"] = ip.value
    location.href = `./login.html`;
  } else {
    para.innerText = "Please enter  currect";
  }
}
butt.addEventListener("click", getVal);