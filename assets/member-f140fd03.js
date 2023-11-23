import"./bootstrap.min-141e3aaa.js";const i=document.querySelector(".userData"),o=document.querySelector(".drinkCollections");function l(e){i.innerHTML=`
    <img src="../assets/images/member.png" class="rounded-circle mb-8" style="width: 80px;" alt="user image">
    <p class="fs-32 text-white">${e[0].username}</p>
    <p class="fs-20 text-white">${e[0].email}</p>
    `}function a(e){let t="";for(let s=0;s<e.length;s++)t+=`<li class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-solid fa-heart fs-24" value="uncollect"></button>
        <img src="${e[s].ImageLink}" alt="drink image">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${e[s].DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            <li class="drinks-tag">奶茶</li>
            <li class="drinks-tag">牛奶</li>
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${e[s].Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>`;o.innerHTML=t}axios.get("https://json-server-project-wtkt.onrender.com/users?id=1").then(e=>{let t=e.data;l(t)});axios.get("https://json-server-project-wtkt.onrender.com/userDrinkCollections?userId=1").then(e=>{const n=`https://json-server-project-wtkt.onrender.com/drinks?id=${e.data.map(r=>r.drinkId).join("&id=")}`;axios.get(n).then(r=>{console.log(r.data),a(r.data)})}).catch(e=>{console.error("發生錯誤:",e)});
