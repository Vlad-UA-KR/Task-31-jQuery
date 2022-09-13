$(function () {
	$('.container__tabs').click(function (e) {
		let target = e.target.closest('div');
		if (target.className.includes('tabOne')) {
			$('.wrapperOne').css('z-index', '1')
			$('.wrapperTwo').css('z-index', '-1')
			$('.wrapperThree').css('z-index', '-1')
			return;
		}
		if (target.className.includes('tabTwo')) {
			$('.wrapperOne').css('z-index', '-1')
			$('.wrapperTwo').css('z-index', '1')
			$('.wrapperThree').css('z-index', '-1')
			return;
		}
		if (target.className.includes('tabThree')) {
			$('.wrapperOne').css('z-index', '-1')
			$('.wrapperTwo').css('z-index', '-1')
			$('.wrapperThree').css('z-index', '1')
			return;
		}
	});
})