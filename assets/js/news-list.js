//測試
axios.get('https://json-server-project-wtkt.onrender.com/latestNews')
.then(response => {
    console.log(response.data)
});

//取得列表功能，未完成測試中
function getNewsList(){
let txt = "";
axios.get('https://json-server-project-wtkt.onrender.com/latestNews')
.then(response => {
    for(let i=0; i<response.data; i++){
        txt += `<div class="col-12 news-card mb-0" id="newsCard">
        <div class="card border-0">
            <div class="row">
                <div class="col-12 col-lg-6 px-12">
                    <img src="../assets/images/news-01.png" class="card-img" alt="縮圖1">
                </div>
                <div class="col-12 col-lg-6">
                    <div class="card-body">
                        <h2 class="card-title mb-0">甘潤芬芳的茉綠茶香+ㄋㄟㄋㄟ，無敵完美比例</h2>
                        <p class="card-text release-time mb-8 mt-8">發佈日期: 2023/6/24</p>
                        <p class="card-text">
                            手搖飲是現代台灣人生活中不可或缺的一部分，龐大的市場紅遍全球，造就堪稱「台灣之光」的手搖飲文化。近期炙手可熱的手搖品牌「五桐號」將首度躍上高空，
                            聯手中華航空以「茶」為主題，合作推出一系列「機上餐飲」，自七月一日起依據不同艙等及長、短程航線規劃出馬卡龍、達克瓦茲、瑪德蓮、冰淇淋、莎布蕾、蜜桃紅茶氣
                            泡飲、桂花烏龍等多種甜點與機上飲品，讓經濟艙、豪華經濟艙及商務艙的所有旅客， 都有機會在飛機上品嚐最能代表台灣文化的「茶」味甜點。此外，五桐號最具代表性的
                            聯名首推韓...</p>
                        <div class="card-footer d-flex justify-content-end align-items-end">
                            <p class="mb-0 text-right align-items-end"><a href="#">繼續閱讀 ></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="mb-40 mt-20 mt-lg-40">`
    }
    console.log(response.data)
});
}