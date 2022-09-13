$(function () {
	$('.calc__button').mouseenter(function (e) {
		$(this).css('background-color', 'yellow');
	})
	$('.calc__button').mouseleave(function (e) {
		$(this).css('background-color', 'burlywood');
	})
});

$(function () {
	function show(symbol) {
		$('.calc__display').append(symbol);
	}
	function clear() {
		$('.calc__display').text('');
	}
	function backspace() {
		let str = $('.calc__display').text().slice(0, -1);
		$('.calc__display').text(str);
	}
	function equal() {
		let str = $('.calc__display').text();
		let result = eval(str).toFixed(2);
		clear();
		show(result);
	}
	$('.calc__button').click(function () {
		let value = $(this).attr('data-value');
		if (value == 'C') {
			clear();
			return;
		}
		if (value == '=') {
			equal()
			return;
		}
		if (value == 'D') {
			backspace();
			return;
		}
		show(value);
	})
})

// $(function () {
// 	$('.calc__button').click(function () {
// 		let value = $(this).attr('data-value');
// 		show(value);
// 	})
// });

// $(function () {

// })
