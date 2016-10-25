


														var index = 0;
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
	setTimeout(slideShow, 4000);

	
}





													$('#homemenu').click(function(){
														debugger;
															$('#homepage').show();
															$('#aboutpage').hide();
															return false;
													});

													$('#aboutmenu').click(function(){
														debugger;
															$('#homepage').hide();
															$('#aboutpage').show();
															return false;
													});

													$('.bilgates').click(function(){
														$('.bilgatesText').show();
														$('.zuckerbergText').hide();
														$('.narayanText').hide();
														return false;
													});

														$('.zuckerberg').click(function(){
														$('.bilgatesText').hide();
														$('.zuckerbergText').show();
														$('.narayanText').hide();
														return false;
													});

													$('.narayan').click(function(){
														$('.bilgatesText').hide();
														$('.zuckerbergText').hide();
														$('.narayanText').show();
														return false;
													});
													
														


														


													




















