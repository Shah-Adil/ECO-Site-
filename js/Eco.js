
// scroll add class .sticky start
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 100){
            $('header').addClass("sticky");
            $('.singel_pade_section').addClass("singel_minas");
            $('.login_section ').addClass("singel_minas");
        }else{
            $('header').removeClass("sticky");
            $('.login_section ').removeClass("singel_minas");
            $('.singel_pade_section').removeClass("singel_minas");
        }
    });
});


const cardContainer = document.querySelectorAll('.card_item');
const cardBtn = document.querySelectorAll('.remove');

cardBtn.forEach((items) =>
            items.addEventListener('click' , function() {
                cardContainer.forEach(con => {     
                    con.addEventListener('click' , function() {
                         con.classList.add('card-remove')
                    })

                })
            })
         
        )




const searchBox = document.querySelector(".serch_box");

function searchOpen() {
    searchBox.classList.toggle('serch_box_open')
}


// scroll add class .sticky end


// Register margin top start
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 0){
            $('.register_section').addClass(".register_top_margin");
        }
        else{
            $('.register_section').removeClass(".register_top_margin");
        }
    });
});
// Register margin top start

// nav bar stert
$(document).ready(function() {
    $(".container .fa-bars").click(function () {
        $(".header_right nav").css("left","0");       
    });
    $(".list .coros").click(function () {
        $(".header_right nav").css("left","-320px");       
    });
});
// nav bar end


$(document).ready(function() {
    $("nav .list li a").click(function () {
        $("nav .list li a").removeClass("action");
        $(this).addClass("action");        
    });
});



$("#user").click(function(){
    $(".login_acount").toggle(200);
});
// $(".x").click(function(){
//     $(".login_acount").css("display","none")
// });


// let btn = document.querySelectorAll('.btn');
// let item_box = document.querySelectorAll('.item_box');
// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener('click', function () {
//         for (let j = 0; j < btn.length; j++) {
//             btn[j].classList.remove(actives);
//         }
//         this.classList.add(actives);

//         let dataFilter = this.getAttribute('data-filter');
//         for (let k = 0; k < item_box.length; k++) {
//             item_box[k].classList.add('hide');
            
//             if (item_box[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
//                 item - box[k].classList.add('actives');
//             }
//         }
        
//     })
// }



