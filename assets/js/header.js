/**--------------------------------漢堡列表-----------------------------------**/
//變數命名-------------------------------------------------------------
const isLogin = document.querySelector("#isLogin"); //登入登出連結
const menuSearchInput = document.querySelector("#menuSearchInput"); //搜尋文字輸入框
const userId = sessionStorage.getItem("user_id");

//漢堡列表中的登入登出函數-------------------------------------------
const loginRender = () => {
    if (!userId) {   //確認是否為會員，不是的話顯示登入
        console.log("無權限: 沒有找到 Token");
        isLogin.textContent="登入";    //渲染登入字樣
    }else{                 //是會員，點擊即可登出
        isLogin.addEventListener('click', e => {
            e.preventDefault();
            sessionStorage.clear();  //清除登入
            window.location.href = 'index.html';  //跳回首頁
        })
    };
};
loginRender(); //執行漢堡登出登入函數


//漢堡搜尋欄-搜尋導向其他頁面監聽---------------------------------------------
menuSearchInput.addEventListener('keydown', e =>{   //ENTER按下觸發
    if (e.keyCode === 13) {
        e.preventDefault(); // 防止默認的表單提交行為
        search();
    };
});
//漢堡搜尋欄-搜尋導向其他頁面函式---------------------------------------------
function search(){             //以輸入框中的文字為搜尋導向
    let searchTerm = menuSearchInput.value; //獲得搜尋bar的值
    //console.log(menuSearchInput.value);
    // 使用 LocalStorage 保存搜索參數
    localStorage.setItem('searchTerm', searchTerm);
    // 將瀏覽器位置重定向到另一個搜尋頁面
    window.location.href = 'searchResult.html';
    menuSearchInput.value='';
};