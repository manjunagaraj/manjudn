


/*var index = 0;
slideShow();

function slideShow(){
	
	var slide1=document.getElementsByClassName("slideimage");
	for(var i=0;i<slide1.length;i++){
		slide1[i].style.display="none";


	}

	
	var slide2=document.getElementsByClassName("slideimage");
	
	if(index+1>slide1.length){
		index=0;
	}

	slide2[index].style.display="block";
	
	index++;
	setTimeout(slideShow, 2000);

	
}*/






// $('#homemenu').click(function(){
// 	debugger;
// 	$('#homepage').show();
// 	$('#aboutpage').hide();
// 	$('#image').hide();
// 	$('#button').hide();
// 	$('#imags').hide();

// 	return false;
// });

// $('#aboutmenu').click(function(){
// 	debugger;
// 	$('#homepage').hide();
// 	$('#aboutpage').show();
// 	$('#image').show();
// 	$('#button').show();
// 	$('#imags').show();
// 	return false;
// });



$(".arrow").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

























