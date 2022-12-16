/**
 * index.htmlのスクリプト処理
 */
$(function() {
    $("#access").html("LIFF SDKに接続成功！");
    $("#text1").html(liff.getLanguage());
    $("#text2").html(liff.getVersion());
    $("#text3").html(liff.isInClient());
    $("#text4").html(liff.isLoggedIn());
    $("#text5").html(liff.getOS());
    $("#text6").html(liff.getLineVersion());
    liff.getProfile().then((profile) => {
		$("#text12").html(profile.userId);
		$("#text7").html(profile.displayName);
		$("#text8").html(profile.pictureUrl);
		$("#text9").html(profile.statusMessage);
	});
    liff.permission.query("profile").then((permission) => {
		$("#text10").html(permission.state);
	});
    liff.permission.query("openid").then((permission) => {
		$("#text11").html(permission.state);
	});
});