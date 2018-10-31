// Menu Color Change
$(function() {	
//Menu Tab
// Remove Blue, so hover effect can happen across all three choices
// Readd blue if page is not changed
if($('a').hasClass('active_tab')){
	$('#tabs').mouseover( function(){
	$('a').removeClass('active_tab');
	});
	$('#tabs').mouseout( function(){
		//Is What page
		if(window.location.href.indexOf("index.html") > -1 ) {
        $('#whatTab').addClass('active_tab');
		} 
		// Is How Page
		else if(window.location.href.indexOf("how.html") > -1 ){
        $('#howTab').addClass('active_tab');
		}
		//Is Who Page
		else if(window.location.href.indexOf("who.html") > -1 ){
        $('#whoTab').addClass('active_tab');
		}
		else {
				console.log("Wrong href");
			}
		}
		);
	
} else {
		console.log("Has no class");
	}
});

//https://jsfiddle.net/cse_tushar/Dxtyu/141/ adapted
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#anchorLinks a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#anchorLinks a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


// FORM VALIDATION
	
$("form").ready(function() {

// In-Line Validation
$( "#email" ).focusout(function() {
    var email = $('#email').val();
	function isValidEmailAddress(email) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
	}
	
	if( !isValidEmailAddress( email ) ) { 
		$(".erroremail").css("display", "block");
		$("#email").css("background-color", "#FF3F3F");
	}
	
	else {
		$(".erroremail").css("display", "none");
		$("#email").css("background-color", "#FFF");
	}
	
});

$( "#enquiry" ).focusout(function() {
if( $("#enquiry").val() === "" ) { 
		$(".errorenquiry").css("display", "block");
		$("#enquiry").css("background-color", "#FF3F3F");
	}
	
	else {
		$(".errorenquiry").css("display", "none");
		$("#enquiry").css("background-color", "#FFF");
	}
});

$( "#message" ).focusout(function() {
if( $("#message").val().length < 20 ) { 
		$(".errorsubmit").css("display", "block");
		$("#message").css("background-color", "#FF3F3F");
	}
	
	else {
		$(".errorsubmit").css("display", "none");
		$("#message").css("background-color", "#FFF");
	}
});
	
// Validation
	
$("#submit-button").click( function (){
	if ($("#message").val().length < 20 ) // Repeats  check on Submission
	  { 
		 $(".errorsubmit").css("display", "block");  // Shows In-Line Error for UX
		$("#message").css("background-color", "#FF3F3F"); //Shows In-Line Error for UX
		  return false ; // Disables Submit
	  } else if ($("#enquiry").val() === "") {
		$(".errorenquiry").css("display", "block");
		$("#enquiry").css("background-color", "#FF3F3F");
		  return false;
	  } else if ($(".erroremail").is(":visible") || $("#email").val() === "")  // Validates Email, did they trip inline validation, or did they skip it?
	  {
		 $(".erroremail").css("display", "block");
		 $("#email").css("background-color", "#FF3F3F");
		  return false;
	  } 
	  // Checks to see if a bot filled in the hidden form that users cant see
		else if ($(".bots").val().length > 0)
	  {
		  return false;	
	  }
		else
	  {
		  return true;
	  }
	
});
	
}); // end ready
