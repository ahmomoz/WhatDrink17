const searchButton = document.querySelector("#searchButton"); //搜尋按鈕
const searchInput = document.querySelector("#searchInput");  //搜尋文字輸入框
const tagSearch = document.querySelectorAll("#tagSearch");

//搜尋導向其他頁面監聽-----------------------------------------------------------
searchButton.addEventListener('click',function(){  //點擊搜尋按鈕觸發
    search();
});
searchInput.addEventListener('keydown', e =>{   //ENTER按下觸發
    if (e.keyCode === 13) {
        search();
    };
});
tagSearch.forEach(item=>{
        item.addEventListener('click',function(){  //點擊搜尋按鈕觸發
        let tagValue = item.getAttribute('value');
        specificSearch(tagValue);
    });
});

//搜尋導向其他頁面函式-----------------------------------------------------------
function search(){             //以輸入框中的文字為搜尋導向
    let searchTerm = searchInput.value; //獲得搜尋bar的值
    // 使用 LocalStorage 保存搜索參數
    localStorage.setItem('searchTerm', searchTerm);
    // 將瀏覽器位置重定向到另一個搜尋頁面
    window.location.href = 'searchResult.html';
    searchInput.value='';
};
function specificSearch(value){    //以tag中的文字為搜尋導向
    let searchTerm = value; //獲得搜尋bar的值
    // 使用 LocalStorage 保存搜索參數
    localStorage.setItem('searchTerm', searchTerm);
    // 將瀏覽器位置重定向到另一個搜尋頁面
    window.location.href = 'searchResult.html';
    searchInput.value='';
};