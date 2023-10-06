$(document).ready(function() {
    $('.tabLoadContent').empty();
    $('.tabLoadContent').append("<iframe id='phyicalActivity' class='phyicalActivity' src='elements/activity/physical_activity/story.html' width='970' height='500'></iframe>");
    $('.tab').click(function() {

        $('.tab').removeClass("active");
        $(this).addClass("active");
        var _getId = $(this).attr("id");
        $(".gwrapper").show();
        setTimeout(function() { __$cWrapper.hide(); }, 1000);
        //	$('.tabLoadContent').html();
        if (_getId == "tab1") {
            $('.tabLoadContent').load('elements/activity/pages/activity_1.html');
        } else if (_getId == "tab2") {
            $('.tabLoadContent').load('elements/activity/pages/activity_2.html');
        }
    });
    setTimeout(function() { $('#tab1').trigger('click') }, 50);
});