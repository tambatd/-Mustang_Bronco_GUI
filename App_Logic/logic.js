
    console.log(validate(2));
    console.log(validate(6));
    console.log(validate(10));
    console.log(validate(15));
  
  function validate(number){
    if( (number%3 == 0) && (number%5==0) ){
      return "MustangBronco "+number;
    }
    else if(number%5 == 0){
      return "Bronco "+number;
    }
    else if(number%3 == 0){
      return "Mustang "+number;
    }
    return number;
  }