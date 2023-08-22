function printMessage(){
	console.log("you clicked a button")
}

function anotherMessage(){
	console.log("you clicked the second button")
}


const button = document.querySelector('button');
button.addEventListener('mouseover', printMessage);

const button2 = document.querySelector('button');
button2.addEventListener('mouseover', anotherMessage)

//1. grab the element, what you want an event to happen with
//2. Add the event listener - which function are you going to call?