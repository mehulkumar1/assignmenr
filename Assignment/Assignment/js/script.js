$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
	$('.read-more').click(function(){
		$('#'+this.id).css("display","none");
		var id1 = $(this).next().attr('id');
		$('#'+id1).css("display","inline");
		
	});	
});
