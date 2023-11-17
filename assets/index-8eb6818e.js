import"./bootstrap.min-362bd10f.js";const u=document.querySelector("#popularDrinkList");let a=[],i=[],c=[],d=[];const p=()=>{const t=a.map(n=>n.Ingredients.length===0?`${n.TeaType}`:`${n.TeaType},${n.Ingredients}`),e=[];for(let n=0;n<t.length;n++)e.push(t[n].split(","));let l="",s=[];e.forEach(n=>{n.forEach((r,o)=>{l+=`<li class="drinks-tag">${r}</li>`,o===n.length-1&&(s.push(l),l="")}),i.push(s),s=[]})};function f(){let t={};for(var e=0;e<c.length;e++){let r=c[e].drinkId;t[r]?t[r]++:t[r]=1}const l=Object.entries(t);l.sort(function(r,o){return o[1]-r[1]});let n=l.slice(0,6).map(function(r){return r[0]});console.log(a),console.log(n),a.forEach(function(r){n.forEach(function(o){o==r.id&&d.push(r)})})}const k=()=>{let t="";d.forEach(e=>{t+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${e.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${e.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${i[e.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${e.Description}</p>
              </div>
              <a href="#" class="d-block text-primary text-end"><span
                  class="material-symbols-outlined me-2s align-middle">
                  location_on
                </span>搜尋店家</a>
            </div>
          </li>
        `}),u.innerHTML=t},g=()=>{k()};function h(){const t=document.querySelectorAll(".collect-btn");console.log(t),t.forEach(function(e){e.addEventListener("click",function(l){l.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):l.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid"))})})}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(t=>{a=t.data}).catch(t=>{console.error("Error fetching data:",t)});axios.get("https://json-server-project-wtkt.onrender.com/userDrinkCollections").then(t=>{c=t.data,f(),p(),g(),h()}).catch(t=>{console.error("Error fetching data:",t)});
