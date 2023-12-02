import axios from "axios";

export async function addUserDrinkCollection(userId, drinkId) {
  try {
    await axios.post(
      "https://drinkpicker-nclv.onrender.com/userDrinkCollections",
      { userId, drinkId }
    );
  } catch (error) {
    console.error("錯誤:", error);
  }
}

export async function deleteUserDrinkCollection(userId, drinkId) {
  try {
    const response = await axios.get(
      `https://drinkpicker-nclv.onrender.com/userDrinkCollections?userId=${userId}&drinkId=${drinkId}`
    );
    if (response.data.length > 0) {
      await axios.delete(
        `https://drinkpicker-nclv.onrender.com/userDrinkCollections/${response.data[0].id}`
      );
    }
  } catch (error) {
    console.error("錯誤:", error);
  }
}
