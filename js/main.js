(function($) {

    var display = $('.screen'),

    $('.keys span').on('click', function(){
        if($(this).hasClass('num')){
            display.append($(this).html());
        }
        else if($(this).hasClass('func')){
            var val = parseFloat(display.html());
            switch($(this).html()){
                case 'sqrt':
                    display.empty();
                    display.append(Math.sqrt(val));
                break;
                case 'x<sup>2</sup>':
                    display.empty();
                    display.append(Math.pow(val, 2));
                break;
                case 'x<sup>-1</sup>':
                    display.empty();
                    display.append(Math.pow(val, -1));
                break;
                case 'ln':
                    display.empty();
                    display.append(Math.log(val));
                break;
            }               
        }
        else if($(this).hasClass('op')){
            display.append($(this).html());
        }
        else if($(this).is("#dec")){
            if(display.html().indexOf('.') > -1){
                ;
            }
            else{
                display.append('.');
            }
        }
    });

    $('.clear').on('click', function(){
        display.empty();
    });

    $('.eval').on('click', function(){
        var result = eval(display.html());
        display.empty();
        display.append(result);
    });


})(jQuery);
