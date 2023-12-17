// document
//   .getElementById("forgotPasswordForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const email = document.getElementById("forgetPasswordEmail").value;

//     // 使用 Axios 發送 POST 請求
//     axios({
//       method: "post",
//       url: "https://passcheck-ktd6.onrender.com/forgot-password",
//       data: {
//         email: email,
//       },
//     })
//       .then(function (response) {
//         alert(
//           "If an account with that email exists, we have sent a password reset link."
//         );

//         // 請求成功後導航到首頁
//         window.location.href = "index.html";
//       })
//       .catch(function (error) {
//         console.error("Error:", error);
//       });
//   });

document
  .getElementById("forgotPasswordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("forgetPasswordEmail").value;

    // 使用 Axios 發送 POST 請求
    axios({
      method: "post",
      url: "https://passcheck-ktd6.onrender.com/forgot-password",
      data: {
        email: email,
      },
    })
      .then(function (response) {
        Swal.fire({
          title: "請求已發送",
          text: "我們已發送了一個重設密碼的鏈接到您的信箱。",
          icon: "success",
          confirmButtonText: "確定",
        }).then(function () {
          // 當用戶點擊確認後執行
          window.location.href = "index.html";
        });
      })
      .catch(function (error) {
        Swal.fire({
          title: "錯誤",
          text: "發送請求時發生錯誤，請確認是否填寫錯誤。",
          icon: "error",
          confirmButtonText: "確定",
        }).then(function () {
          // 這裡也可以放置當用戶點擊確認後執行的代碼
          // 例如，你可能想在這裡保持在當前頁面
        });
        console.error("Error:", error);
      });
  });
