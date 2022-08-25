let username = "per"
 
 let message = "you have tree new notifications"
 
   let messageToUser = message + ", " + username + "!"
   console.log(messageToUser)

  // Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
 
//let name = "Manuel"
//let greeting = "Hi, my name is "
//let myGreeting = greeting + name 
//console.log(myGreeting)

//adding numbers to strings

//let points = 4
//let bonusPoints = "10"
 //let totalPoints = (points + bonusPoints)
 //console.log( totalPoints)


//let welcomeEl = document.getElementById("welcome-el")
 //let name = "Manuel"
 //let greeting = "welcome back"
 //welcomeEl.innerText = greeting + name

 let saveEl = document.getElementById("save-el")
 
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
  } 




 

 
 



 
