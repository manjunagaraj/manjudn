


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


/*
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

	
}*/






													$('#homemenu').click(function(){
														debugger;
															$('#homepage').show();
															$('#images').show();

															$('#aboutpage').hide();
															$('#socialmedia').hide();
															return false;
													});

													$('#aboutmenu').click(function(){
														debugger;
															$('#homepage').hide();
															$('#images').show();
															$('#socialmedia').hide();

															$('#aboutpage').show();
															return false;
													});




													$('#mediaicon').click(function(){
														debugger;
															$('#homepage').hide();
															$('#aboutpage').hide();
															$('#images').hide();

															$('#socialmedia').show();
															return false;
															});


													$('#bilgates').click(function(){
														$('#bil').show();
														$('#zuck').hide();
														$('#nar').hide();
														return false;
													});

														$('#zuckerberg').click(function(){
														$('#bil').hide();
														$('#zuck').show();
														$('#nar').hide();
														return false;
													});

													$('#narayan').click(function(){
														$('#bil').hide();
														$('#zuck').hide();
														$('#nar').show();
														return false;
													});
													
														


														


													




















