

    $(document).ready(function () {
// Type JQuery under this function


        // $('selector').action() it it a syntax to perform any task on ony line on HTML
        //$ sign is a shortcut of a jQuery


/* There are three main types of selectors
    1. element selector
    2. id selector
    3. class selector
    */

    
// 1. element selector:



        //In this p represents to perform action on all document when you press on any line or word in HTML Page
        $('p').click(function () {
            console.log("You clicked on p",this);

            //It hides the complete document when you click on any line
            //$('p').hide();
            
            
        }); // do this when click on

//2. id selector example:

// In this we provide the id of any document to perform operation on in when we click
$('#2').click(function (){
console.log("You clicked on p",this);

});

// 3. class selector example:
$('.odd').click(function(){
    console.log("You clicked on p",this)
});

//Other Selectors

//It clicks the perticular line or word on which you clicked
/* $(this).click(function(){
     console.log("You clicked on p",this)
 });
 */


 //It clicks on all documents 
/*$('*').click(function(){
    console.log("You clicked on p",this)
});
*/

//It clicks on first paragragh
/*$('p:first').click(function(){
    console.log("You clicked on p",this)
});
*/




    })
