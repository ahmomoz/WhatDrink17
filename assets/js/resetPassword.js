// 從 URL 獲取 token
function getTokenFromUrl() {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === "token") {
      return pair[1];
    }
  }
  return false;
}

// 設置 token 值
// document.getElementById("token").value = getTokenFromUrl();

document
  .getElementById("resetPasswordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const resetPassword = document.getElementById("resetPassword").value;
    const resetPasswordConfirm = document.getElementById(
      "resetPasswordConfirm"
    ).value;
    // var token = document.getElementById("token").value;

    // 檢查兩次密碼是否一致
    if (resetPassword !== resetPasswordConfirm) {
      alert("Passwords do not match.");
      return;
    }

    // 使用 Axios 執行 AJAX 請求
    axios
      .post("https://passcheck-ktd6.onrender.com/reset-password", {
        password: resetPassword,
        token: getTokenFromUrl(),
      })
      .then(function (response) {
        alert("Your password has been reset successfully.");
        redirectToHome();
      })
      .catch(function (error) {
        console.error("Error:", error);
        redirectToHome();
      });
  });

function redirectToHome() {
  window.location.href = "index.html";
}
