
let body  = document.querySelector('body');
console.log(body);
console.log("Hai");

// body.addEventListener('mousemove',function(event){
//   let mousex = event.clientX; // Gets Mouse X
//   let mousey = event.clientY; // Gets Mouse Y
//   let obj  = document.querySelector('#main');

//   obj.style.left = mousex+100+'px';
//   obj.style.top = mousey+100+'px';


// })

function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
   x= (x * -1/2)+300;
   y= (y * -1/3)+300;
  let obj  = document.querySelector('#dronebox');
  obj.style.left = x+'px'
  obj.style.top = y+'px'; 
}

// function clearCoor() {
//   document.getElementById("demo").innerHTML = "";
// }
