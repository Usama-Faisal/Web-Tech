/*Types Of Events In jQuery
    
        1. Mouse Events: click , dbclick , mouseenter , mouseleave
    
        2. Keyboard Events : keypress, keydown, MediakeyStatuMap

        3. Form Events : submit , change, focus, blur

        4. document/Window Events : load , realize , scroll , unload 
       
        */

$(document).ready(function(){

    // 1. Mouse Events Example:
    
    //a. Click:
     $('p').click(function () { 
        console.log("Click on p",this);
        
    });

    // b. dblclick:
    $("p").dblclick(function(){
        console.log("The paragraph was double-clicked");
      });

    //c. mouseenter:
        $('p').mouseenter(function () { 
            console.log("Enter on p",this)
        });
    
    // d. mouseleave
        $('p').mouseleave(function () { 
            console.log("Your cursor is not on the text",this)
        });

        // e. hover
          $('p').hover(function () {
                  console.log("Your mouse Is over the text")
                  
              }, function () {
                console.log("Your mouse Is out of the text")
                  
              }
          );






















})
