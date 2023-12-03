import axios from "axios";
import { API_BASE_DB_URL } from "./config";

/**
 * 發送GET請求到指定URL以獲取集合數據。
 * @param {string} url - 要請求的URL。
 * @param {object} params - 請求的參數。
 * @returns {Promise<Array>} - 返回響應數據或空數組。
 */
async function fetchCollection(url, params) {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("錯誤:", error);
    return [];
  }
}

/**
 * 向指定URL發送POST請求以添加新項目到集合。
 * @param {string} url - 要請求的URL。
 * @param {object} data - 要發送的數據。
 */
async function addToCollection(url, data) {
  try {
    await axios.post(url, data);
  } catch (error) {
    console.error("錯誤:", error);
  }
}

/**
 * 向指定URL發送DELETE請求以從集合中移除項目。
 * @param {string} url - 要請求的URL。
 */
async function removeFromCollection(url) {
  try {
    await axios.delete(url);
  } catch (error) {
    console.error("錯誤:", error);
  }
}

/**
 * 為用戶添加飲料收藏。
 * @param {number} userId - 用戶的ID。
 * @param {number} drinkId - 飲料的ID。
 */
export async function addUserDrinkCollection(userId, drinkId) {
  addToCollection(`${API_BASE_DB_URL}/userDrinkCollections`, {
    userId,
    drinkId,
  });
}

/**
 * 為用戶刪除飲料收藏。
 * @param {number} userId - 用戶的ID。
 * @param {number} drinkId - 飲料的ID。
 */
export async function deleteUserDrinkCollection(userId, drinkId) {
  const collection = await fetchCollection(
    `${API_BASE_DB_URL}/userDrinkCollections`,
    { userId, drinkId }
  );
  if (collection.length > 0) {
    removeFromCollection(
      `${API_BASE_DB_URL}/userDrinkCollections/${collection[0].id}`
    );
  }
}

/**
 * 為用戶添加商店收藏。
 * @param {number} userId - 用戶的ID。
 * @param {number} shopId - 商店的ID。
 */
export async function addUserShopCollection(userId, shopId) {
  addToCollection(`${API_BASE_DB_URL}/666/userShopCollections`, {
    userId,
    shopId,
  });
}

/**
 * 為用戶刪除商店收藏。
 * @param {number} userId - 用戶的ID。
 * @param {number} shopId - 商店的ID。
 */
export async function deleteUserShopCollection(userId, shopId) {
  const collection = await fetchCollection(
    `${API_BASE_DB_URL}/userShopCollections`,
    { userId, shopId }
  );
  if (collection.length > 0) {
    removeFromCollection(
      `${API_BASE_DB_URL}/userShopCollections/${collection[0].id}`
    );
  }
}
