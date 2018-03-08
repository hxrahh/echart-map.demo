/**
 * Created on 2018/3/7.
 */
$(function () {
    $('#dowebok').fullpage({

        'navigation': true,
        continuousVertical: true
    });

    setInterval(function () {
    	$.fn.fullpage.moveSectionDown();
    }, 3000);


    var listIndex = -1;
    setInterval(function () {
        listIndex = listIndex < $('.radiation-list').length - 2 ? listIndex + 1 : 0;
        console.log(listIndex);
        $('.radiation-list').find('.index-item').children(".radiation-index").removeClass('active');
        $($('.radiation-list')[listIndex]).find('.index-item').children(".radiation-index").addClass('active');

        $('.radiation-list').find('.grading-rule').hide();
        $($('.radiation-list')[listIndex]).find('.grading-rule').show();

        $('.radiation-list').find('.index-item').children(".radiation-index-text").removeClass('current');
        $($('.radiation-list')[listIndex]).find('.index-item').children(".radiation-index-text").addClass('current');

    }, 3000)
});