// document.getElementById("signUpForm").addEventListener("submit", loginUser);

// async function loginUser(event) {
//   event.preventDefault();

//   const nickname = document.getElementById("signUpName").value;
//   const email = document.getElementById("signUpEmail").value;
//   const password = document.getElementById("signUpPassword").value;
//   const confirmPassword = document.getElementById("signUpPassword2").value;

//   if (password !== confirmPassword) {
//     alert("密碼和確認密碼不匹配！");
//     return;
//   }

//   // http://localhost:3000/register
//   // https://drinkpicker-nclv.onrender.com/register
//   try {
//     const res = await axios.post(
//       "https://drinkpicker-nclv.onrender.com/register",
//       {
//         nickname,
//         email,
//         password,
//       }
//     );
//     redirectToHome();
//     console.log("註冊成功", res.data);
//     // 註冊成功後的操作，例如跳轉到登入頁面
//   } catch (error) {
//     console.error("註冊失敗", error);
//     alert(error.response.data);
//     // 處理錯誤，例如顯示錯誤訊息
//   }
// }

// function redirectToHome() {
//   window.location.href = "index.html";
// }

document
  .getElementById("signUpForm")
  .addEventListener("submit", handleSignUpSubmit);

async function handleSignUpSubmit(event) {
  event.preventDefault();

  const nickname = document.getElementById("signUpName").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;
  const confirmPassword = document.getElementById("signUpPassword2").value;

  if (!isFormValid(nickname, email, password, confirmPassword)) {
    return; // 表單驗證未通過
  }

  try {
    const res = await axios.post(
      "https://drinkpicker-nclv.onrender.com/register",
      {
        nickname,
        email,
        password,
      }
    );
    //console.log("註冊成功", res.data);
    Swal.fire("註冊成功！", "", "success").then(() => redirectToHome()); // 使用 SweetAlert2 顯示成功信息
  } catch (error) {
    console.error("註冊失敗", error);
    Swal.fire("註冊失敗", error.response.data, "error"); // 使用 SweetAlert2 顯示錯誤信息
  }
}

function isFormValid(nickname, email, password, confirmPassword) {
  // 郵件地址格式驗證
  if (!validator.isEmail(email)) {
    Swal.fire("錯誤", "無效的郵件地址", "error");
    return false;
  }

  // 密碼與確認密碼一致性檢查
  if (password !== confirmPassword) {
    Swal.fire("錯誤", "密碼和確認密碼不匹配！", "error");
    return false;
  }

  // 密碼安全性驗證
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    Swal.fire(
      "錯誤",
      "密碼安全性不足。請確保密碼至少包含 8 個字符，並且包括大寫字母、小寫字母、數字及特殊符號。",
      "error"
    );
    return false;
  }

  return true;
}

function redirectToHome() {
  window.location.href = "index.html";
}
