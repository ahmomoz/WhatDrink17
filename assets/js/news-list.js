let newsCard = document.querySelector("#newsCard");
console.log("test")
axios.get('https://json-server-project-wtkt.onrender.com/latestNews')
.then(response => {
    console.log(response.data)
});
