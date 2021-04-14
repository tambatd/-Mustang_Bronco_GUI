//
//  ContentView.swift
//  Example
//
//  Created by Deve on 4/13/21.
//

import SwiftUI





struct ContentView: View {
    @State var Temp = 0
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

   
    var body: some View {
        VStack{
        Text(validate(number: Temp)).padding()
            Text(String(Temp)).padding()
        
            Button(action: {Temp+=1}, label: {
                Text("+")
        })
            Button(action: {Temp-=1}, label: {
            Text("-")
        })        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
