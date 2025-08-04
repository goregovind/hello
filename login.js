document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); 
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const message = document.getElementById("message");

  if (username !== "" && password !== "") {
    message.textContent = "✅ Login successfully!";
  } else {
    message.textContent = "❌ Please enter valid credentials.";
    message.style.color = "red";
  }
});
