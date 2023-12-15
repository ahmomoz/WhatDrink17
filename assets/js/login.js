// const urlParams = new URLSearchParams(window.location.search);
// const JWT_token = urlParams.get("token");
// console.log(JWT_token);

// async function validateUser(token) {
//   try {
//     const res = await axios.get("https://authbridge.onrender.com/user", {
//       headers: {
//         Authorization: token,
//       },
//     });

//     if (res && res.data.email) {
//       console.log("用戶身份驗證成功:", res.data.email);
//       loginUser(res.data.email, token);
//     } else {
//       console.log("用戶身份驗證失敗");
//     }
//   } catch (err) {
//     console.error("身份驗證過程中發生錯誤:", err);
//   }
// }

// if (JWT_token) {
//   console.log("找到 token:", JWT_token);
//   validateUser(JWT_token);
// } else {
//   console.log("未找到指定的 token");
// }

// const token = sessionStorage.getItem("jwtToken");
// function isAuthenticated() {
//   if (token) {
//     console.log("有權限: 找到 Token");
//     return true;
//   }
//   console.log("無權限: 未找到 Token");
//   return false;
// }
// isAuthenticated();

// document
//   .getElementById("loginForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // 阻止表單的預設提交行為

//     const email = document.getElementById("logInEmail").value;
//     const password = document.getElementById("logInPassword").value;

//     loginUser(email, password); // 使用從表單獲取的帳號和密碼調用 loginUser
//   });

// async function loginUser(email, password) {
//   try {
//     const res = await axios.post(
//       "https://drinkpicker-nclv.onrender.com/login",
//       { email, password }
//     );

//     if (res.status === 200 && res.data.accessToken) {
//       console.log("登入成功", res.data);
//       handleSessionStorage(res.data); // 處理 sessionStorage 的操作

//       redirectToHome(); // 登入成功後的操作，例如跳轉到另一個頁面
//     } else {
//       handleLoginError(); // 登入失敗的處理
//     }
//   } catch (error) {
//     console.error("登入錯誤", error);
//     handleLoginError(); // 登入失敗的處理
//   }
// }

// function handleSessionStorage(data) {
//   sessionStorage.setItem("jwtToken", data.accessToken);
//   sessionStorage.setItem("user_email", data.user.email);
//   sessionStorage.setItem("user_id", data.user.id);
//   sessionStorage.setItem("user_nickname", data.user.nickname);
//   sessionStorage.setItem("user_picture", data.user.picture);
// }

// function handleLoginError() {
//   alert("登入失敗，請檢查帳號或密碼"); // 登入失敗後的操作
// }

// function redirectToHome() {
//   window.location.href = "index.html";
// }

// 環境變量
const AUTH_API = "https://authbridge.onrender.com/user";
const LOGIN_API = "https://drinkpicker-nclv.onrender.com/login";
const HOME_URL = "index.html";

// 獲取 JWT 令牌
const JWT_token = new URLSearchParams(window.location.search).get("token");

// 驗證用戶
async function validateUser(token) {
  try {
    const res = await sendRequest(AUTH_API, "GET", token);
    if (res && res.data.email) {
      //console.log("用戶身份驗證成功:", res.data.email);
      loginUser(res.data.email, token);
    } else {
      //console.log("用戶身份驗證失敗");
    }
  } catch (err) {
    console.error("身份驗證過程中發生錯誤:", err);
  }
}

// 登入用戶
async function loginUser(email, password) {
  // 測試函數
  const isValid = true;
  // const { isValid, errors } = validateForm(email, password);
  // console.log(isValid); // 這將會顯示 true 或 false
  // console.log(errors); // 這將會顯示一個包含所有錯誤訊息的陣列

  if (!isValid) return;

  try {
    const res = await sendRequest(LOGIN_API, "POST", null, { email, password });
    if (res.status === 200 && res.data.accessToken) {
      //console.log("登入成功", res.data);
      handleSessionStorage(res.data);
      redirectToHome();
    } else {
      handleLoginError();
    }
  } catch (error) {
    //console.error("登入錯誤", error);
    handleLoginError();
  }
}

function validateForm(email, password) {
  let errors = [];

  // 郵件地址驗證
  if (!validator.isEmail(email)) {
    errors.push("無效的郵件地址");
  }

  // 密碼長度至少為 8，並且需要包含至少一個數字、一個大寫字母、一個小寫字母和一個特殊字符
  if (
    !validator.isLength(password, { min: 8 }) ||
    !/\d/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[!@#$%^&*(),.?":{}|<>]/.test(password)
  ) {
    errors.push(
      "密碼長度至少為 8，並且需要包含至少一個數字、一個大寫字母、一個小寫字母和一個特殊字符"
    );
  }

  if (errors.length > 0) {
    Swal.fire({
      title: "驗證錯誤",
      icon: "error",
      html: errors.join("<br>"),
    });
  } else {
    Swal.fire({
      title: "成功",
      icon: "success",
      text: "表單驗證成功！",
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// 處理 Session Storage
function handleSessionStorage(data) {
  sessionStorage.setItem("jwtToken", data.accessToken);
  sessionStorage.setItem("user_email", data.user.email);
  sessionStorage.setItem("user_id", data.user.id);
  sessionStorage.setItem("user_nickname", data.user.nickname);
  sessionStorage.setItem("user_picture", data.user.picture);
}

// 登入錯誤處理
function handleLoginError() {
  Swal.fire("登入失敗，請檢查帳號或密碼");
}

// 重定向到首頁
function redirectToHome() {
  window.location.href = HOME_URL;
}

// AJAX 請求函數
async function sendRequest(url, method, token = "", data = {}) {
  const config = {
    method: method,
    url: url,
    headers: { Authorization: token },
    data: data,
  };
  return await axios(config);
}

// 檢查是否已登入
function isAuthenticated() {
  const token = sessionStorage.getItem("jwtToken");
  if (token) {
    //console.log("找到 Session Token");
    return true;
  }
  //console.log("未找到 Session Token");
  return false;
}

// 事件監聽器
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("logInEmail").value;
    const password = document.getElementById("logInPassword").value;
    loginUser(email, password);
  });

if (JWT_token) {
  //console.log("找到 JWT_token", JWT_token);
  validateUser(JWT_token);
} else {
  //console.log("未找到 JWT_token");
}

isAuthenticated();
