import"./main-751fc6a2.js";const r=document.querySelector("#storeList");let a=[];function e(){l()}axios.get("https://json-server-project-wtkt.onrender.com/shops").then(function(s){a=s.data,e()}).catch(s=>{console.error("Error fetching data:",s)});const l=()=>{let s="";a.forEach(function(t){s+=`
        <li id="storeListItem" class="stores-card px-16 py-24 mb-40 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
            <img src="${t.logo}">
            <div class="stores-card-body">
              <div class="d-flex justify-content-between">
                <h5 class="mb-8 mb-md-12">${t.name}</h5>
                <ul class="d-flex text-primary">
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-regular fa-star"></i></li>
                </ul>
              </div>
              <p class="stores-card-content mb-16">
                ${t.Description}</p>
              <ul class="stores-tag-group mb-16">
                <li class="stores-tag">uber eat</li>
                <li class="stores-tag">food panda</li>
                <li class="stores-tag">合作活動</li>
              </ul>
              <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),r.innerHTML=s};
