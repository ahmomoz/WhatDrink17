import"./bootstrap.min-bd19be0e.js";const f=document.querySelector("#popularDrinkList");let c=[],i=[],a=[],d=[];const g=()=>{const e=c.map(l=>l.Ingredients.length===0?`${l.TeaType}`:`${l.TeaType},${l.Ingredients}`),t=[];for(let l=0;l<e.length;l++)t.push(e[l].split(","));let r="",s=[];t.forEach(l=>{l.forEach((n,o)=>{r+=`<li class="drinks-tag">${n}</li>`,o===l.length-1&&(s.push(r),r="")}),i.push(s),s=[]})};function p(){let e={};for(var t=0;t<a.length;t++){let n=a[t].drinkId;e[n]?e[n]++:e[n]=1}const r=Object.entries(e);r.sort(function(n,o){return o[1]-n[1]});let l=r.slice(0,6).map(function(n){return n[0]});console.log(c),console.log(l),c.forEach(function(n){l.forEach(function(o){o==n.id&&d.push(n)})})}const k=()=>{let e="";d.forEach(t=>{e+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${t.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${t.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${i[t.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${t.Description}</p>
              </div>
              <a href="#" class="d-block text-primary text-end"><span
                  class="material-symbols-outlined me-2s align-middle">
                  location_on
                </span>搜尋店家</a>
            </div>
          </li>
        `}),f.innerHTML=e},h=()=>{k()};function v(){const e=document.querySelectorAll(".collect-btn");console.log(e),e.forEach(function(t){t.addEventListener("click",function(r){r.target.value=="collected"?(t.value="uncollect",t.classList.remove("fa-regular"),t.classList.add("fa-solid")):r.target.value=="uncollect"&&(t.value="collected",t.classList.add("fa-regular"),t.classList.remove("fa-solid"))})})}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(e=>{c=e.data}).catch(e=>{console.error("Error fetching data:",e)});axios.get("https://json-server-project-wtkt.onrender.com/userDrinkCollections").then(e=>{a=e.data,p(),g(),h(),v()}).catch(e=>{console.error("Error fetching data:",e)});const u=document.querySelectorAll(".collect-btn");console.log(u);function b(){u.forEach(function(e){e.addEventListener("click",function(t){t.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):t.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid")),console.log("hi")})})}b();
