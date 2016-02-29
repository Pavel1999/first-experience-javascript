$(document).ready(function() {
	$('.menu-trigger').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			list = $this.closest('.menu-list'),
			item = $this.closest('.menu-item'),
			items = list.find('.menu-item'),
			content = item.find('.menu-inner'),
			otherContent = list.find('.menu-inner'),
			href = item.find('.menu-trigger'),
			hrefs = list.find('.menu-item'),
			dropSpeed = 600;

			if (!item.hasClass('active')) {

				items.removeClass('active');
				item.addClass('active');


				otherContent.stop(true, true).slideUp(dropSpeed);
				content.stop(true, true).slideDown(dropSpeed);

			} else{
				content.stop(true, true).slideUp(dropSpeed);
				item.stop(true, true).removeClass('active');
				
			}

			
	});
});