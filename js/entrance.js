/**
 * Created with JetBrains PhpStorm.
 * User: ktanaka
 * Date: 13/05/06
 * Time: 8:11
 * To change this template use File | Settings | File Templates.
 */
$(function(){
	var $target = $('#entrance');
	var $key = $('#secomSecret');
	var d = new Date();
	var isCloseEntranse = function(){
		return d.getHours() < 7 || d.getHours() >= 19;
	}
	if (d.isHoliDay() || isCloseEntranse()) {
		var _key = '&#42;&#49;12&#50;&#35;';
		$key.html(_key);
		$target.show();
	}
});