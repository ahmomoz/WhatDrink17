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
    }

//使用axios去get新消息資料後執行newsListRender
axios.get('https://json-server-project-wtkt.onrender.com/latestNews')
.then(response => {
    let data = response.data;
    newsListRender(data);
});

