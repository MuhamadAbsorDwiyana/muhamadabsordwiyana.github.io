document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Buat objek data yang akan dikirim ke API
    var data = {
      username: username,
      password: password
    };
  
    // Kirim permintaan POST ke API JSON
    fetch("https://example.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error: " + response.status);
      }
    })
    .then(function(data) {
      // Tanggapan JSON dari API
      console.log(data);
      document.getElementById("message").textContent = "Login berhasil!";
    })
    .catch(function(error) {
      // Tanggapan jika terjadi kesalahan
      console.log(error);
      document.getElementById("message").textContent = "Login gagal!";
    });
  });
  