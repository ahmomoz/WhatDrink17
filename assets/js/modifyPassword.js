// 獲取修改密碼表單
const modifyPasswordForm = document.querySelector("#modifyPasswordForm");

modifyPasswordForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  //console.log("確認綁訂成功");

  const newPassword = document.getElementById("resetPassword").value;
  const confirmPassword = document.getElementById("resetPasswordConfirm").value;

  if (newPassword !== confirmPassword) {
    alert("新密碼和確認密碼不匹配！");
    return;
  }

  // 從 Session Storage 獲取用戶信息和 Token
  const userEmail = sessionStorage.getItem("user_email");
  const userId = sessionStorage.getItem("user_id");
  const userToken = sessionStorage.getItem("jwtToken");

  //console.log(userEmail);
  //console.log(userToken);

  try {
    const response = await axios.patch(
      `https://drinkpicker-nclv.onrender.com/600/users/${userId}`,
      { password: newPassword },
      { headers: { Authorization: `Bearer ${userToken}` } }
    );
    //console.log("密碼修改成功", response.data);
    // 密碼修改成功後的操作
    redirectToHome();
  } catch (error) {
    //console.error("密碼修改失敗", error);
    Swal.fire("密碼修改失敗：" + error.response.data);
    // 處理錯誤
  }
});

function redirectToHome() {
  window.location.href = "index.html";
}
