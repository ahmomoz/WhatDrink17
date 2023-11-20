const newsArea = document.querySelector(".news-content")
console.log(newsArea);

const newsId = window.location.href.split("?id=").pop()
console.log(newsId);

axios.get(`https://json-server-project-wtkt.onrender.com/latestNews?id=${newsId}`)
.then(response => {
    let data = response.data;
    newsInfoRender(data);
    console.log(data[0].id);
});

function newsInfoRender(data){
    let text = "";
        text += `<h1 class="text-left">${data[0].title}</h1>
        <p class="text-left mb-20 text-gray">發布時間：${data[0].releaseTime}</p>
        <div class="row">
          <div class="col-12 mx-auto text-center">
            <img src="${data[0].photo1}" class="img-fluid rounded-16" alt="滿版圖片1">
          </div>
        </div>
  
        <div class="row">
          <div class="col-12">
            <p class="mb-24 mt-24">${data[0].Description}</p>
          </div>
        </div>
  
        <div class="row">
          <div class="col-12">
            <hr class="mt-30 mb-30"> 
          </div>
        </div>`
    console.log(text);
    newsArea.innerHTML = text;
    }


//取得列表功能本體function
// function newsListRender(data){
//     let text = "";
//     for(let i=0; i<data.length; i++){
//         // 截取 Description，限制顯示的文字數
//         const limitedDescription = data[i].Description.substring(0, 100);
//         text += `<div class="col-12 news-card mb-0" id="newsCard">
//         <div class="card border-0">
//             <div class="row">
//                 <div class="col-12 col-lg-6 px-12">
//                     <img src="${data[i].photo1}" class="card-img" alt="縮圖${i}">
//                 </div>
//                 <div class="col-12 col-lg-6">
//                     <div class="card-body">
//                         <h2 class="card-title mb-0">${data[i].title}</h2>
//                         <p class="card-text release-time mb-8 mt-8">發佈日期: ${data[i].releaseTime}</p>
//                         <p class="card-text">
//                         ${limitedDescription}...</p>
//                         <div class="card-footer d-flex justify-content-end align-items-end">
//                             <p class="mb-0 text-right align-items-end"><a href="news-info.html">繼續閱讀 ></a></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <hr class="mb-40 mt-20 mt-lg-40">`
//     }
//     console.log(text);
//     newsArea.innerHTML = text;
//     }

//使用axios去get新消息資料後執行newsListRender

