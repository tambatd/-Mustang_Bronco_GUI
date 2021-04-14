//
//  ContentView.swift
//  Example
//
//  Created by Deve on 4/13/21.
//

import SwiftUI





struct ContentView: View {
    @State var Temp = 0
    

   
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
