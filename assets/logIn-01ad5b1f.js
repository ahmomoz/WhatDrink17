import"./bootstrap.min-66c8f441.js";function l(t){for(var o=t+"=",e=document.cookie.split(";"),s=0;s<e.length;s++){for(var n=e[s];n.charAt(0)==" ";)n=n.substring(1);if(n.indexOf(o)==0)return n.substring(o.length,n.length)}return null}window.onload=function(){var t=l("token");t?(console.log("找到 cookie:",t),axios.get("https://authbridge.onrender.com/user",{headers:{Authorization:t}}).then(o=>{if(o){const e=o.data.email;r(e,t)}}).catch(o=>{console.log(o)})):console.log("未找到指定的 cookie")};const c=sessionStorage.getItem("jwtToken");function u(){return c?(console.log("有權限: 找到 Token"),redirectToMember(),!0):!1}u();document.getElementById("loginForm").addEventListener("submit",function(t){t.preventDefault();const o=document.getElementById("logInEmail").value,e=document.getElementById("logInPassword").value;r(o,e)});async function r(t,o){try{const e=await axios.post("https://drinkpicker-nclv.onrender.com/login",{email:t,password:o});console.log(e.data);const s=e.data.accessToken,n=e.data.user.email,a=e.data.user.id,i=e.data.user.nickname;s?(console.log("登入成功",e.data),sessionStorage.setItem("jwtToken",s),sessionStorage.setItem("user_email",n),sessionStorage.setItem("user_id",a),sessionStorage.setItem("user_nickname",i),d()):alert("登入失敗，請檢查帳號或密碼")}catch(e){console.error("登入錯誤",e),alert("登入失敗，請檢查帳號或密碼")}}function d(){window.location.href="index.html"}
