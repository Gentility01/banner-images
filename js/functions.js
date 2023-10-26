function userDetails(){
    let username = prompt("enter your first name")
    let age = prompt("enter your age") 
    if (age < 12){
        console.log("age not allowed")
    }else{
        console.log("successful")
    }

    console.log(`dear ${username} your age is ${age}`)
}



let user = parseInt(prompt("Are you a registered member if no press  1 else press 2"))
if (user == 1) {
    alert("register here")
    userDetails()
}else if(user == 2){
    console.log("login")
    userDetails()
}
  