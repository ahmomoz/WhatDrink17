import"./main-751fc6a2.js";const l=document.querySelector("#storeList");let r=[],o=[];const i=()=>{r.forEach(function(s){const t={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let a="";for(const e in t)s[e]&&(a+=`<li class="stores-tag">${t[e]}</li>`);o.push(a),a=""})},c=()=>{let s="";r.forEach(function(t){s+=`
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
                ${o[t.id-1]}
              </ul>
              <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),l.innerHTML=s},n=()=>{c()};axios.get("https://json-server-project-wtkt.onrender.com/shops").then(s=>{r=s.data,i(),n()}).catch(s=>{console.error("Error fetching data:",s)});
