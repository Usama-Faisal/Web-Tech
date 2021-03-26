//ON Method is provide us to use different events and selectors on any content


$(document).ready(function () {


$('p').on({

click:function (e) { 
    console.log("You Click on the content");
    
},


mouseenter: function () { 
    console.log("You are on the content");
},


mouseleave:function () { 
    console.log("You leave the content");   
}
  

    




});











});