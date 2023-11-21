import"./bootstrap.min-328bce5f.js";import{a as g}from"./axios-28bc18a3.js";const h=document.querySelector("#lastestNews");let d=[];function m(){let s="";d.forEach(function(t){s+=`
        <div class="swiper-slide">
        <img src="${t.photo1}" class="lastestNews-img w-100 rounded-16 mb-8" alt="banner">
        <p class="fs-18 fw-500">${t.title}</p>
        <a href="news-info.html?id=${t.id}" class="stretched-link"></a>
      </div>
      `}),h.innerHTML=s}g.get("https://json-server-project-wtkt.onrender.com/latestNews").then(s=>{d=s.data,m()});const b=document.querySelector("#popularDrinkList");let i=[],u=[],c=[],f=[];const k=()=>{const s=i.map(l=>l.Ingredients.length===0?`${l.TeaType}`:`${l.TeaType},${l.Ingredients}`),t=[];for(let l=0;l<s.length;l++)t.push(s[l].split(","));let e="",a=[];t.forEach(l=>{l.forEach((r,o)=>{e+=`<li class="drinks-tag">${r}</li>`,o===l.length-1&&(a.push(e),e="")}),u.push(a),a=[]})};function v(){let s={};for(var t=0;t<c.length;t++){let r=c[t].drinkId;s[r]?s[r]++:s[r]=1}const e=Object.entries(s);e.sort(function(r,o){return o[1]-r[1]});let l=e.slice(0,6).map(function(r){return r[0]});i.forEach(function(r){l.forEach(function(o){o==r.id&&f.push(r)})})}const x=()=>{let s="";f.forEach(t=>{s+=`
    <li class="drinks-card px-16 py-24 px-md-24">
    <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
      value="collected"></button>
    <img src="${t.ImageLink}" alt="drink image">
    <div class="w-100 d-flex flex-column justify-content-between">
      <div class="drinks-card-body ms-16">
        <h4 class="mb-8 mb-md-12">${t.DrinkName}</h4>
        <ul class="drinks-tag-group mb-8 mb-md-12">
          ${u[t.id-1]}
        </ul>
        <p class="drinks-card-content mb-24 mb-md-32">${t.Description}</p>
      </div>
      <div class="d-flex justify-content-between align-items-end ms-16">
        <div class="d-flex align-items-center">
          <img src="../assets/images/tri.svg" class="arrow-left" alt="">
          <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${t.StoreName}</p>
        </div>
        <a href="#" class="d-block text-primary text-end"><span
            class="material-symbols-outlined me-2 align-middle">
            location_on
          </span>搜尋店家</a>
      </div>
  </li>
`}),b.innerHTML=s},y=()=>{x()};function w(){document.querySelectorAll(".collect-btn").forEach(function(t){t.addEventListener("click",function(e){e.target.value=="collected"?(t.value="uncollect",t.classList.remove("fa-regular"),t.classList.add("fa-solid")):e.target.value=="uncollect"&&(t.value="collected",t.classList.add("fa-regular"),t.classList.remove("fa-solid"))})})}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(s=>{i=s.data}).catch(s=>{console.error("Error fetching data:",s)});axios.get("https://json-server-project-wtkt.onrender.com/userDrinkCollections").then(s=>{c=s.data,v(),k(),y(),w()}).catch(s=>{console.error("Error fetching data:",s)});const $=document.querySelector("#popularStoreList");let n=[],p=[];const L=()=>{n.forEach(s=>{const t={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let e="";for(const a in t)s[a]&&(e+=`<li class="stores-tag">${t[a]}</li>`);p.push(e),e=""})},D=()=>{let s="";n.forEach(t=>{s+=`
        <li class="stores-card">
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
                ${p[t.id-1]}
              </ul>
              <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),$.innerHTML=s},E=()=>{D()};function T(){const s=document.querySelectorAll(".collect-btn");console.log(s),s.forEach(function(t){t.addEventListener("click",function(e){e.target.value=="collected"?(t.value="uncollect",t.classList.remove("fa-regular"),t.classList.add("fa-solid")):e.target.value=="uncollect"&&(t.value="collected",t.classList.add("fa-regular"),t.classList.remove("fa-solid")),console.log("hi")})})}axios.get("https://json-server-project-wtkt.onrender.com/shops").then(s=>{n=s.data,L(),E(),T(),console.log(n)}).catch(s=>{console.error("Error fetching data:",s)});
