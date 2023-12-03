import"./bootstrap.min-feac71ab.js";const g=document.querySelector("#storeList");let m=document.querySelector("#deliverySelect"),L=document.querySelector("#CooperationSelect"),P=[],p=[],v=[];const h=sessionStorage.getItem("user_id"),j=()=>{p.forEach(e=>{const t={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let s="";for(const a in t)e[a]&&(s+=`<li class="stores-tag">${t[a]}</li>`);v.push(s),s=""})},_=()=>{let e="";p.forEach(t=>{e+=`
        <li class="stores-card" data-shop-id="${t.id}">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${t.logo}" class="mb-8" alt="store image">
            <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
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
                ${v[t.id-1]}
              </ul>
              <a href="stores-info.html?id=${t.id}" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),g.innerHTML=e},M=()=>{_(),S(p)},y=()=>{const e=t=>document.querySelector(`.stores-card[data-shop-id="${t}"] .collect-btn`);P.forEach(t=>{const s=e(t.shopId);s&&(s.value="collected",s.classList.remove("fa-regular"),s.classList.add("fa-solid"))})};g.addEventListener("click",function(e){if(e.target.closest(".collect-btn")){if(!h)console.log("無權限: 沒有找到 Token"),q();else if(e.target.classList.contains("collect-btn")){const s=e.target,l=s.closest(".stores-card").dataset.shopId;console.log(l);const c="https://json-server-project-wtkt.onrender.com/userShopCollections",x=`${c}?userId=${h}&shopId=${l}`;axios.get(x).then(d=>{if(d.data.length>0){s.value="uncollect",s.classList.remove("fa-solid"),s.classList.add("fa-regular"),axios.delete(`${c}/${d.data[0].id}`).then(r=>{Swal.fire("已取消收藏")}).catch(r=>{console.error("Error deleting collection:",r)});return}else s.value="collected",s.classList.remove("fa-regular"),s.classList.add("fa-solid");axios.post(c,{userId:parseInt(h),shopId:parseInt(l)}).then(r=>{Swal.fire("收藏成功")}).catch(r=>{console.error("Error adding collection:",r)})}).catch(d=>{console.error("Error checking collection status:",d)})}}});function q(){alert("登入後即可使用收藏功能"),window.location.href="logIn.html"}m.addEventListener("change",$);L.addEventListener("change",$);function $(){let e=p;m.value!==""&&(m.value==="uber eat"?e=e.filter(t=>t.uber):m.value==="food panda"&&(e=e.filter(t=>t.foodpanda))),L.value!==""&&(e=e.filter(t=>t.hasEvent)),I(e),S(e),k(e),y()}function I(e){let t="";e.forEach(s=>{t+=`
      <li class="stores-card" data-shop-id="${s.id}">
      <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
        value="collected"></button>
      <img src="${s.logo}" class="mb-8" alt="store image">
      <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
        <div class="d-flex justify-content-between">
          <h5 class="mb-8 mb-md-12">${s.name}</h5>
          <ul class="d-flex text-primary">
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-regular fa-star"></i></li>
          </ul>
        </div>
        <p class="stores-card-content mb-16">
          ${s.Description}</p>
        <ul class="stores-tag-group mb-16">
          ${v[s.id-1]}
        </ul>
        <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
      </div>
    </li>
    `}),g.innerHTML=t}const k=e=>{const t=e.length,s=12,a=Math.ceil(t/s);let l=1;function c(r){const n=(r-1)*s,i=n+s,b=e.slice(n,i);x(b),d(),y()}function x(r){g.innerHTML="";let n="";r.forEach(i=>{n+=`
          <li class="stores-card" data-shop-id="${i.id}">
          <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
            value="collected"></button>
          <img src="${i.logo}" class="mb-8" alt="store image">
          <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
            <div class="d-flex justify-content-between">
              <h5 class="mb-8 mb-md-12">${i.name}</h5>
              <ul class="d-flex text-primary">
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
              </ul>
            </div>
            <p class="stores-card-content mb-16">
              ${i.Description}</p>
            <ul class="stores-tag-group mb-16">
              ${v[i.id-1]}
            </ul>
            <a href="stores-info.html?id=${i.id}" class="stores-card-btn">查看店家資訊</a>
          </div>
        </li>
          `}),g.innerHTML=n}function d(){const r=document.getElementById("pagination");r.innerHTML="";let n="";for(let o=1;o<=a;o++)n+=`
        <li class="page-item mx-4 ${o===l?"active":""}">   
          <a class="page-link" href="#" data-page="${o}">${o}</a>
        </li>
      `;const i=l===1?"text-gray":"",b=l===a?"text-gray":"",D=l===1?"disabled":"",B=l===1?"disabled":"",w=l===a?"disabled":"",C=l===a?"disabled":"";r.innerHTML=`
      <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${D}">
        <a class="page-link ${i}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
        </a>
      </li>
  
      <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${B}">
        <a class="page-link ${i}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>
  
      ${n}
  
      <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${w}">
        <a class="page-link ${b}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>
  
      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${C}">
        <a class="page-link ${b}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(o=>{o.addEventListener("click",E=>{E.preventDefault();const T=parseInt(o.dataset.page);f(T)})});const u=[l];document.getElementById("previousPageBtn").addEventListener("click",o=>{o.preventDefault(),u[0]>1&&f(u[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",o=>{o.preventDefault(),u[0]!==a&&f(u[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",o=>{o.preventDefault(),u[0]>1&&f(1)}),document.getElementById("last-page-btn").addEventListener("click",o=>{o.preventDefault(),u[0]!==a&&f(a)})}function f(r){l=r,c(l),window.scrollTo(0,400)}c(l)},S=e=>{const t=document.querySelector("#searchStores"),s=()=>{let a=e;t.value!==""&&(a=a.filter(l=>l.name.includes(t.value))),I(a),k(a),y()};t.addEventListener("keydown",a=>{a.keyCode===13&&s()})};Promise.all([axios.get(`https://json-server-project-wtkt.onrender.com/userShopCollections?userId=${h}`),axios.get("https://json-server-project-wtkt.onrender.com/shops")]).then(e=>{P=e[0].data,p=e[1].data,j(),M(),$(),k(p),y()}).catch(e=>{console.error("Error fetching data:",e)});
