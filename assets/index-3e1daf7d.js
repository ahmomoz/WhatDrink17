import"./bootstrap.min-33c36378.js";const i=document.querySelector("#popularDrinkList");let s=[],a=[];const d=()=>{const l=s.map(t=>t.Ingredients.length===0?`${t.TeaType}`:`${t.TeaType},${t.Ingredients}`),e=[];for(let t=0;t<l.length;t++)e.push(l[t].split(","));let n="",r=[];e.forEach(t=>{t.forEach((c,o)=>{n+=`<li class="drinks-tag">${c}</li>`,o===t.length-1&&(r.push(n),n="")}),a.push(r),r=[]})},u=()=>{let l="";s.forEach((e,n)=>{if(n<=5)l+=`
            <li class="drinks-card px-16 py-24 px-md-24">
              <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
                value="collected"></button>
              <img src="${e.ImageLink}" alt="drink image">
              <div class="w-100 d-flex flex-column justify-content-between">
                <div class="drinks-card-body ms-16">
                  <h4 class="mb-8 mb-md-12">${e.DrinkName}</h4>
                  <ul class="drinks-tag-group mb-8 mb-md-12">
                    ${a[e.id-1]}
                  </ul>
                  <p class="drinks-card-content mb-24 mb-md-32">${e.Description}</p>
                </div>
                <a href="#" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2s align-middle">
                    location_on
                  </span>搜尋店家</a>
              </div>
            </li>
          `;else{console.log("end");return}}),i.innerHTML=l},g=()=>{u()};function p(){const l=document.querySelectorAll(".collect-btn");console.log(l),l.forEach(function(e){e.addEventListener("click",function(n){n.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):n.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid")),console.log("hi")})})}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(l=>{s=l.data,d(),g(),p()}).catch(l=>{console.error("Error fetching data:",l)});
