import"./bootstrap.min-0bbeed66.js";import{a as f}from"./axios-28bc18a3.js";const i=document.querySelector("#lastestNews");let d=[];function g(){let t="";d.forEach(function(e){t+=`
        <div class="swiper-slide">
        <img src="${e.photo1}" class="lastestNews-img w-100 rounded-16 mb-8" alt="banner">
        <p class="fs-18 fw-500">${e.title}</p>
        <a href="news-info.html?id=${e.id}" class="stretched-link"></a>
      </div>
      `}),i.innerHTML=t,console.log(i)}f.get("https://json-server-project-wtkt.onrender.com/latestNews").then(t=>{d=t.data,g()});const h=document.querySelector("#popularDrinkList");let c=[],u=[],o=[],p=[];const k=()=>{const t=c.map(s=>s.Ingredients.length===0?`${s.TeaType}`:`${s.TeaType},${s.Ingredients}`),e=[];for(let s=0;s<t.length;s++)e.push(t[s].split(","));let n="",a=[];e.forEach(s=>{s.forEach((r,l)=>{n+=`<li class="drinks-tag">${r}</li>`,l===s.length-1&&(a.push(n),n="")}),u.push(a),a=[]})};function m(){let t={};for(var e=0;e<o.length;e++){let r=o[e].drinkId;t[r]?t[r]++:t[r]=1}const n=Object.entries(t);n.sort(function(r,l){return l[1]-r[1]});let s=n.slice(0,6).map(function(r){return r[0]});c.forEach(function(r){s.forEach(function(l){l==r.id&&p.push(r)})})}const v=()=>{let t="";p.forEach(e=>{t+=`
    <li class="drinks-card px-16 py-24 px-md-24">
    <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
      value="collected"></button>
    <img src="${e.ImageLink}" alt="drink image">
    <div class="w-100 d-flex flex-column justify-content-between">
      <div class="drinks-card-body ms-16">
        <h4 class="mb-8 mb-md-12">${e.DrinkName}</h4>
        <ul class="drinks-tag-group mb-8 mb-md-12">
          ${u[e.id-1]}
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
`}),h.innerHTML=t},b=()=>{v()};function w(){document.querySelectorAll(".collect-btn").forEach(function(e){e.addEventListener("click",function(n){n.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):n.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid"))})})}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(t=>{c=t.data}).catch(t=>{console.error("Error fetching data:",t)});axios.get("https://json-server-project-wtkt.onrender.com/userDrinkCollections").then(t=>{o=t.data,m(),k(),b(),w()}).catch(t=>{console.error("Error fetching data:",t)});
