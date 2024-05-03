const yourName = prompt("What is Your Name ?")

const chngName = document.getElementById("fullName")


if(yourName){
chngName.textContent = "," + " " + yourName
}

