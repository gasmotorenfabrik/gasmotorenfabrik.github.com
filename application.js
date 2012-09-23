
$(document).ready(function(){
  $("ul#menu ul.sub").parent().append("<span></span>");

  $("ul#menu li span").hover(function() {
    $(this).parent().find("ul.sub").slideDown('fast').show();
	  $(this).siblings("a").addClass("subhover");
	
    $(this).parent().hover(function() {}, function(){
      $(this).parent().find("ul.sub").slideUp('fast', function() {
			  $(this).parent().find("a.subhover").removeClass("subhover");
		  });
    });
  });
});