$(document).ready(function(){


    $(".all_1").click(function(){
        $(".filterDiv").show(500);
    });

    $(".foods_1").click(function(){
        $(".foods").show(500);
        $(".jush").hide(500);
        $(".spices").hide(500);
        $(".Vegetables").hide(500);
        $(".fish").hide(500);

    });
    $(".fish_1").click(function(){
        $(".fish").show(500);
        $(".foods").hide(500);
        $(".jush").hide(500);
        $(".Vegetables").hide(500);
    });
    $(".Vegetables_1").click(function(){
        $(".Vegetables").show(500);
        $(".foods").hide(500);
        $(".jush").hide(500);
        $(".spices").hide(500);
        $(".fish").hide(500);

    });

    $(".jush_1").click(function(){
        $(".jush").show(500);
        $(".Vegetables").hide(500);
        $(".foods").hide(500);
        $(".spices").hide(500);
        $(".fish").hide(500);

    });

    /////=====  stap one =====//////

    // image_foods1 start
    $(".image_foods1").mouseenter(function(){
        $(".foods1_top").css("display", "none");
        $(".foods1_bottom").css("display", "block");
    });
    
    $(".image_foods1").mouseleave(function(){
        $(".foods1_top").css("display", "block");
        $(".foods1_bottom").css("display", "none");
    });

    // image_Vegetables1 start
    $(".image_Vegetables1").mouseenter(function(){
        $(".Vegetables1_top").css("display", "none");
        $(".Vegetables1_bottom").css("display", "block");
    });
    
    $(".image_Vegetables1").mouseleave(function(){
        $(".Vegetables1_top").css("display", "block");
        $(".Vegetables1_bottom").css("display", "none");
    });

     // image_jush1 start
    $(".image_jush1").mouseenter(function(){
        $(".jush1_top").css("display", "none");
        $(".jush1_bottom").css("display", "block");
    });
   
    $(".image_jush1").mouseleave(function(){
        $(".jush1_top").css("display", "block");
        $(".jush1_bottom").css("display", "none");
    });

     // image_fish1 start
    $(".image_fish1").mouseenter(function(){
        $(".fish1_top").css("display", "none");
        $(".fish1_bottom").css("display", "block");
    });
   
    $(".image_fish1").mouseleave(function(){
        $(".fish1_top").css("display", "block");
        $(".fish1_bottom").css("display", "none");
    });


    /////=====  stap two =====//////

    // image_foods2 start
    $(".image_foods2").mouseenter(function(){
        $(".foods2_top").css("display", "none");
        $(".foods2_bottom").css("display", "block");
    });
    
    $(".image_foods2").mouseleave(function(){
        $(".foods2_top").css("display", "block");
        $(".foods2_bottom").css("display", "none");
    });

    // image_Vegetables2 start
    $(".image_Vegetables2").mouseenter(function(){
        $(".Vegetables2_top").css("display", "none");
        $(".Vegetables2_bottom").css("display", "block");
    });
    
    $(".image_Vegetables2").mouseleave(function(){
        $(".Vegetables2_top").css("display", "block");
        $(".Vegetables2_bottom").css("display", "none");
    });

     // image_jush2 start
    $(".image_jush2").mouseenter(function(){
        $(".jush2_top").css("display", "none");
        $(".jush2_bottom").css("display", "block");
    });
   
    $(".image_jush2").mouseleave(function(){
        $(".jush2_top").css("display", "block");
        $(".jush2_bottom").css("display", "none");
    });

     // image_fish2 start
    $(".image_fish2").mouseenter(function(){
        $(".fish2_top").css("display", "none");
        $(".fish2_bottom").css("display", "block");
    });
   
    $(".image_fish2").mouseleave(function(){
        $(".fish2_top").css("display", "block");
        $(".fish2_bottom").css("display", "none");
    });
   
    /////=====  stap three =====//////

     // image_foods3 start
     $(".image_foods3").mouseenter(function(){
        $(".foods3_top").css("display", "none");
        $(".foods3_bottom").css("display", "block");
    });
    
    $(".image_foods3").mouseleave(function(){
        $(".foods3_top").css("display", "block");
        $(".foods3_bottom").css("display", "none");
    });

    // image_Vegetables3 start
    $(".image_Vegetables3").mouseenter(function(){
        $(".Vegetables3_top").css("display", "none");
        $(".Vegetables3_bottom").css("display", "block");
    });
    
    $(".image_Vegetables3").mouseleave(function(){
        $(".Vegetables3_top").css("display", "block");
        $(".Vegetables3_bottom").css("display", "none");
    });

     // image_jush3 start
    $(".image_jush3").mouseenter(function(){
        $(".jush3_top").css("display", "none");
        $(".jush3_bottom").css("display", "block");
    });
   
    $(".image_jush3").mouseleave(function(){
        $(".jush3_top").css("display", "block");
        $(".jush3_bottom").css("display", "none");
    });

     // image_fish3 start
    $(".image_fish3").mouseenter(function(){
        $(".fish3_top").css("display", "none");
        $(".fish3_bottom").css("display", "block");
    });
   
    $(".image_fish3").mouseleave(function(){
        $(".fish3_top").css("display", "block");
        $(".fish3_bottom").css("display", "none");
    });

    /////=====  stap four =====//////

     // image_foods4 start
     $(".image_foods4").mouseenter(function(){
        $(".foods4_top").css("display", "none");
        $(".foods4_bottom").css("display", "block");
    });
    
    $(".image_foods4").mouseleave(function(){
        $(".foods4_top").css("display", "block");
        $(".foods4_bottom").css("display", "none");
    });

    // image_Vegetables3 start
    $(".image_Vegetables4").mouseenter(function(){
        $(".Vegetables4_top").css("display", "none");
        $(".Vegetables4_bottom").css("display", "block");
    });
    
    $(".image_Vegetables4").mouseleave(function(){
        $(".Vegetables4_top").css("display", "block");
        $(".Vegetables4_bottom").css("display", "none");
    });

     // image_jush4 start
    $(".image_jush4").mouseenter(function(){
        $(".jush4_top").css("display", "none");
        $(".jush4_bottom").css("display", "block");
    });
   
    $(".image_jush4").mouseleave(function(){
        $(".jush4_top").css("display", "block");
        $(".jush4_bottom").css("display", "none");
    });

     // image_fish4 start
    $(".image_fish4").mouseenter(function(){
        $(".fish4_top").css("display", "none");
        $(".fish4_bottom").css("display", "block");
    });
   
    $(".image_fish4").mouseleave(function(){
        $(".fish4_top").css("display", "block");
        $(".fish4_bottom").css("display", "none");
    });


    /////=====  stap five =====//////

    // image_foods5 start
    $(".image_foods5").mouseenter(function(){
        $(".foods5_top").css("display", "none");
        $(".foods5_bottom").css("display", "block");
    });
    
    $(".image_foods5").mouseleave(function(){
        $(".foods5_top").css("display", "block");
        $(".foods5_bottom").css("display", "none");
    });

    // image_Vegetables5 start
    $(".image_Vegetables5").mouseenter(function(){
        $(".Vegetables5_top").css("display", "none");
        $(".Vegetables5_bottom").css("display", "block");
    });
    
    $(".image_Vegetables5").mouseleave(function(){
        $(".Vegetables5_top").css("display", "block");
        $(".Vegetables5_bottom").css("display", "none");
    });

     // image_jush4 start
    $(".image_jush5").mouseenter(function(){
        $(".jush5_top").css("display", "none");
        $(".jush5_bottom").css("display", "block");
    });
   
    $(".image_jush5").mouseleave(function(){
        $(".jush5_top").css("display", "block");
        $(".jush5_bottom").css("display", "none");
    });

     // image_fish5 start
    $(".image_fish5").mouseenter(function(){
        $(".fish5_top").css("display", "none");
        $(".fish5_bottom").css("display", "block");
    });
   
    $(".image_fish5").mouseleave(function(){
        $(".fish5_top").css("display", "block");
        $(".fish5_bottom").css("display", "none");
    });


 });

