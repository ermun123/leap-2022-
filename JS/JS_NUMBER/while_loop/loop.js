console.log(`10 hurtelh natural too`)

let i 
let a = 10;
let b = 100;
for(i=1 ; i<=a; i++){
    console.log(i)
}

console.log(`10 hurtelh sondgoi toonuud`)

for(i=1; i<=a; i++){
    if(i % 2 != 0  ){
        console.log(i)
    }
}

console.log(`10 hurtelh tegsh toonuud`)

for(i=1; i<=a; i++){
    if(i % 2 == 0  ){
        console.log(i)
    }
}
console.log(`100 hurtelh  toonuudiin niilber`)

let sum = 0
for(i=1 ; i<=b; i++){
    sum += i
}
console.log(sum)

console.log(`N hurtelh natural toonii niilber `)
let natural = '';
for (let i = 1; i <= natural; i++) {
    sum += i;
}

console.log(`anhnii too mun eseh`)
let too = 11;
let isPrime = true;
if (too === 1) {
    console.log("1 ni anhnii too bish yumaaa");
}else if(too > 1){
    for(i = 2; i < too; i++){
        if(too%i==0){
            isPrime = false;
            break
        }
    }
    if(isPrime){
        console.log(`${too} ni anhnii too mun`)
    }else{
        console.log(`${too} ni anhnii too bish`)
    }
}else{
    console.log(`${too} anhnii too bish`)
}

console.log(`ugugdsun interval dahi anhnii too mun eseh`)
const lowerNumber = 13;
const higherNumber = 71;

for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

console.log(`n toonii factorial`)
fac = 3;
if (fac === 0) {
    console.log(`${fac} toonii factorial ni  1.`);
}

else {
    let d = 1;
    for (i = 1; i <= number; i++) {
        d *= i;
    }
    console.log(` ${number} toonii factorial ni  ${d}.`);
}

console.log(`ugugdsun toonii tsifriin niilber`)
sum = 0 ;
let value = 2588;
while(value){
    sum += value % 10
    value = Math.floor(value/10);
}
console.log(sum)

console.log(`N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич`)
sum=0;
for (i=1; i<=100; i+=2){
  sum=sum+i;
}
console.log(sum)

console.log(`N хүртэлх тооны tegsh тоо хэвлэх болон түүний нийлбэрийг олох программ бич`)

sum=0;
for (i=2; i<=100; i+=2){
  sum=sum+i;
}
console.log(sum)
let rev = 0;
let num = 123;
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

console.log("Reverse number : "+rev);

console.log(`Өгөдсөн тооны цифрүүдийг үгээр хэвлэх программ бич`)
let number = new Array();
let tostr