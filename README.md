# Mustang Bronco GUI 🚙
![image](https://github.com/tambatd/-Mustang_Bronco_GUI/blob/master/Assets/Visual/UI.png?raw=true)

This is an example GUI for a Ford Bronco temperature control app 

## App logic
The algorithm to decide which word gets printed out can be found in logic.js

```Javascript
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
```
## App Design
The app design is based off of the 2021 Ford Bronco’s User Interface
![image](https://github.com/tambatd/-Mustang_Bronco_GUI/blob/master/Assets/Visual/f2572ce2-8935-41ac-938a-0ffa0b757aa9-ebe5ea1006755895f0e497bb2703-1.jpg?raw=true)

## Installation
Usage of this app requires NPM, Node, and the EXPO client

### Windows

NPM and Node can be found here:
https://www.npmjs.com/get-npm

### Mac OS

Node and NPM installation can be found here
https://treehouse.github.io/installation-guides/mac/node-mac.html

After successfully installing node, type the following in your terminal

```
npm install -g expo-cli
```

Then after successfully installing the expo cli, navigate to the codes folder and type

```
npm install
```
This should install all the NPM modules required to use this app.
If done correctly, the app should start on your local network 🎉


## Usage
To start the app locally, you must navigate to the project directory, and type
```
expo start 
```

After you have installed all the necessary components, all you need to do is install the expo ios app and launch the app from the app! 

If you're using Mac OS and have XCode installed, you should be able to launch this app via emulation. 


## License
[MIT](https://choosealicense.com/licenses/mit/)
