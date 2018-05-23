function openTabItem(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


// Change color on Change
$('.hueSlider input, .saturationSlider input, .luminaceSlider input, .redSlider input, .greenSlider input, .blueSlider input').on('change input',function() {
    $('.tab').css(
        'background', $('.rgbString').val()
    );
    $('.tabHeading').css(
        'color', $('.rgbString').val()
    );
});
$(document).ready(function(){
    $('.tab').css(
        'background', $('.rgbString').val()
    );
    $('.active').css(
        'background', 'transparent'
    );
    $('.tabHeading').css(
        'color', $('.rgbString').val()
    );
});
