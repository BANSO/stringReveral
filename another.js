//Assigning a name to read the input
var Rstring = document.getElementById('Rstring');
//Adding an addEventListener to input
Rstring.addEventListener("input", reverse = (event) =>{
   var text = event.target.value;
     let newArr='';
     let lengthOfResult = text.length;
     //Iterating values starting from the last alphabet
     for (let i = lengthOfResult-1; i >=0; i--) {
       newArr +=text[i];
     }
    //
    //Assigning a name to the click button
    var click = document.getElementById('botton');
    click.addEventListener('click',myFunction)
      //A function to display the the value of newArr 
      function myFunction(){
      document.getElementById('toReverse').innerHTML =newArr;
    }
    // document.getElementById('toReverse').innerHTML = newArr;
});
