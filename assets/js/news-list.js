const newsArea = document.querySelector(".newsArea")

//取得列表功能本體function
function newsListRender(data){
    let text = "";
    for(let i=0; i<data.length; i++){
        // 截取 Description，限制顯示的文字數
        const limitedDescription = data[i].Description.substring(0, 100);
        text += `<div class="col-12 news-card mb-0" id="newsCard">
        <div class="card border-0">
            <div class="row">
                <div class="col-12 col-lg-6 px-12">
                    <img src="${data[i].photo1}" class="card-img" alt="縮圖${i}">
                </div>
                <div class="col-12 col-lg-6">
                    <div class="card-body">
                        <h2 class="card-title mb-0">${data[i].title}</h2>
                        <p class="card-text release-time mb-8 mt-8">發佈日期: ${data[i].releaseTime}</p>
                        <p class="card-text">
                        ${limitedDescription}...</p>
                        <div class="card-footer d-flex justify-content-end align-items-end">
                            <p class="mb-0 text-right align-items-end"><a href="news-info.html?id=${data[i].id}">繼續閱讀 ></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="mb-40 mt-20 mt-lg-40">`
    }
    console.log(text);
    newsArea.innerHTML = text;
};

//分頁邏輯------------------------------------------------------
const renderPagination = (pageData) =>{

    const totalItems = pageData.length; //卡片數量
    const itemsPerPage = 5;  //每頁顯示卡片數量
    const totalPages = Math.ceil(totalItems / itemsPerPage); //計算總頁數
    let currentPage = 1;  //當前頁數，預設為第一頁
    
    function displayData(page) {   //計算目前頁面顯示的卡片數量範圍
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      // 獲取目前頁面的數據
      const currentPageData = pageData.slice(startIndex, endIndex);
    
      // 渲染當前頁面的數據
      renderCards(currentPageData);
    
      // 渲染分頁按鈕
      renderPaginationButtons();
    };
    
    function renderCards(data) {
        newsArea.innerHTML = ""; // 清空容器
        let text = "";
        for(let i=0; i<data.length; i++){
            // 截取 Description，限制顯示的文字數
            const limitedDescription = data[i].Description.substring(0, 100);
            text += `<div class="col-12 news-card mb-0" id="newsCard">
            <div class="card border-0">
                <div class="row">
                    <div class="col-12 col-lg-6 px-12">
                        <img src="${data[i].photo1}" class="card-img" alt="縮圖${i}">
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="card-body">
                            <h2 class="card-title mb-0">${data[i].title}</h2>
                            <p class="card-text release-time mb-8 mt-8">發佈日期: ${data[i].releaseTime}</p>
                            <p class="card-text">
                            ${limitedDescription}...</p>
                            <div class="card-footer d-flex justify-content-end align-items-end">
                                <p class="mb-0 text-right align-items-end"><a href="news-info.html?id=${data[i].id}">繼續閱讀 ></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="mb-40 mt-20 mt-lg-40">`
        };
        newsArea.innerHTML = text;
    };
    
    //渲染分頁按鈕的邏輯，根據前頁和總頁數產生分頁按鈕
    function renderPaginationButtons() {
      const buttonsContainer = document.getElementById("pagination");
      buttonsContainer.innerHTML = ""; // 清空按鈕容器
    
      // 生成頁碼按鈕
      let str='';
      for (let i = 1; i <= totalPages; i++) {
        const isActive = i === currentPage ? 'active' : ''; // 檢查是否為當前頁面，是的話加上active樣式
        str += `
          <li class="page-item mx-4 ${isActive}">   
            <a class="page-link" href="#" data-page="${i}">${i}</a>
          </li>
        `;
      };
      const preIsGray = currentPage === 1 ? 'text-gray' : ''; //檢查當前頁面是否為1，是的話加上灰色樣式
      const nextIsGray = currentPage === totalPages ? 'text-gray' : ''; //檢查當前頁面是否為最後一頁，是的話加上灰色樣式
    
      const firstPageDisabled = currentPage === 1 ? 'disabled' : ''; // 如果當前頁面為第一頁，添加disabled屬性
      const previousPageDisabled = currentPage === 1 ? 'disabled' : ''; // 如果當前頁面為第一頁，添加disabled屬性
      const nextPageDisabled = currentPage === totalPages ? 'disabled' : ''; // 如果當前頁面為最後一頁，添加disabled屬性
      const lastPageDisabled = currentPage === totalPages ? 'disabled' : ''; // 如果當前頁面為最後一頁，添加disabled屬性
    
      buttonsContainer.innerHTML =`
        <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${firstPageDisabled}">
          <a class="page-link ${preIsGray}" href="#" aria-label="Previous">
            <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
          </a>
        </li>
    
        <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${previousPageDisabled}">
          <a class="page-link ${preIsGray}" href="#" aria-label="Previous">
            <span class="material-symbols-outlined align-middle">chevron_left</span>
          </a>
        </li>
    
        ${str}
    
        <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${nextPageDisabled}">
          <a class="page-link ${nextIsGray}" href="#" aria-label="Next">
            <span class="material-symbols-outlined align-middle">chevron_right</span>
          </a>
        </li>
    
        <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${lastPageDisabled}">
          <a class="page-link ${nextIsGray}" href="#" aria-label="Next">
            <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
          </a>
        </li>`;
    
        // 設定切頁按鈕事件監聽
        const pageLinks = document.querySelectorAll(".page-link");
        pageLinks.forEach(link => {
          link.addEventListener("click", (e) => {
            e.preventDefault(); //取消a連結效果
            const pageNumber = parseInt(link.dataset.page);
            onPageButtonClick(pageNumber);
          });
        })
    
        const page=[currentPage]; //存放目前頁面數字
    
        // 前一頁按鈕事件監聽器
        const previousPageBtn = document.getElementById("previousPageBtn");
        previousPageBtn.addEventListener("click", (e) => {
          e.preventDefault();
          if (page[0]> 1) {
            onPageButtonClick(page[0] - 1);
          }
        });
    
        // 後一頁按鈕事件監聽器
        const nextPageBtn = document.getElementById("next-page-btn");
        nextPageBtn.addEventListener("click", (e) => {
          e.preventDefault();
          if (page[0]!==totalPages) {
            onPageButtonClick(page[0] + 1);
          }
        });
    
        // 最前頁按鈕事件監聽器
        const firstPageBtn = document.getElementById("first-page-btn");
        firstPageBtn.addEventListener("click", (e) => {
          e.preventDefault();
          if (page[0]> 1) {
          onPageButtonClick(1);
          };
        });
    
        // 最後頁按鈕事件監聽器
        const lastPageBtn = document.getElementById("last-page-btn");
        lastPageBtn.addEventListener("click", (e) => {
          e.preventDefault();
          if (page[0]!==totalPages) {
          onPageButtonClick(totalPages);
          };
        });
    };
    
    
    function onPageButtonClick(page) {
      // 頁面按鈕點擊事件
      currentPage = page;
      displayData(currentPage);
      window.scrollTo(0,400);   //讓頁面跑到最上方的語法
    };
    // 初始化頁面顯示
    displayData(currentPage);
};
    
    

//使用axios去get新消息資料後執行newsListRender
axios.get('https://json-server-project-wtkt.onrender.com/latestNews')
.then(response => {
    let data = response.data;
    newsListRender(data);
    renderPagination(data);
});

