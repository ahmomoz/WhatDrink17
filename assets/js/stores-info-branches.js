//變數命名
const branchesList = document.querySelector("#branchesList"); //卡片列表
let branchesData = [];
import axios from "axios";
import { API_BASE_DB_URL } from "./config";
const shopId = window.location.href.split("?id=").pop();

//將分店資料由外部寫入
axios
  .get(`${API_BASE_DB_URL}/shopBranches?shopId=${shopId}`)
  .then((response) => {
    branchesData = response.data;
    branchesRenderData(); //載入預設飲料卡片
    // console.log(branchesData);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

//載入預設分店卡片函式------------------------------------------------
const branchesRender = () => {
  let str = "";
  branchesData.forEach((item) => {
    // console.log(item.branchName);
    str += `              
        <div class="col-12 col-md-6 col-lg-4 mb-16">
    <div class="border rounded-16 px-40 py-24">
      <p class="fs-20 fw-500 mb-12">${item.branchName}</p>
      <ul class="p-0 m-0">
        <li class="p-0 mb-16">
          <span class="material-symbols-outlined align-middle me-4 fs-20">
            schedule
          </span>
          ${item.businessHours}
        </li>
        <li class="p-0 mb-12">
          <span class="material-symbols-outlined align-middle me-4 fs-20">
            call
          </span>
          ${item.phone}
        </li>
        <li class="p-0 mb-12">
          <span class="material-symbols-outlined align-middle me-4 fs-20">
            location_on
          </span>
          <a href="#">${item.address}</a>
        </li>
      </ul>
    </div>
  </div>
`;
  });

  branchesList.innerHTML = str;
};

//初始化預設飲料卡片函式--------------------------------------------
const branchesRenderData = () => {
  branchesRender();
};
