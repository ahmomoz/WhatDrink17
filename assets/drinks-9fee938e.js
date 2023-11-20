import"./bootstrap.min-426b97e8.js";const u=document.querySelector("#drinkList");let v=document.querySelector("#teaTypeSelect"),y=document.querySelector("#ingredientsSelect"),o=[],f=[];const T=()=>{const t=o.map(a=>!a||!a.TeaType?"":a.Ingredients.length===0?`${a.TeaType}`:`${a.TeaType},${a.Ingredients}`),e=[];for(let a=0;a<t.length;a++)e.push(t[a].split(","));let n="",i=[];e.forEach(a=>{a.forEach((m,b)=>{n+=`<li class="drinks-tag">${m}</li>`,b===a.length-1&&(i.push(n),n="")}),f.push(i),i=[]})},E=()=>{let t="";o.forEach(e=>{t+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${e.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${e.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${f[e.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${e.Description}</p>
              </div>
              <div class="d-flex justify-content-between align-items-end ms-16">
                <div class="d-flex align-items-center">
                  <img src="../assets/images/tri.svg" class="tri" alt="tri">
                  <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${e.StoreName}</p>
                </div>
                <a href="#" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
              </div>
          </li>
        `}),u.innerHTML=t},P=()=>{E()};function w(){const t=document.querySelectorAll(".collect-btn");console.log(t),t.forEach(function(e){e.addEventListener("click",function(n){n.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):n.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid")),console.log("hi")})})}v.addEventListener("change",k);y.addEventListener("change",k);function k(){let t=o;v.value!==""&&(t=t.filter(e=>e.TeaType.includes(v.value))),y.value!==""&&(t=t.filter(e=>e.Ingredients.includes(y.value))),B(t),x(t)}function B(t){let e="";t.forEach(n=>{e+=`
      <li class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
          value="collected"></button>
        <img src="${n.ImageLink}" alt="drink image">
        <div class="w-100 d-flex flex-column justify-content-between">
          <div class="drinks-card-body ms-16">
            <h4 class="mb-8 mb-md-12">${n.DrinkName}</h4>
            <ul class="drinks-tag-group mb-8 mb-md-12">
              ${f[n.id-1]}
            </ul>
            <p class="drinks-card-content mb-24 mb-md-32">${n.Description}</p>
          </div>
          <div class="d-flex justify-content-between align-items-end ms-16">
                <div class="d-flex align-items-center">
                  <img src="../assets/images/tri.svg" class="tri" alt="tri">
                  <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${n.StoreName}</p>
                </div>
                <a href="#" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
          </div>
      </li>
    `}),u.innerHTML=e}const x=t=>{const e=t.length,n=10,i=Math.ceil(e/n);let a=1;function m(r){const c=(r-1)*n,l=c+n,g=t.slice(c,l);b(g),$()}function b(r){u.innerHTML="";let c="";r.forEach(l=>{c+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${l.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${l.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${f[l.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${l.Description}</p>
              </div>
              <div class="d-flex justify-content-between align-items-end ms-16">
                <div class="d-flex align-items-center">
                  <img src="../assets/images/tri.svg" class="tri" alt="tri">
                  <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${l.StoreName}</p>
                </div>
                <a href="#" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
              </div>
          </li>
        `}),u.innerHTML=c}function $(){const r=document.getElementById("pagination");r.innerHTML="";let c="";for(let s=1;s<=i;s++)c+=`
      <li class="page-item mx-4 ${s===a?"active":""}">   
        <a class="page-link" href="#" data-page="${s}">${s}</a>
      </li>
    `;const l=a===1?"text-gray":"",g=a===i?"text-gray":"";r.innerHTML=`
    <li id="first-page-btn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link ${l}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
      </a>
    </li>

    <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link ${l}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">chevron_left</span>
      </a>
    </li>

    ${c}

    <li id="next-page-btn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link ${g}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">chevron_right</span>
      </a>
    </li>

    <li id="last-page-btn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link ${g}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
      </a>
    </li>`,document.querySelectorAll(".page-link").forEach(s=>{s.addEventListener("click",h=>{h.preventDefault();const L=parseInt(s.dataset.page);d(L)})});const p=[a];document.getElementById("previousPageBtn").addEventListener("click",s=>{s.preventDefault(),p[0]>1&&d(p[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",s=>{s.preventDefault(),p[0]!==i&&d(p[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",s=>{s.preventDefault(),d(1)}),document.getElementById("last-page-btn").addEventListener("click",s=>{s.preventDefault(),d(i)})}function d(r){a=r,m(a),window.scrollTo({top:0,behavior:"smooth"})}m(a)};axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(t=>{o=t.data,T(),P(),k(),x(o),w()}).catch(t=>{console.error("Error fetching data:",t)});
