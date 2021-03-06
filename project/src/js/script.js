$(document).ready(function () {
	$.getJSON("data/urls.json", function(data) {
		data.sort(function (a, b) {
 			return b.hits - a.hits;
 		});
		
		var total_hits = 0;
		for(var i = 0; i < data.length; i++) {
			if(i < 5) {
				$(".ranking").append("<div class='row'><div class='col-sm-8'><p class='ranking-link'><a href='"+data[i].shortUrl+"' target='_blank'>"+data[i].shortUrl+"</a></p></div><div class='col-sm-4'><p class='ranking-clicks'>"+data[i].hits+"</p></div></div>");
			}
			total_hits += data[i].hits;
 		}
		
		$("#total-hits").val(total_hits);
	});
	
 	$(".btn-shortener").on("click",function () {
		$(".btn-shortener span").fadeOut(function() {
			$(".btn-shortener span").text("COPIAR").fadeIn();
		});
	
 		$(".txt-shortener").fadeOut(function () {
 			$(".txt-shortener").css("color", "#FFFFFF");
 			$(".txt-shortener").val("http://chr.dc/xyzxyz").fadeIn();
 		});
 	});
 }); 

