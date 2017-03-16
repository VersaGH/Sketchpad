holdMouse = false;

$(document).ready(function() {
    
    for (x = 1; x < 48; x++) {
        $('#container').append('<div class ="unit"></div>');
        for (y = 1; y < 48; y++) {
            $('#container').append('<div class ="unit"></div>');
        }
    }
    
    $('.unit').mousedown(function() {
        holdMouse = true;
        $(this).css('background-color', 'red');
        mouseHeld();

    }).mouseup(function() {
        holdMouse = false;
        $(this).css('background-color', 'blue')
    });
    
    $('#reset').click(function() {
        $('.unit').css('background-color', 'black');
        holdMouse = false;
    });
        
});

function mouseHeld() {
    if (holdMouse) {
        $('.unit').mouseenter(function() {
            $(this).css('background-color', 'red');
                    
    })
    } 
}

