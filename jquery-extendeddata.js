!function ($) {
	$.fn.extendedData = function (asd) { 
		var $this = $(this), result = {}, parents = $.makeArray($this.parents()).reverse();
		
		$.each(parents, function (i, o) {
			$.extend(result, $(o).data());
		});

		$.extend(result, $this.data());
		
		return result;
	}
}(window.jQuery);
