import"./bootstrap.min-426b97e8.js";document.querySelector("#popularDrinkList");let c=[],a=[];const d=()=>{const e=c.map(l=>l.Ingredients.length===0?`${l.TeaType}`:`${l.TeaType},${l.Ingredients}`),t=[];for(let l=0;l<e.length;l++)t.push(e[l].split(","));let n="",s=[];t.forEach(l=>{l.forEach((o,r)=>{n+=`<li class="drinks-tag">${o}</li>`,r===l.length-1&&(s.push(n),n="")}),s=[]})};function u(){let e={};for(var t=0;t<a.length;t++){let o=a[t].drinkId;e[o]?e[o]++:e[o]=1}const n=Object.entries(e);n.sort(function(o,r){return r[1]-o[1]});let l=n.slice(0,6).map(function(o){return o[0]});console.log(c),console.log(l),c.forEach(function(o){l.forEach(function(r){r==o.id})})}function f(){const e=document.querySelectorAll(".collect-btn");console.log(e),e.forEach(function(t){t.addEventListener("click",function(n){n.target.value=="collected"?(t.value="uncollect",t.classList.remove("fa-regular"),t.classList.add("fa-solid")):n.target.value=="uncollect"&&(t.value="collected",t.classList.add("fa-regular"),t.classList.remove("fa-solid"))})})}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(e=>{c=e.data}).catch(e=>{console.error("Error fetching data:",e)});axios.get("https://json-server-project-wtkt.onrender.com/userDrinkCollections").then(e=>{a=e.data,u(),d(),f()}).catch(e=>{console.error("Error fetching data:",e)});const i=document.querySelectorAll(".collect-btn");console.log(i);function g(){i.forEach(function(e){e.addEventListener("click",function(t){t.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):t.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid")),console.log("hi")})})}g();