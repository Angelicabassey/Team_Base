
function review(){
    var reviewSection = document.getElementById("reviewSection");

    reviewSection.style.display = (reviewSection.style.display === "block") ? "none" : "block";
  }

// REGISTRATION CODE

function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var requiredMessage = document.getElementById("requiredMessage");

    if (fname === '' || lname === '' || email === '' || password === '' || confirmPassword === '') {
        requiredMessage.innerText = "All fields are required!";
    } else {
        // Reset error message
        requiredMessage.innerText = "";

        // Redirect to the next page
        window.location.href = "./emailv.html";
    }
}
// login CODE
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var checkbox = document.getElementById("checkbox").value;
  var invalidMessage = document.getElementById("invalidMessage");

  if (username === '' || password === '' || checkbox === '') {
      invalidMessage.innerText = "All fields are required!";
  } else {
      // Reset error message
      invalidMessage.innerText = "";

      // Redirect to the next page
      window.location.href = "./home.html";
  }
}
// 
const textBtn = document.getElementById('textBtn');

function changeText() {
  const initialText = 'CONFIRM'; // Change this to your initial button text

  textBtn.innerHTML = `<span style="color: #fff">Button clicked</span>`;
}






// (() => {
//     const width = 320;    // We will scale the photo width to this
//     const height = 0;     // This will be computed based on the input stream

//     const streaming = false;

//     let video = null;
//     let canvas = null;
//     let photo = null;
//     let startbutton = null;
// })
// function startup() {
//     video = document.getElementById('video');
//     canvas = document.getElementById('canvas');
//     photo = document.getElementById('photo');
//     startbutton = document.getElementById('startbutton');
// }



