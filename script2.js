const pas3 = document.getElementById("log_in")
let para1 = document.getElementById("pra1")
const butt2 = document.getElementById("but2")
function cheack(){
	if(localStorage["password"]==pas3.value){
		console.log("Password Matched. Password validation Successful.")
		location.href = "./view.html"
	}else{
		console.log("Password didn't match. Password validation unsuccessful.")
		para1.innerText = "Enter valid password"
	}
}
butt2.addEventListener("click",cheack)