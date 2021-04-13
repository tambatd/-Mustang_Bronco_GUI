
function validate(number){
    if( (number%3 == 0) && (number%5==0) ){
      return "MustangBronco";
    }
    else if(number%5 == 0){
      return "Bronco";
    }
    else if(number%3 == 0){
      return "Mustang";
    }
    return number;
  }

export default validate;
