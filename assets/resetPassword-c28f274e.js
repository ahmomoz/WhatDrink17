import"./bootstrap.min-4ba85d86.js";function n(){for(var s=window.location.search.substring(1),e=s.split("&"),r=0;r<e.length;r++){var t=e[r].split("=");if(t[0]==="token")return t[1]}return!1}document.getElementById("resetPasswordForm").addEventListener("submit",function(s){s.preventDefault();const e=document.getElementById("resetPassword").value,r=document.getElementById("resetPasswordConfirm").value;if(e!==r){alert("Passwords do not match.");return}axios.post("https://passcheck-ktd6.onrender.com/reset-password",{password:e,token:n()}).then(function(t){alert("Your password has been reset successfully."),o()}).catch(function(t){console.error("Error:",t),o()})});function o(){window.location.href="index.html"}
