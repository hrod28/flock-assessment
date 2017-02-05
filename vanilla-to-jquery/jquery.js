//The following example is "onClick" in vanilla javascript
document.getElementById("myBasic").onclick = function() {
             alert("testString");
           };

//The following is example of bind to attach a handler to an event for the elements
$( "#foo" ).bind( "click", function() {
  alert( "User clicked on 'foo.'" );
});
//In vanilla
document.getElementById("foo").bind("click", function(){
  .....
});
