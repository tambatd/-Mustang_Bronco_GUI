//
//  functions.swift
//  Example
//
//  Created by Deve on 4/14/21.
//

import Foundation
func validate(number: Int) -> String{
    if( (number%3 == 0) && (number%5==0) ){
      return "MustangBronco";
    }
    else if(number%5 == 0){
      return "Bronco";
    }
    else if(number%3 == 0){
      return "Mustang";
    }
    return String(number);
  }