//  main_banner_section slider
$(document).ready(function(){
    $('.main_banner_section').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 100,
        // autoplay: true,

        });
});


//  date_slider slider
// $('.date_slider').slick({
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 100,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,

//     responsive: [
//         {
//         breakpoint: 1024,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//         }
//         },
//         {
//         breakpoint: 600,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//         }
//         },
//         {
//         breakpoint: 480,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//         }
//         }
//     ]
//     });

$('.date_slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
     responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    }
  ]
  });
//  review_slider slider
$('.review_slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll:1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    });

    //  review_slider slider
$('.logo_slider_1').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 10,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,

    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll:1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    });

    $( document ).ready(function() {
        // ==a===
        $("#box_a").mouseenter(function(){
            $("#boods_name_a").slideUp(500);
            $("#icon_a").slideUp(500);
            $("#number_a").slideUp(500);
            $("#icon_a").css("display", "block");
            $("#number_a").css("display", "block");
          });
          $("#box_a").mouseleave(function(){
            $("#boods_name_a").slideDown(500);
            $("#icon_a").slideDown(500);
            $("#number_a").slideDown(500);
            $("#icon_a").css("display", "none");
            $("#number_a").css("display", "none");
          });
            // ==b===
        $("#box_b").mouseenter(function(){
            $("#boods_name_b").slideUp(500);
            $("#icon_b").slideUp(500);
            $("#number_b").slideUp(500);
            $("#icon_b").css("display", "block");
            $("#number_b").css("display", "block");
          });
          $("#box_b").mouseleave(function(){
            $("#boods_name_b").slideDown(200);
            $("#icon_b").slideDown(200);
            $("#number_b").slideDown(200);
            $("#icon_b").css("display", "none");
            $("#number_b").css("display", "none");
          });

          // ==c===
        $("#box_c").mouseenter(function(){
            $("#boods_name_c").slideUp(500);
            $("#icon_c").slideUp(500);
            $("#number_c").slideUp(500);
            $("#icon_c").css("display", "block");
            $("#number_c").css("display", "block");
          });
          $("#box_c").mouseleave(function(){
            $("#boods_name_c").slideDown(200);
            $("#icon_c").slideDown(200);
            $("#number_c").slideDown(200);
            $("#icon_c").css("display", "none");
            $("#number_c").css("display", "none");
          });

          // ==a===
        $("#box_d").mouseenter(function(){
            $("#boods_name_d").slideUp(500);
            $("#icon_d").slideUp(500);
            $("#number_d").slideUp(500);
            $("#icon_d").css("display", "block");
            $("#number_d").css("display", "block");
          });
          $("#box_d").mouseleave(function(){
            $("#boods_name_d").slideDown(200);
            $("#icon_d").slideDown(200);
            $("#number_d").slideDown(200);
            $("#icon_d").css("display", "none");
            $("#number_d").css("display", "none");
          });

          // ==a===
        $("#box_e").mouseenter(function(){
            $("#boods_name_e").slideUp(500);
            $("#icon_e").slideUp(500);
            $("#number_e").slideUp(500);
            $("#icon_e").css("display", "block");
            $("#number_e").css("display", "block");
          });
          $("#box_e").mouseleave(function(){
            $("#boods_name_e").slideDown(200);
            $("#icon_e").slideDown(200);
            $("#number_e").slideDown(200);
            $("#icon_e").css("display", "none");
            $("#number_e").css("display", "none");
          });

          // ==a===
        $("#box_f").mouseenter(function(){
            $("#boods_name_f").slideUp(500);
            $("#icon_f").slideUp(500);
            $("#number_f").slideUp(500);
            $("#icon_f").css("display", "block");
            $("#number_f").css("display", "block");
          });
          $("#box_f").mouseleave(function(){
            $("#boods_name_f").slideDown(200);
            $("#icon_f").slideDown(200);
            $("#number_f").slideDown(200);
            $("#icon_f").css("display", "none");
            $("#number_f").css("display", "none");
          });

          // ==a===
        $("#box_g").mouseenter(function(){
            $("#boods_name_g").slideUp(500);
            $("#icon_g").slideUp(500);
            $("#number_g").slideUp(500);
            $("#icon_g").css("display", "block");
            $("#number_g").css("display", "block");
          });
          $("#box_g").mouseleave(function(){
            $("#boods_name_g").slideDown(200);
            $("#icon_g").slideDown(200);
            $("#number_g").slideDown(200);
            $("#icon_g").css("display", "none");
            $("#number_g").css("display", "none");
          });

          // ==h===
        $("#box_h").mouseenter(function(){
            $("#boods_name_h").slideUp(500);
            $("#icon_h").slideUp(500);
            $("#number_h").slideUp(500);
            $("#icon_h").css("display", "block");
            $("#number_h").css("display", "block");
          });
          $("#box_h").mouseleave(function(){
            $("#boods_name_h").slideDown(200);
            $("#icon_h").slideDown(200);
            $("#number_h").slideDown(200);
            $("#icon_h").css("display", "none");
            $("#number_h").css("display", "none");
          });

          // ==a===
        $("#box_i").mouseenter(function(){
            $("#boods_name_i").slideUp(500);
            $("#icon_i").slideUp(500);
            $("#number_i").slideUp(500);
            $("#icon_i").css("display", "block");
            $("#number_i").css("display", "block");
          });
          $("#box_i").mouseleave(function(){
            $("#boods_name_i").slideDown(200);
            $("#icon_i").slideDown(200);
            $("#number_i").slideDown(200);
            $("#icon_i").css("display", "none");
            $("#number_i").css("display", "none");
          });
          
          // ==j===
        $("#box_j").mouseenter(function(){
            $("#boods_name_j").slideUp(500);
            $("#icon_j").slideUp(500);
            $("#number_j").slideUp(500);
            $("#icon_j").css("display", "block");
            $("#number_j").css("display", "block");
          });
          $("#box_j").mouseleave(function(){
            $("#boods_name_j").slideDown(200);
            $("#icon_j").slideDown(200);
            $("#number_j").slideDown(200);
            $("#icon_j").css("display", "none");
            $("#number_j").css("display", "none");
          });
          // ==k===
        $("#box_k").mouseenter(function(){
            $("#boods_name_k").slideUp(500);
            $("#icon_k").slideUp(500);
            $("#number_k").slideUp(500);
            $("#icon_k").css("display", "block");
            $("#number_k").css("display", "block");
          });
          $("#box_k").mouseleave(function(){
            $("#boods_name_k").slideDown(200);
            $("#icon_k").slideDown(200);
            $("#number_k").slideDown(200);
            $("#icon_k").css("display", "none");
            $("#number_k").css("display", "none");
          });
            // ==l===
        $("#box_l").mouseenter(function(){
            $("#boods_name_l").slideUp(500);
            $("#icon_l").slideUp(500);
            $("#number_l").slideUp(500);
            $("#icon_l").css("display", "block");
            $("#number_l").css("display", "block");
          });
          $("#box_l").mouseleave(function(){
            $("#boods_name_l").slideDown(200);
            $("#icon_l").slideDown(200);
            $("#number_l").slideDown(200);
            $("#icon_l").css("display", "none");
            $("#number_l").css("display", "none");
          });
    });
    $( document ).ready(function() {
        // ==main_list===
        $("#Fruits_list").click(function(){
            $("#Fruits").toggle(100);
            $(".up").show(200);
            $(".down").hide(200);
          });
          $("#Vegetable_list").click(function(){
            $("#Vegetable").toggle(100);
          });
          $("#Foods_list").click(function(){
            $("#foods").toggle(100);
          });
          $("#Jusghs_list").click(function(){
            $("#jush").toggle(100);
          });
          

     });


