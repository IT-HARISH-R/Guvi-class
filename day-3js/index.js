// console.log('Hello Harish')
// function hari(c,d) {
//     let a = 'harish'
//     console.log(a)
//     console.log(c+d)

// }
// hari();
// hari();
// hari(5,5);

// function listFunction(){
//     console.log('step 1')
//     console.log('step 2')
//     console.log('step 3')
//     console.log('step 4')
//     console.log('step 5')
//     console.log("................")
// }
// listFunction();
// listFunction();
// listFunction();

// function stepsToRunALoop(){
//     console.log('need in for loop')
//     console.log('initialize (let i=0;) condition(i<=5;) increment(i++;){')
//     console.log("}")
// }
// stepsToRunALoop()
// stepsToRunALoop()
// stepsToRunALoop()


// let num1 = 15;
// let num2 = 16;

// function sumOfNumber(){
//     let result = num1+num2;
//     console.log(result)
// }
// function divOfNumber(){
//     let result = num1/num2;
//     console.log(result);
// }
// function subOfNumber(){
//     let result = num1-num2;
//     console.log(result);
// }
// function mulOfNumber(){
//     let result = num1*num2;
//     console.log(result);
// }
// function modOfNumber(){
//     let result = num1 % num2;
//     console.log(result);
// }
// sumOfNumber();
// subOfNumber();
// mulOfNumber();
// divOfNumber();
// modOfNumber();

// let a=2;
// if(a%2==0){
//     console.log('even')
// }

// function calculator(op,num1,num2){
//     if(num1 && num2){
//         if (op=='sum'){
//             console.log(`sum:${num1+num2}`)
//         }else if(op=="div"){
//             console.log(`div:${num1/num2}`)
    
//         }else if(op=="mul"){
//             console.log(`mul:${num1*num2}`)
    
//         }
//         else if(op=="sub"){
//             console.log(`sub:${num1-num2}`)
    
//         }else{
//             console.log(`Please provide proper operation`)
//         }
//     }else(
//         console.log('enter the number')
//     )
// }

// calculator("sum",5 )
// calculator("sum",5,5)
// calculator("sub",5,5)
// calculator("mul",5,5)
// calculator("div",5,5)

// function calculatorSwitch(op,num1,num2){
//         if(num1 && num2){
//             switch(op){
//                 case 'sum':
//                     console.log(`sum:${num1+num2}`)
//                     break
//                 case 'sub':
//                     console.log(`sub:${num1-num2}`)
//                     break

//                 case 'mul':
//                     console.log(`mul:${num1*num2}`)
//                     break

//                 case 'div':
//                     console.log(`div:${num1/num2}`)
//                     break

//                 default:
//                     console.log(`Please provide proper operation`)
//             }
//         }else(
//             console.log('enter the number')
//         )
//     }
    
//     calculatorSwitch("sum",5,5)
//     calculatorSwitch("sub",5,5)
//     calculatorSwitch("mul",5,5)
//     calculatorSwitch("div",5,5)
//     calculatorSwitch("sum",5 )
//     calculatorSwitch("",5,5 )

// while 
let i=0
while(i<5){
    console.log(i)
    i++;
}

// do while 
// let j=0
// do{
//     console.log("do",j)
//     j++
// }while(j<5){
//     console.log(j)
// }

let name =()=>{
    console.log("its me")
}
name()
name()
console.log(name)