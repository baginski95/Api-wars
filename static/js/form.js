let username = document.getElementById('user-name');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');

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


username.addEventListener('change', async (e) => {
      let userNameToCheck = e.target.value;
      let fetchedUsers = await fetch_users();
      for (let userInDb of fetchedUsers) {
        if (userInDb.username == userNameToCheck) {

        }
      }
    }
);