//  =====================
//  add to card stert
//  =====================


function increament(incDec,prc,itm){
    var count = document.getElementById(incDec);
	var price = document.getElementById(prc);
	var item = document.getElementById(itm);
	var pr_ammount = document.getElementById("pr_ammount").innerHTML;
	// charge 
	var charge = document.getElementById("charge").innerHTML;
	// total ammoount
	var total_ammoount = document.getElementById("total_ammoount").innerHTML;
	
	
    if(count.value>=5){
        count.value=5;
        alert("only five products allow")
    }else{
        count.value++;
		var result = parseInt(price.innerHTML)+ parseInt(item.innerHTML);
		item.innerHTML = result;
		// for product ammount
		var total_product =  parseInt(price.innerHTML)+ parseInt(pr_ammount);
		document.getElementById("pr_ammount").innerHTML=total_product;

		// for total + cherge
		var Nweresult = total_product + parseInt(charge)
		document.getElementById("total_ammoount").innerHTML=Nweresult;


		var kupon_main_div = document.getElementById("kupon_main_div")
		if(total_ammoount>=200){
			kupon_main_div.style.display="block";
		}
    }
}
// fou minus button 
function decrement(incDec,prc,itm){
    var count = document.getElementById(incDec);
	var price = document.getElementById(prc);
	var item = document.getElementById(itm);
	//pr_ammount
	var pr_ammount = document.getElementById("pr_ammount").innerHTML;
	// charge 
	var charge = document.getElementById("charge").innerHTML;
	// total ammoount
	var total_ammoount = document.getElementById("total_ammoount").innerHTML;
	
    if(count.value<=0){
        count.value=0;
        alert("only minimam one products allow")
    }else{
        count.value--;
		var result = parseInt(item.innerHTML)- parseInt(price.innerHTML);
		item.innerHTML = result;
		
		// for product ammount
		var total_product =  parseInt(pr_ammount)- parseInt(price.innerHTML);
		document.getElementById("pr_ammount").innerHTML=total_product;

		// for total + cherge
		var Nweresult = total_product + parseInt(charge)
		document.getElementById("total_ammoount").innerHTML=Nweresult;
		
		
    }
}
	var kupon_main_div = document.getElementById("kupon_main_div")
	kupon_main_div.style.display="none";
	var applyBTN = document.getElementById("applyBTN");
	applyBTN.addEventListener('click', function(){
		var kuponInput= document.getElementById("kuponInput");
		var total_ammoount = document.getElementById("total_ammoount").innerHTML;

		if(kuponInput.value== 'FIZ_KHAN'){

			var total = parseInt(total_ammoount)-50;
			document.getElementById("total_ammoount").innerHTML=total;
			alert('Congratulation')
			kupon_main_div.style.display="none";
		}
		else{
			alert('Kupon noat match')
		}
	});


//  =====================
//  add to card end
//  =====================