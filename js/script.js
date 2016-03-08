$(document).ready(function() {
	$('.showcase_ro').keyup(function() {
    	$('.showcase_sf').html($(this).val());
	});

	$('.background').click(function(){
		var ro_fonts = ["roboto_regular", 'roboto_black', "roboto_bold","roboto_light","roboto_medium","roboto_thin"];
		$('.showcase_ro').css({"font-family": ro_fonts[Math.floor(Math.random()*ro_fonts.length)]});
    });

    $('.container').click(function(){
		var sf_fonts = ["sanfrancisco_d_bold", 'sanfrancisco_d_Medium', "sanfrancisco_d_regular","sanfrancisco_d_thin","sanfrancisco_d_ultralight"];
		$('.showcase_sf').css({"font-family": sf_fonts[Math.floor(Math.random()*sf_fonts.length)]});
    });

    var visted_left = 0;
    var visted_right = 0;
	$("#left_arrow").click(function(){
       
       if(visted_left%2 == visted_right%2){
       	visted_left = 0;
       	visted_right = 0;
       }
        if(visted_left%2 == 0 && visted_right%2 == 0){
        	$("#left_arrow").fadeOut();
        	// $("#right_arrow").fadeIn();
        	$(".showcase_ro").css({ "left" : "50%" });
        	$(".background").animate({
	          left: '-=50%',
	          width: '100%'
       		});
        	visted_left++;
        }else if(visted_left%2 == 0 && visted_right%2 == 1){
        	$("#right_arrow").fadeIn();
        	$(".background").fadeIn();
        	$(".background").animate({
	          left: '-=50%',
	          width: '100%'
       		});
        	$(".showcase_ro").css({ "left" : "0%" });
        	$(".romenu").fadeIn();
        	visted_left++;
        }
        
    });

    $('.showcase_ro, .showcase_sf').hover(function(){
    	var colors = ["#e74c3c", "#3498db","#9b59b6","#16a085","#2c3e50","#f1c40f","#e67e22","#c0392b","#E26A6A","#000000", "#D3696C"];
    	$('.showcase_sf').css({"color": colors[Math.floor(Math.random()*colors.length)]});
	    $('.showcase_ro').css({"color": colors[Math.floor(Math.random()*colors.length)]});
    });

    $("#right_arrow").click(function(){
       if(visted_left%2 == visted_right%2){
       	visted_left = 0;
       	visted_right = 0;
       }

       if(visted_left%2 == 1 && visted_right%2 == 0){
       		$("#left_arrow").fadeIn();
       		$(".background").animate({
	           left: '+=50%',
	           width: '50%'
       		});
       		$(".showcase_ro").css({ "left" : "0%" });
       		visted_right++;
       }else if(visted_left%2 == 0 && visted_right%2 == 0){
       		$("#right_arrow").fadeOut();
       		$(".background").animate({
	           left: '+=50%',
	           width: '50%'
       		});
       		$(".romenu").css({ "display" : "none" });
       		visted_right++;
       }
    });

    $(".sfmenu").click(function(){
    	$("#pop_sf").fadeIn();
    })
    $(".romenu").click(function(){
    	$("#pop_ro").fadeIn();
    })

    $(".popup").click(function(){
    	$(".popup").fadeOut();
    });
    
	

    document.getElementById("showcase_ro").onkeypress=function(){
    	var audio1 = document.createElement('audio');
    	audio1.setAttribute('src', 'sounds/'+Math.floor(Math.random()*10+1)+'.m4a');
	
    	audio1.play();
    };



});