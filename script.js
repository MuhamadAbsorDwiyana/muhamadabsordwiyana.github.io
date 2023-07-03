document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simulate fetching the JSON data from a server
  fetch("https://my-json-server.typicode.com/muhamadabsordwiyana/muhamadabsordwiyana.github.io/db")
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          var users = data.userAbsor;
          var authenticated = false;

          for (var i = 0; i < users.length; i++) {
              if (users[i].username === username && users[i].password === password) {
                  authenticated = true;
                  break;
              }
          }

          if (authenticated) {
              document.getElementById("message").innerHTML = "Login successful!";
              alert("Anda Berhasil");
          } else {
              document.getElementById("message").innerHTML = "Invalid username or password.";
              alert("Anda gagal");
          }
      })
      .catch(function(error) {
          console.log(error);
      });
});
