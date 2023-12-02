// function getCookie(name) {
//   var nameEQ = name + "=";
//   var ca = document.cookie.split(";");
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == " ") c = c.substring(1);
//     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// }

const urlParams = new URLSearchParams(window.location.search);
const JWT_token = urlParams.get("token");
console.log(JWT_token);
if (JWT_token) {
  console.log("找到 token:", JWT_token);
  axios
    .get("https://authbridge.onrender.com/user", {
      headers: {
        Authorization: JWT_token,
      },
    })
    .then((res) => {
      if (res) {
        const email = res.data.email;
        loginUser(email, JWT_token);
        // console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
    });
} else {
  console.log("未找到指定的 token");
}

const token = sessionStorage.getItem("jwtToken");

// 確認是否登入
function isAuthenticated() {
  if (token) {
    console.log("有權限: 找到 Token");
    // redirectToMember();
    return true;
  }
  return false;
}
isAuthenticated();

// document.getElementById("loginForm").addEventListener("submit", loginUser);

// async function loginUser(event) {
//   event.preventDefault(); // 阻止表單的預設提交行為

//   const email = document.getElementById("logInEmail").value;
//   const password = document.getElementById("logInPassword").value;
//   // // http://localhost:3000/login
//   try {
//     const res = await axios.post(
//       "https://drinkpicker-nclv.onrender.com/login",
//       { email, password }
//     );

//     console.log(res.data);
//     const accessToken = res.data.accessToken;
//     const user_email = res.data.user.email;
//     const user_id = res.data.user.id;
//     const user_nickname = res.data.user.nickname;
//     if (accessToken) {
//       console.log("登入成功", res.data);
//       sessionStorage.setItem("jwtToken", accessToken);
//       sessionStorage.setItem("user_email", user_email);
//       sessionStorage.setItem("user_id", user_id);
//       sessionStorage.setItem("user_nickname", user_nickname);
//       redirectToHome(); // 登入成功後的操作，例如跳轉到另一個頁面
//     } else {
//       alert("登入失敗，請檢查帳號或密碼"); // 登入失敗後的操作
//     }
//   } catch (error) {
//     console.error("登入錯誤", error);
//     alert("登入失敗，請檢查帳號或密碼"); // 登入失敗後的操作
//   }
// }

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // 阻止表單的預設提交行為

    const email = document.getElementById("logInEmail").value;
    const password = document.getElementById("logInPassword").value;

    loginUser(email, password); // 使用從表單獲取的帳號和密碼調用 loginUser
  });

async function loginUser(email, password) {
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
    const user_picture = res.data.user.picture;

    if (accessToken) {
      console.log("登入成功", res.data);
      sessionStorage.setItem("jwtToken", accessToken);
      sessionStorage.setItem("user_email", user_email);
      sessionStorage.setItem("user_id", user_id);
      sessionStorage.setItem("user_nickname", user_nickname);
      sessionStorage.setItem("user_picture", user_picture);

      redirectToHome(); // 登入成功後的操作，例如跳轉到另一個頁面
    } else {
      alert("登入失敗，請檢查帳號或密碼"); // 登入失敗後的操作
    }
  } catch (error) {
    console.error("登入錯誤", error);
    alert("登入失敗，請檢查帳號或密碼"); // 登入失敗後的操作
  }
}

function redirectToHome() {
  window.location.href = "index.html";
}
