import { API_BASE_DB_URL } from "./config";


// 送出按鈕
const submitButton = document.querySelector(".submitButton");

// 送出按鈕的eventListener
submitButton.addEventListener("click", function () {
  axios
    .post(`${API_BASE_DB_URL}/feedbacks`, {
      memberId: 1,
      category: document.querySelector(".form-select").value,
      content: document.querySelector(".form-control-textArea").value,
    })
    .then((response) => {
      Swal.fire("成功送出，謝謝您的意見");
      document.querySelector(".form-control-textArea").value='';
    })
    .catch((error) => {
      Swal.fire("送出失敗，請聯絡管理員");
    });
  sendLineNotify();
});

function sendLineNotify() {
  // Local test
  // http://localhost:3001/submit-feedback
  const category = document.querySelector("#categorySelect").value;
  const content = document.querySelector("#reportTextarea").value;
  axios
    .post(
      "https://linenotify-3voa.onrender.com/submit-feedback",
      new URLSearchParams({
        category: category,
        content: content,
      })
    )
    .then(function (response) {
      //console.log("Feedback submitted successfully");
      // 可以在這裡添加更多的用戶反饋處理代碼
    })
    .catch(function (error) {
      console.error("Error submitting feedback", error);
      // 可以在這裡添加錯誤處理代碼
    });
}
