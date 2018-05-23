



var parseGradient = function(direction,left,right) {
    return 'linear-gradient(' + direction + ',' + left + ',' + right + ')'
};

var getLeftValues = function(){
    return $('.selectedLeftColor').css('background-color');
};
var getRightValues = function(){
    return $('.selectedRightColor').css('background-color');
};

var gradientSync = function() {
    $('.toBottom').css(
        'background', parseGradient('to bottom',getLeftValues(),getRightValues())
    );
    $('.toRight').css(
        'background', parseGradient('to right',getLeftValues(),getRightValues())
    );
    $('.toTopLeft').css(
        'background', parseGradient('to top left',getLeftValues(),getRightValues())
    );
    $('.toTopRight').css(
        'background', parseGradient('to top right',getLeftValues(),getRightValues())
    );
    $('.toTop').css(
        'background', parseGradient('to top',getLeftValues(),getRightValues())
    );
    $('.toLeft').css(
        'background', parseGradient('to left',getLeftValues(),getRightValues())
    );
    $('.toBottomLeft').css(
        'background', parseGradient('to bottom left',getLeftValues(),getRightValues())
    );
    $('.toBottomright').css(
        'background', parseGradient('to bottom right',getLeftValues(),getRightValues())
    );
};



$('.selectedLeftColor, .selectedRightColor').on('click',function(){
    $(this).css(
        'background', $('.rgbString').val()
    );
    gradientSync();
});

$('.directionalBox').on('click',function(){
    $('.directionalBox').css({
        'border': '1px solid white',
        'border-radius': '0px'
    });
    $(this).css({
        'border': '1px solid white',
        'border-radius': '35px'
    });
    $('.gradientBox').css(
        'background', $(this).css('background-image')
    );
});
