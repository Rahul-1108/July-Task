$(document).ready(function(){
    $(".section-Time").hide();
    $(".section-Number").hide();
    $(".section-YN").hide();

    $('input:radio[name=questionType]').click(function(){
        var data = $(this).val();
        if(data == "text"){
            $(".section-Text").show();
            $(".section-YN").hide();
            $(".section-Time").hide();
            $(".section-Number").hide();
            var div = $(".section-Text");  
            div.animate({fontSize: '20px'}, "slow");
        }
        if (data == "number") {
            $(".section-Number").show();
            $(".section-Time").hide();
            $(".section-Text").hide();
            $(".section-YN").hide();
            var div = $(".section-Number");  
            div.animate({height: "fadeIn", fontSize: '20px'}, "slow");
        }
        if (data == "y-n") {
            $(".section-YN").show();
            $(".section-Time").hide();
            $(".section-Text").hide();
            $(".section-Number").hide();
            var div = $(".section-YN");  
            div.animate({left: '100px'}, "slow");
            div.animate({fontSize: '20px'}, "slow");
        }
        if (data == "time") {
            $(".section-Time").show();
            $(".section-Text").hide();
            $(".section-Number").hide();
            $(".section-YN").hide();
            var div = $(".section-Time ");  
            div.animate({left: '100px'}, "slow");
            div.animate({fontSize: '20px'}, "slow");
        }
    });
});