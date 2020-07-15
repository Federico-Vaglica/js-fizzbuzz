
//for (var i=1; i<=100; i++){
//    if(i%3 == 0 && i%5 == 0) {
//        console.log('fizzbuzz');
//    } else if(i%3 == 0){
//        console.log('fizz')
//    } else if (i%5 == 0){
//        console.log('Buzz')
//    } else {
//        console.log(i);
//    }
//}


var fizzBuzz = "";

for (var i=1; i<=100; i++) {
    var fizzBuzz = "";

    if(i%3 == 0){fizzBuzz += 'Fizz'};
    if(i%5 == 0){fizzBuzz += 'Buzz'};
    if(fizzBuzz == "" ){fizzBuzz = i};

    console.log(fizzBuzz)
}



