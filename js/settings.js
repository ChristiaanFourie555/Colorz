
$('.light').on('click', function() {
    $('body').css(
        'background-color', '#525252'
    );
    $(this).css(
        'border', '3px solid ' + $('.rgbString').val()
    );
    $('.dark').css(
        'border', 'none'
    );
    $('.container, .tabcontent').css(
        'background', '#777777'
    );
    $('.tablinks').removeClass('darkActive');
    $('.tablinks').addClass('lightActive');
});
$('.dark').on('click', function() {
    $('body').css(
        'background-color', '#222'
    );
    $(this).css(
        'border', '3px solid ' + $('.rgbString').val()
    );
    $('.light').css(
        'border', 'none'
    );
    $('.container, .tabcontent').css(
        'background', '#111'
    );
    $('.tablinks').removeClass('lightActive');
    $('.tablinks').addClass('darkActive');
});
