//變數命名
const lastestMenu = document.querySelector("#lastestMenu"); //卡片列表
let menuData = [];
const menuId = window.location.href.split("?id=").pop()

import axios from 'axios';

//將分店資料由外部寫入
axios.get(`https://json-server-project-wtkt.onrender.com/shops?id=${menuId}`)
    .then(response => {
        menuData = response.data;
        menuRenderData(); //載入預設飲料卡片
        // console.log(branchesData);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

   
//載入預設分店卡片函式------------------------------------------------
const menuRender = () => {
    let str = '';
    menuData.forEach(item => {
        console.log(item.menu);

        str += `              
        <img src="${item.menu}" class="d-block mw-100" alt="菜單">`;
    });

    lastestMenu.innerHTML = str;
};

//初始化預設飲料卡片函式--------------------------------------------
const menuRenderData = () => {
    menuRender();
};