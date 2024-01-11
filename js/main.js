const boxContainer = document.getElementById('box-container');

for(i = 1; i <= 100; i++){

    const boxElement = document.createElement('div');
    boxElement.classList.add('box');
    boxContainer.append(boxElement);

    
   if(i % 15 == 0){
    boxElement.innerText = 'FizzBuzz';
   } else if(i % 5 == 0){
    boxElement.innerText = 'Buzz';
   } else if(i % 3 == 0){
    boxElement.innerText = 'Fizz'
   } else{
    boxElement.innerText = i;
   }

   
    
}

