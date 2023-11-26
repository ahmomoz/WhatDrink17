document.getElementById("signUpForm").addEventListener("submit", loginUser);

async function loginUser(event) {
  event.preventDefault();

  const nickname = document.getElementById("signUpName").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;
  const confirmPassword = document.getElementById("signUpPassword2").value;

  if (password !== confirmPassword) {
    alert("密碼和確認密碼不匹配！");
    return;
  }

  // http://localhost:3000/register
  // https://drinkpicker-nclv.onrender.com/register
  try {
    const res = await axios.post(
      "https://drinkpicker-nclv.onrender.com/register",
      {
        nickname,
        email,
        password,
      }
    );
    redirectToHome();
    console.log("註冊成功", res.data);
    // 註冊成功後的操作，例如跳轉到登入頁面
  } catch (error) {
    console.error("註冊失敗", error);
    alert(error.response.data);
    // 處理錯誤，例如顯示錯誤訊息
  }
}

function redirectToHome() {
  window.location.href = "index.html";
}
