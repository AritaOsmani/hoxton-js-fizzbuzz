
for(let i = 1; i <= 840; i++){

        if(i % 840 === 0){    //Divisible by 3 5 7 and 8
            console.log("FizzBuzzFishBus");
        }
        else if(i % 105 === 0){ // Divisible by 3 5 and 7
            console.log("FizzBuzzFish");
        }
        else if(i % 56 === 0){ //Divisible by 7 and 8
            console.log("FishBus");
        }
        else if(i % 24 === 0){  //Divisible by 3 and 8
            console.log("FizzBus");
        }
        else if( i % 21 === 0){ //Divisible by 3 and 7
            console.log("FizzFish");
        }
        else if(i % 15 === 0){ //Divisible by 3 and 5
        console.log("FizzBuzz");
        }
        else if(i % 3 === 0){
        console.log("Fizz");
        }
        else if(i % 5 === 0){
        console.log("Buzz");
            }
        
        else if(i % 7 === 0){
        console.log("Fish");
        }
        else if(i % 8 === 0){
        console.log("Bus");
            }
        else{
            console.log(i);
        }
    
    }