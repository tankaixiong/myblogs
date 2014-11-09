function indexFun(){
	    var divBox_width=$('.divBox').width();
		var liBox1=parseInt(divBox_width/360);
		switch(liBox1){
			case 1:
			indexFun1();
			break;
			case 2:
			indexFun2();
			break;
			case 3:
			indexFun3();
			break;
			case 4:
			indexFun3();
			break;
			default:
			}
	}
function indexFun3(){
	var divBox_width=$('.divBox').width();
	if(divBox_width-3*360>=180&&divBox_width-3*360<360){
			$('#liBox1_3').before($('#liBox2_0')); 
			$('#liBox1_3').before($('#liBox2_1')); 
			}else{
				$('#liBox2_2').before($('#liBox2_0')); 
			    $('#liBox2_2').before($('#liBox2_1')); 
				}
	}	
function indexFun2(){
	var divBox_width=$('.divBox').width();
	if(divBox_width-2*360>=180){
			$('#liBox1_2').before($('#liBox2_0')); 
			$('#liBox1_2').before($('#liBox2_1')); 
			}else{
				$('#liBox3_0').before($('#liBox2_5'));
				$('#liBox2_5').before($('#liBox2_4'));
				$('#liBox2_4').before($('#liBox2_3'));
				$('#liBox2_3').before($('#liBox2_2'));
				$('#liBox2_2').before($('#liBox2_1'));
				$('#liBox2_1').before($('#liBox2_0'));
				}
	}
function indexFun1(){
	var divBox_width=$('.divBox').width();
	if(divBox_width-1*360>=180){
			$('#liBox1_1').before($('#liBox2_0')); 
	        $('#liBox1_1').before($('#liBox2_1')); 
	        $('#liBox1_2').before($('#liBox2_2')); 
	        $('#liBox1_2').before($('#liBox2_3'));
	        $('#liBox1_3').before($('#liBox2_4')); 
	        $('#liBox1_3').before($('#liBox2_5')); 
			}else{
				$('#liBox3_0').before($('#liBox2_5'));
				$('#liBox2_5').before($('#liBox2_4'));
				$('#liBox2_4').before($('#liBox2_3'));
				$('#liBox2_3').before($('#liBox2_2'));
				$('#liBox2_2').before($('#liBox2_1'));
				$('#liBox2_1').before($('#liBox2_0'));
				}
	}		