document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
if (day === "thursday" || day === "tuesday"){
  alert ("classsss")
}else if(day === "monday"|| day === "wednesday"|| day === "wednesday"){
  alert("workday")
}else if (day === "saturday" || day === "sunday"){
  alert("weekend")
}else{
  alert("Not accepted")
}
}
