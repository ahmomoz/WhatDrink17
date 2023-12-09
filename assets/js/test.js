const collectBtn = document.querySelectorAll(".collect-btn"); //抓按鈕class
// console.log(collectBtn); //驗證
function isCollect() {
  //跑 querySelectorAll 陣列
  collectBtn.forEach(function (item) {
    //監聽按鈕
    item.addEventListener("click", function (e) {
      //還沒收藏時，value 預設傳送 collected，點擊後改傳uncollect，並移除外框樣式class、新增填滿樣式class
      if (e.target.value == "collected") {
        item.value = "uncollect";
        item.classList.remove("fa-regular");
        item.classList.add("fa-solid");
        //已經收藏時，value 已改成傳送 uncollect，點擊後變為 collected，並移除填滿樣式class，新增外框樣式class
      } else if (e.target.value == "uncollect") {
        item.value = "collected";
        item.classList.add("fa-regular");
        item.classList.remove("fa-solid");
      }
      console.log("hi"); //驗證
    });
  });
}
isCollect();
