$(document).ready(function() {
 //
 // add your jQuery code here
$("button").mouseenter(function(){
 $("button").removeClass("makeRed").addClass("makeBorder")
})

$("button").mouseleave(function(){
 $("button").removeClass("makeBorder").addClass("makeRed")
})

$("button").click(function(){
 $("p").slideToggle()
 
})



}); 