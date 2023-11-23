// 送出按鈕
const submitButton = document.querySelector(".submitButton");

// 送出按鈕的eventListener
submitButton.addEventListener("click",function(){
    axios.post('https://json-server-project-wtkt.onrender.com/feedbacks',{
    memberId: 1,
    category: document.querySelector(".form-select").value,
    content: document.querySelector(".form-control-textArea").value
}).then(response => {
    alert("成功送出，謝謝您的意見");
    console.log('成功發送意見：', response.data);
  })
  .catch(error => {
    alert("送出失敗，請聯絡管理員")
    console.log('錯誤：', error.response.data);
  });
})