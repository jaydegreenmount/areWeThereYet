console.log("Print all numbers between -10 and 19");

var count = -10;

while(count < 20) {
	console.log(count);
	count++;
}

console.log("Print all even numbers between 10 and 40");

var count = 10;

while(count <= 40) {
	console.log(count);
	count+=2;
}

console.log("Print all odd numbers between 300 and 333");

var count = 300;

while(count <= 333) {
	// this is saying NOT even numbers
	if(count % 2 !== 0) {
	console.log(count);
	}
	count+=1;
}

console.log("Print all numbers divisble by 5 and 3 between5 and 50");

var count = 5;

while(count <= 50) {
	if(count % 5 === 0 && count % 3 === 0) {
	console.log(count);
	}
	count+=1;
}