'use strict'

function abbrevName(name){
let newName = name.toUpperCase().split(" ");
    return `${newName[0][0]}.${newName[1][0]}`;

}
