// *****************************************************
// *****************************************************
// *****************************************************

//           Updates

// *****************************************************
// *****************************************************
// *****************************************************

    // ****************
    //    Updates input value
    //    when slider gets updated
    // ***********************
        $(".hueSlider input, .saturationSlider input, .luminaceSlider input, .redSlider input, .greenSlider input, .blueSlider input")
        .on(
            "input change",
            function() {
                $(this).parent().prev("div").find('input').val($(this).val())
            }
        );
    // **********************
    // ****************
    //    Updates slider when
    //    a value is changed
    // ***********************
        $(".hueValue input, .saturationValue input, .luminaceValue input, .redValue input, .greenValue input, .blueValue input")
        .on(
            "input change",
            function() {
                $(this).parent().next("div").find('input').val($(this).val())
            }
        );
    // **********************

    // *****************************
    // Parsing
    // **
        function parseHSL(h,s,l){
            return 'hsl('+h+','+s+'%,'+l+'%)';
        };
        function parseRGB(r,g,b){
            return 'rgb('+r+','+g+','+b+')';
        };
    // Get val
    // **
        var valOf = function(element){
            return $('.'+element+' input').val()
        };
    // Settings
    // **
        var gradSet = 'linear-gradient(to right,'
    // *****************************
    // ****************
    //    Sync sliders color
    //    when called
    // ***********************
        function syncSliderColor(){
            // Hue Slider color sync
                $('.sliderInHue').css(
                    'background', gradSet + parseHSL(0,valOf('saturationValue'),valOf('luminaceValue')) + ',' +
                                            parseHSL(60,valOf('saturationValue'),valOf('luminaceValue')) + ',' +
                                            parseHSL(120,valOf('saturationValue'),valOf('luminaceValue')) + ',' +
                                            parseHSL(180,valOf('saturationValue'),valOf('luminaceValue')) + ',' +
                                            parseHSL(240,valOf('saturationValue'),valOf('luminaceValue')) + ',' +
                                            parseHSL(300,valOf('saturationValue'),valOf('luminaceValue')) + ',' +
                                            parseHSL(360,valOf('saturationValue'),valOf('luminaceValue')) + ')'
                );
            // Saturation Slider color sync
                $('.sliderInSaturation').css(
                    'background', gradSet + parseHSL(valOf('hueValue'),0/*Min saturation*/,valOf('luminaceValue')) + ',' +
                                            parseHSL(valOf('hueValue'),100/*Max saturation*/,valOf('luminaceValue')) + ')'
                );
            // Luminace slider color sync
                $('.sliderInLuminace').css(
                    'background', gradSet + parseHSL(valOf('hueValue'),valOf('saturationValue'),0/*luminace*/) + ',' +
                                            parseHSL(valOf('hueValue'),valOf('saturationValue'),50/*luminace*/) + ',' +
                                            parseHSL(valOf('hueValue'),valOf('saturationValue'),100/*luminace*/) + ')'
                );
            // Red slider color sync
                $('.sliderInRed').css(
                    'background', gradSet + parseRGB(0,valOf('greenValue'),valOf('blueValue')) + ',' +
                                            parseRGB(255,valOf('greenValue'),valOf('blueValue')) + ')'
                );
            // Green slider color sync
                $('.sliderInGreen').css(
                    'background', gradSet + parseRGB(valOf('redValue'),0,valOf('blueValue')) + ',' +
                                            parseRGB(valOf('redValue'),255,valOf('blueValue')) + ')'
                );
            // Blue slider color sync
                $('.sliderInBlue').css(
                    'background', gradSet + parseRGB(valOf('redValue'),valOf('greenValue'),0) + ',' +
                                            parseRGB(valOf('redValue'),valOf('greenValue'),255) + ')'
                );
        };
    // ****************
    //    Updates output color
    //    when called and on document load
    // ***********************
        function colorBox() {
            var rgb = parseRGB($('.redValue input').val(),$('.greenValue input').val(),$('.blueValue input').val())
            var hsl = parseHSL($('.hueValue input').val(),$('.saturationValue input').val(),$('.luminaceValue input').val())
            var rgbHex = "#" + toHex($('.redValue input').val()) + toHex($('.greenValue input').val()) + toHex($('.blueValue input').val())

            $('.colorsBox').css({
                'background-color': rgb,
                'box-shadow': "3px 3px 3px "+rgb,
                'border': '1px solid white'
            });
            $('.rgbString').val(rgb)
            $('.hslString').val(hsl)
            $('.rgbHexString').val(rgbHex)
            if ($('.luminaceValue input').val() > 49) {
                $('.rgbString, .hslString, .rgbHexString').css({
                    'color': 'black',
                    'border-bottom': '2px solid black'
                })
                $('.colorsBox').css(
                    'border', '2px solid black'
                )
            } else {
                $('.rgbString, .hslString, .rgbHexString').css({
                    'color': 'white',
                    'border-bottom': '2px solid white'
                })

                $('.colorsBox').css(
                    'border', '2px solid white'
                )
            }
            $("input[type='number']").css(
                'border','3px solid '+rgb
            )
            syncSliderColor()
        }colorBox()
    // ****************
    // ****************
    //    Updates RGB values & sliders
    //    when HSL value or slider is changed
    // ***********************
        $(".hueValue input, .saturationValue input, .luminaceValue input, .hueSlider input, .saturationSlider input, .luminaceSlider input")
        .on(
            "input change", function(){
                var hslConvert = new HslToRgb($('.hueValue input').val(),$('.saturationValue input').val(),$('.luminaceValue input').val());

                $('.redValue input').val(Math.round(hslConvert.r));
                $('.greenValue input').val(Math.round(hslConvert.g));
                $('.blueValue input').val(Math.round(hslConvert.b));

                $('.redSlider input').val(Math.round(hslConvert.r));
                $('.greenSlider input').val(Math.round(hslConvert.g));
                $('.blueSlider input').val(Math.round(hslConvert.b));
                colorBox()
            }
        );
    // ****************
    // ****************
    //    Updates HSL values & sliders
    //    when RGB value or slider is changed
    // ***********************
        $(".redValue input, .greenValue input, .blueValue input, .redSlider input, .greenSlider input, .blueSlider input")
        .on(
            "input change", function() {
                var hslConvert = new RgbToHsl($('.redValue input').val(),$('.greenValue input').val(),$('.blueValue input').val());

                $('.hueValue input').val(Math.round(hslConvert.hue));
                $('.saturationValue input').val(Math.round(hslConvert.saturation));
                $('.luminaceValue input').val(Math.round(hslConvert.luminace));

                $('.hueSlider input').val(Math.round(hslConvert.hue));
                $('.saturationSlider input').val(Math.round(hslConvert.saturation));
                $('.luminaceSlider input').val(Math.round(hslConvert.luminace));
                colorBox()
            }
        );
// *****************************************************
// *****************************************************
// *****************************************************
