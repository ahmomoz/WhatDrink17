const collectBtn = document.querySelectorAll(".collect-btn");
console.log(collectBtn);
function isCollect(){
    collectBtn.forEach(function (item) {
        item.addEventListener("click", function (e) {
            if (e.target.value == "collected") {
                // collectBtn.innerHTML =`<i class="fa-solid fa-heart"></i>`
                item.value = "uncollect";
                item.classList.remove("fa-regular");
                item.classList.add("fa-solid");
    
            } else if (e.target.value == "uncollect") {
                // collectBtn.innerHTML =`<i class="fa-regular fa-heart"></i>`
                item.value = "collected";
                item.classList.add("fa-regular");
                item.classList.remove("fa-solid");
            }
            console.log("hi")//驗證
        });
    });
}

isCollect();