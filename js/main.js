const boxContainer = document.getElementById('box-container');

for(i = 1; i <= 100; i++){

    const boxElement = document.createElement('div');
    boxElement.classList.add('box');
    boxContainer.append(boxElement);

   if(i % 15 == 0){
    boxElement.innerText = 'FizzBuzz';
    boxElement.style.backgroundColor = "rgb(234,44,92)";
    
   } else if(i % 5 == 0){
    boxElement.innerText = 'Buzz';
    boxElement.style.backgroundColor ="rgb(254,201,84)";
   } else if(i % 3 == 0){
    boxElement.innerText = 'Fizz'
    boxElement.style.backgroundColor ="rgb(30,209,143)";
   } else{
    boxElement.innerText = i;
   } 
}

