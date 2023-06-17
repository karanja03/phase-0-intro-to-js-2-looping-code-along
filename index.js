let theNames = ['Guadalupe','Ollie','Aki'];
let outPutMessages = [];


function writeCards(theNames, eventName){
    for(let a=0; a<theNames.length; a++){
        let message=`Thank you, ${theNames[a]}, for the wonderful ${eventName} gift!`;
        outPutMessages.push(message);
        
    }
    return outPutMessages;
}
console.log(message);



function countDown(posNumber) {
    while (posNumber >= 0) {
      console.log(posNumber);
      posNumber--;
    }
  }