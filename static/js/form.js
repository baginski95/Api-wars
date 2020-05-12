let username = document.getElementById('user-name');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
let subButton = document.getElementById('submit');

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

async function fetch_users() {
  let response = await fetch('/get-users');
  let usersData = await response.json();
  return usersData
}


function checkPasswordMatch(pass1, pass2){
    if (pass1.value !== pass2.value){
        return false
    } else {
        return true
    }
}

username.addEventListener('change', async (e) => {
      let userNameToCheck = e.target.value;
      let fetchedUsers = await fetch_users();
      let blockingVariable = 1;
      for (let userInDb of fetchedUsers) {
        if (userInDb.username == userNameToCheck) {
          document.getElementById('checkUser').textContent = 'User name already exists';
          document.getElementById('checkUser').classList.toggle('invisible');
          subButton.classList.add("hidden");
          /*form.classList.add('was-validated');*/
          form.addEventListener('submit', function(event) {
          event.stopPropagation();

          // return false
      }
        , false);
          break;
        }
        else{
          document.getElementById('checkUser').textContent = '';
          document.getElementById('checkUser').classList.toggle('invisible');
          subButton.classList.remove("hidden");

        }

      }
    }
);

password2.addEventListener("input", e=>{
    console.log('listener wszedl');
    let passwordCheckResult = checkPasswordMatch(password1, password2)
    if (!passwordCheckResult){
        console.log('if wszedl');
        document.getElementById('checkPasswordMatch').textContent = "Password dont match";
        document.getElementById('checkPasswordMatch').classList.remove('invisible');
        subButton.classList.add("hidden");
    }else {
        console.log('else wszedl');
        document.getElementById('checkPasswordMatch').textContent = "";
        subButton.classList.remove("hidden");
        document.getElementById('checkPasswordMatch').classList.add('invisible');
    }
});
