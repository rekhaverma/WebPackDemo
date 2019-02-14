// import _ from 'lodash';
import './style.css';

 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }
// import Icon from './bag.jpg';
import printMe from './print';
import giveMeSomeInput from './input';
import { cube } from './math.js';
function component() {
    // let element = document.createElement('div');
    var element = document.createElement('pre');
    var btn = document.createElement('button');
  
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = [
           'Hello webpack!',
           '5 cubed is equal to ' + cube(5)
         ].join('\n\n');
    element.classList.add('hello');

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    var input = document.createElement('input');
    input.onchange = giveMeSomeInput;
    element.appendChild(input);
    // Add the image to our existing div.
    //  var myIcon = new Image();
    //  myIcon.src = Icon;

    //  element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());
 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }