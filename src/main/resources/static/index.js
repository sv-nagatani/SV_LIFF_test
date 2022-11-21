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
        liff.getProfile().then((profile) => {
			document.getElementById("text7").textContent = profile.displayName;
			document.getElementById("text8").textContent = profile.pictureUrl;
			document.getElementById("text9").textContent = profile.statusMessage;
		});
        liff.permission.query("profile").then((permission) => {
			document.getElementById("text10").textContent = permission.state;
		});
        liff.permission.query("openid").then((permission) => {
			document.getElementById("text11").textContent = permission.state;
		});
    })
    .catch((error) => {
        console.log(error)
    })
});