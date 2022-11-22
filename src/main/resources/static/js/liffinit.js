/**
 * LIFFの初期化
 */
$(function() {
	liff
	.init({ liffId: '1657646587-vq0dZBwj' })
	.then(() => {
		console.log("Success! you can do something with LIFF API here.")
	})
	.catch((error) => {
		console.log(error)
	})
});
