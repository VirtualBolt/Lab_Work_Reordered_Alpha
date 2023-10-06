$(document).ready(function () {
	$('.tab').click(function(){
		$('.tab').removeClass("active");
		$(this).addClass("active");
		var _getId = $(this).attr("id");		
		$(".gwrapper").show();
		setTimeout(function(){__$cWrapper.hide(); }, 1000);
		/* if(_getId=="tab1"){
			$('.tabLoadContent').load('pages/Topic01/T01P91.html');
		}else if(_getId=="tab2"){
			$('.tabLoadContent').load('pages/Topic01/T01P92.html');
		}else if(_getId=="tab3"){
			$('.tabLoadContent').load('pages/Topic01/T01P93.html');
		}else if(_getId=="tab4"){
			$('.tabLoadContent').load('pages/Topic01/T01P94.html');
		} */
	});

/*Tab function */

$('.tabContent ul.tabs li').off().on('click', function (e) {
	e.preventDefault();
// $('.tabContent ul.tabs li').click(function(){
	var tab_id = $(this).attr('data-tab');
	console.log("tab ID"+tab_id)
	$('.tabContent ul.tabs li').removeClass('current');
	$('.tab-content').removeClass('current');

	$(this).addClass('current');
	$(".tabContent #"+tab_id).addClass('current');
})


});

