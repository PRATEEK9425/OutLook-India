//  importing navbar------------
// import navbar from "../EXPORT_HUB/navbar.js";
// console.log(navbar);
// document.getElementById("navsections").innerHTML=navbar()



  
 
import {navbar,date} from "../EXPORT_HUB/navbar.js";
// console.log(date)
// console.log(navbar);
// document.getElementById("navsections").innerHTML=navbar
// document.getElementById("date").innerHTML=date()
document.getElementById("navsections").innerHTML=navbar()


class user {
    constructor(e, p) {
      this.email = e
      this.password = p
    }
  }

  let userdata = JSON.parse(localStorage.getItem("userinfo")) || []
    //    console.log(userdata)

   document.getElementById("btnsignin").addEventListener("click",signin)
  
   
  function signin() {
  
      // console.log("hi");
    let form = document.querySelector("form")
    let email = form.email.value
    let password = form.password.value
    let data = new user(email, password)
    console.log(data)
    if (checksignup(data.email && data.password) === true) 
    {
      localStorage.setItem("signin", JSON.stringify(userdata))
      localStorage.setItem("signinvalue", true)
      alert("SUCCESS")
      window.location.href = "index-nav.html"
    }
    else if(checksignup(data.email && data.password) === "")
      {
      alert("PLEASE FILL DATA")
    }
     else
      {
      alert("WRONG CREDENTIAL")
    }
   
  }
  
  function checksignup(email, password) {
    let filters = userdata.filter((el) => {
      return el.email === email && el.password === password
    })
    if (filters.length > 0) {
      return false
    }
    else {
      return true
    }

  }