console.log("test");

//以下測試
axios.post('https://json-server-project-wtkt.onrender.com/feedbacks',{
    id: 1,
    memberId: 1,
    category: "test",
    content: "test"
}).then(response => {
    console.log('成功：', response.data);
  })
  .catch(error => {
    console.log('錯誤：', error.response.data);
  });