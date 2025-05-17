//instead of writting document.etc etc and so on we can simply write jQuery or a simple $ sign
//code - $("h1"). 
//manipulate Style with jquery
// $("h1").addClass("big-titel");
//manipulating Text with jquery 
//$("button").text("Don't Click");
//for getting the attribute
// console.log($("img").attr("src"));
// for set the value of the attribute
// $("a").attr("href","https://www.google.com");
//adding eventListener to our Html elemenmt using jQuery
// $("h1").click(function(){
//     $("h1").css("color","purple");
// });
// $("button").click(function(){
//         $("h1").css("color","purple");
//     });
// $("input").keypress(function(event){
//     console.log(event.key);
// });
// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });
// $("h1").on("mouseover",function(){
//         $("h1").css("color","purple");
//     }); 
//Adding Element with jQery
// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");
// to remove
//$("button").remove();
// Website Animations
// $("button").on("click",function(){
//             $("h1").hide();//for showing use show method
//         });
// $("button").on("click",function(){
//     $("h1").toggle();
// });
// $("button").on("click",function(){
//     $("h1").fadeOut();//opposite fadeIn
// });
// $("button").on("click",function(){
//     $("h1").fadeToggle();
// });
// $("button").on("click",function(){
//     $("h1").slideToggle();
// });
// $("button").on("click",function(){
//     $("h1").slideUp();//slidDown
// });
//For some cusotm animation also known as custom CSS
// $("button").on("click",function(){
//     $("h1").animate({opacity: 0.5});//in between {} you can only add css rule which have only numeric value
// });
// $("button").on("click",function(){
//     $("h1").animate({margin: 20});
// });
// $("button").on("click",function(){
//     $("h1").slideUp().slideDown().animate({opacity: 0.5});
// });