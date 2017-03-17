

$(document).ready(function() {
    
    for (x = 1; x <= 48; x++) {
        $('#container').append('<div class ="unit"></div>');
        for (y = 1; y <= 48; y++) {
            $('#container').append('<div class ="unit"></div>');
        }
    }
    
    $('.unit').mouseenter(function() {
        $(this).css('background-color', 'white');
    });

    $('#reset').click(function() {
        $('.unit').css('background-color', 'black');

    });
    $('#rainbow').click(function() { 

        $('.unit').mouseenter(function() {
            var rgbColor = ["red","blue","yellow","green","purple","orange","white"];
            var rand = rgbColor[Math.floor(Math.random() * rgbColor.length)];
            $(this).css('background-color', rand);    
        })
        
    });
        $('#white').click(function() { 
            $('.unit').mouseenter(function() {
                $(this).css('background-color', 'white');    
        })
        
    });
        $('#blue').click(function() { 
            $('.unit').mouseenter(function() {
                $(this).css('background-color', 'blue');    
        })
        
    });
        $('#yellow').click(function() { 
            $('.unit').mouseenter(function() {
                $(this).css('background-color', 'yellow');    
        })
        
    });
        $('#red').click(function() { 
            $('.unit').mouseenter(function() {
                $(this).css('background-color', 'red');    
        })
        
    });
    $('#sizeChange').click(function() {
        var gridSize = prompt("Enter a number 1-48");
        $('.unit').width(576/gridSize);
        $('.unit').height(576/gridSize);
        $('.unit').css('background-color', 'black');
        for (x = 1; x <= gridSize; x++) {
            $('#container').append('<div class ="unit"></div>');
            for (y = 1; y <= gridSize; y++) {
                $('#container').append('<div class ="unit"></div>');
        }
    }
        
    });
        
});


