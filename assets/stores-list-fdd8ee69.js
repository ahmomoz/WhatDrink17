import"./bootstrap.min-feac71ab.js";import{d as A,a as M}from"./api-4c8ad0b6.js";import{A as E}from"./config-ca05e4f1.js";const g=document.querySelector("#storeList");let h=document.querySelector("#deliverySelect"),P=document.querySelector("#CooperationSelect"),I=[],d=[],v=[];const p=sessionStorage.getItem("user_id"),q=()=>{d.forEach(e=>{const t={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let a="";for(const s in t)e[s]&&(a+=`<li class="stores-tag">${t[s]}</li>`);v.push(a),a=""})},H=()=>{let e="";d.forEach(t=>{e+=`
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
        `}),g.innerHTML=e},j=()=>{H(),B(d)},y=()=>{const e=t=>document.querySelector(`.stores-card[data-shop-id="${t}"] .collect-btn`);I.forEach(t=>{const a=e(t.shopId);a&&(a.value="collected",a.classList.remove("fa-regular"),a.classList.add("fa-solid"))})};g.addEventListener("click",function(e){if(e.target.closest(".collect-btn")){if(!p)R();else if(e.target.classList.contains("collect-btn")){const a=e.target,l=a.closest(".stores-card").dataset.shopId,m=`${E}/userShopCollections?userId=${p}&shopId=${l}`;axios.get(m).then(f=>{if(f.data.length>0){A(p,l),a.value="uncollect",a.classList.remove("fa-solid"),a.classList.add("fa-regular"),Swal.fire("已取消收藏");return}else M(p,l),a.value="collected",a.classList.remove("fa-regular"),a.classList.add("fa-solid"),Swal.fire("收藏成功")}).catch(f=>{console.error("Error checking collection status:",f)})}}});function R(){window.location.href="logIn.html"}h.addEventListener("change",x);P.addEventListener("change",x);function x(){let e=d;h.value!==""&&(h.value==="uber eat"?e=e.filter(t=>t.uber):h.value==="food panda"&&(e=e.filter(t=>t.foodpanda))),P.value!==""&&(e=e.filter(t=>t.hasEvent)),S(e),B(e),$(e),y()}function S(e){let t="";e.forEach(a=>{t+=`
      <li class="stores-card" data-shop-id="${a.id}">
      <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
        value="collected"></button>
      <img src="${a.logo}" class="mb-8" alt="store image">
      <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
        <div class="d-flex justify-content-between">
          <h5 class="mb-8 mb-md-12">${a.name}</h5>
          <ul class="d-flex text-primary">
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-regular fa-star"></i></li>
          </ul>
        </div>
        <p class="stores-card-content mb-16">
          ${a.Description}</p>
        <ul class="stores-tag-group mb-16">
          ${v[a.id-1]}
        </ul>
        <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
      </div>
    </li>
    `}),g.innerHTML=t}const $=e=>{const t=e.length,a=12,s=Math.ceil(t/a);let l=1;function m(r){const n=(r-1)*a,o=n+a,b=e.slice(n,o);f(b),L(),y()}function f(r){g.innerHTML="";let n="";r.forEach(o=>{n+=`
          <li class="stores-card" data-shop-id="${o.id}">
          <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
            value="collected"></button>
          <img src="${o.logo}" class="mb-8" alt="store image">
          <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
            <div class="d-flex justify-content-between">
              <h5 class="mb-8 mb-md-12">${o.name}</h5>
              <ul class="d-flex text-primary">
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
              </ul>
            </div>
            <p class="stores-card-content mb-16">
              ${o.Description}</p>
            <ul class="stores-tag-group mb-16">
              ${v[o.id-1]}
            </ul>
            <a href="stores-info.html?id=${o.id}" class="stores-card-btn">查看店家資訊</a>
          </div>
        </li>
          `}),g.innerHTML=n}function L(){const r=document.getElementById("pagination");r.innerHTML="";let n="";for(let i=1;i<=s;i++)n+=`
        <li class="page-item mx-4 ${i===l?"active":""}">   
          <a class="page-link" href="#" data-page="${i}">${i}</a>
        </li>
      `;const o=l===1?"text-gray":"",b=l===s?"text-gray":"",D=l===1?"disabled":"",C=l===1?"disabled":"",w=l===s?"disabled":"",_=l===s?"disabled":"";r.innerHTML=`
      <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${D}">
        <a class="page-link ${o}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
        </a>
      </li>
  
      <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${C}">
        <a class="page-link ${o}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>
  
      ${n}
  
      <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${w}">
        <a class="page-link ${b}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>
  
      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${_}">
        <a class="page-link ${b}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(i=>{i.addEventListener("click",k=>{k.preventDefault();const T=parseInt(i.dataset.page);u(T)})});const c=[l];document.getElementById("previousPageBtn").addEventListener("click",i=>{i.preventDefault(),c[0]>1&&u(c[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",i=>{i.preventDefault(),c[0]!==s&&u(c[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",i=>{i.preventDefault(),c[0]>1&&u(1)}),document.getElementById("last-page-btn").addEventListener("click",i=>{i.preventDefault(),c[0]!==s&&u(s)})}function u(r){l=r,m(l),window.scrollTo(0,400)}m(l)},B=e=>{const t=document.querySelector("#searchStores"),a=()=>{let s=e;t.value!==""&&(s=s.filter(l=>l.name.includes(t.value))),S(s),$(s),y()};t.addEventListener("keydown",s=>{s.keyCode===13&&a()})};Promise.all([axios.get(`${E}/userShopCollections?userId=${p}`),axios.get("https://json-server-project-wtkt.onrender.com/shops")]).then(e=>{I=e[0].data,d=e[1].data,q(),j(),x(),$(d),y()}).catch(e=>{console.error("Error fetching data:",e)});
