


// let sign = document.getElementById("form")
// console.log(sign);

// sign.addEventListener("submit",(e)=>{
//     e.preventDefault()

//     let user = document.getElementById("username").value
//     let mail = document.getElementById("mail").value
//     let phno = document.getElementById("number").value
//     let password = document.getElementById("pass").value
//     let age = document.getElementById("age").value
//     console.log(user,mail,phno,password,age)
//     let btn = document.getElementById("btn")
//    console.log(user);

// })




// script.js
function submitForm() {
    let user = document.getElementById("username").value
    let mail = document.getElementById("mail").value
    let phno = document.getElementById("number").value
    let password = document.getElementById("pass").value
    let age = document.getElementById("age").value
    console.log(user,mail,phno,password,age)
    let btn = document.getElementById("btn")
  
    const userData = {
      user: fullname,
      mail: email,
      password: password
    };
  
    fetch('/index.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      
    })

      .then(response => {

        if (response.ok) {
          console.log('User created successfully');
        } 
        else {
          console.error('Failed to create user');
        }
      })
      .catch(error => console.error('Error:', error));
  }
  submitForm()

  module.exports=submitForm()