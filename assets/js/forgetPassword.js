document
  .getElementById("forgotPasswordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("forgetPasswordEmail").value;

    // 使用 Axios 發送 POST 請求
    axios({
      method: "post",
      url: "http://127.0.0.1:3002/forgot-password",
      data: {
        email: email,
      },
    })
      .then(function (response) {
        alert(
          "If an account with that email exists, we have sent a password reset link."
        );

        // 請求成功後導航到首頁
        window.location.href = "/WhatDrink17/pages/index.html";
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  });
