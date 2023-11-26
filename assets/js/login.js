const token = sessionStorage.getItem("jwtToken");

// 確認是否登入
function isAuthenticated() {
  if (token) {
    console.log("有權限: 找到 Token");
    redirectToMember();
    return true;
  }
  return false;
}
isAuthenticated();

document.getElementById("loginForm").addEventListener("submit", loginUser);

async function loginUser(event) {
  event.preventDefault(); // 阻止表單的預設提交行為

  const email = document.getElementById("logInEmail").value;
  const password = document.getElementById("logInPassword").value;
  // // http://localhost:3000/login
  try {
    const res = await axios.post(
      "https://drinkpicker-nclv.onrender.com/login",
      { email, password }
    );

    console.log(res.data);
    const accessToken = res.data.accessToken;
    const user_email = res.data.user.email;
    const user_id = res.data.user.id;
    const user_nickname = res.data.user.nickname;
    if (accessToken) {
      console.log("登入成功", res.data);
      sessionStorage.setItem("jwtToken", accessToken);
      sessionStorage.setItem("user_email", user_email);
      sessionStorage.setItem("user_id", user_id);
      sessionStorage.setItem("user_nickname", user_nickname);
      redirectToMember(); // 登入成功後的操作，例如跳轉到另一個頁面
    } else {
      alert("登入失敗，請檢查帳號或密碼"); // 登入失敗後的操作
    }
  } catch (error) {
    console.error("登入錯誤", error);
    alert("登入失敗，請檢查帳號或密碼"); // 登入失敗後的操作
  }
}

function redirectToMember() {
  window.location.href = "/WhatDrink17/pages/member.html";
}
