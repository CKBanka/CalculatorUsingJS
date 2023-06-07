
let string="";
const buttons = document.querySelectorAll('.button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    if(event.target.textContent=="="){
      string=eval(string);
      document.querySelector(".input").value=string;
    }
    else if(event.target.textContent=="AC"){
      string="";
      document.querySelector(".input").value="";
    }
    else if(event.target.textContent=="b"){
      string=string.substring(0,string.length-1);
      document.querySelector(".input").value=string;
    }
    else{
      if(event.target.textContent=="x"){
        string=string+"*";
      }
      else{
      string=string+event.target.textContent;
      }
      document.querySelector(".input").value=string;
    }
  });
});

