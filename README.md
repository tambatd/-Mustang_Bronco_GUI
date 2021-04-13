# Mustang Bronco GUI 🚙
![image](https://raw.githubusercontent.com/tambatd/-Mustang_Bronco_GUI/master/React_Native/Assets/Visual/UI.png)

This is an example React Native app, to showcase a GUI for the 2021 Ford Bronco's temperature control app.

The top right box raises or lowers the temperature by 1, while the bottom box is used to type in a number.

*NOTE: YOU CAN TYPE IN ANY POSITIVE NUMBER INTO THE BOTTOM BOX FOR TESTING PURPOSES*
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
The app design is based off of the 2021 Ford Bronco’s User Interface.

I wanted to create something to simulate a realistic product, that incorporates the design philosophies of the Ford Bronco.

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

## Known Issues 
1. Bottom value does not update with top increment 
2. If a decimal point value is typed into the bottom box, the increment button will add one to the ending decimal value 

## License
[MIT](https://choosealicense.com/licenses/mit/)
