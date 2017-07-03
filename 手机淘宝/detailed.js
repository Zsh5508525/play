aa = false;
			bb = false;
			$(".size span").click(function(){
				if($(this).hasClass("on")){
					$(".size span").removeClass("on");
					$(".head-fr dl dd:last span:eq(0)").show();
					$(".已选 span:eq(0)").html("");
					aa = false;
					if(aa == false && bb == false){
						$(".已选").hide();
					}else if(aa == true && bb == false){
						$(".已选").show();
						$(".已选 span:eq(0)").html(a);
						$(".已选 span:eq(1)").html("");
					}else if(aa == false && bb == true){
						$(".head-fr dl dd:last").show();
						$(".head-fr dl dd:last span:eq(0)").show();
					}
				}else{
					$(".size span").removeClass("on");
					$(this).addClass("on");
					$(".head-fr dl dd:last span:eq(0)").hide();
					$(".已选").show();
					var a = $(this).html();
					$(".已选 span:eq(0)").html(a);
					aa = true;
					if(aa == true && bb == true){
						$(".head-fr dl dd:last").hide();
					}
				}
				
			})
			$(".color span").click(function(){
				if($(this).hasClass("on")){
					bb = false;
					$(".color span").removeClass("on");
					$(".head-fr dl dd:last span:eq(1)").show();
					$(".已选 span:eq(1)").html("");
					if(aa == true && bb == false){
						$(".head-fr dl dd:last").show();
						$(".head-fr dl dd:last span:eq(1)").show();
					}
					
				}else{
					$(".color span").removeClass("on");
					$(this).addClass("on");
					var b = $(this).html();
					$(".已选 span:eq(1)").html(b);
					$(".head-fr dl dd:last span:eq(1)").hide();
					$(".已选").show();
					bb = true;
					if(aa == true && bb == true){
						$(".head-fr dl dd:last").hide();
					}
				}
			})
