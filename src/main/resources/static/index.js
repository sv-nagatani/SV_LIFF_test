/**
 * 
 */
document.addEventListener("DOMContentLoaded", function() {
  liff
    .init({ liffId: '1657646587-vq0dZBwj' })
    .then(() => {
        console.log("Success! you can do something with LIFF API here.")
        document.getElementById("access").textContent = "LIFF SDKに接続成功！";
        document.getElementById("text1").textContent = liff.getLanguage();
        document.getElementById("text2").textContent = liff.getVersion();
        document.getElementById("text3").textContent = liff.isInClient();
        document.getElementById("text4").textContent = liff.isLoggedIn();
        document.getElementById("text5").textContent = liff.getOS();
        document.getElementById("text6").textContent = liff.getLineVersion();
        document.getElementById("text7").textContent = liff.getProfile().resolve();
        document.getElementById("text8").textContent = liff.permission.query("profile").resolve();
        document.getElementById("text9").textContent = liff.permission.query("openid").resolve();
    })
    .catch((error) => {
        console.log(error)
    })
});