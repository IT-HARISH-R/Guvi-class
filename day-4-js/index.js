// const arr = [1,2,3,4,5]
// console.log(arr);

// //arr methods
// console.log('....Array....')
// arr.push(10)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(5)
// console.log(arr)
// arr.shift()
// console.log(arr)

// function defultfunction(){
//     let name='dfunction: Harish'
//     return name
// }
//  console.log(defultfunction())
// let name1=defultfunction()
// console.log(name1)
// let name =()=>{
//     console.log("its me")
// }
// name()
// name()
// console.log(name)
// let arr=[1,2,3,4,5,6]
// let newar = arr.map((val)=>{
//     return val*2
// })
// console.log(newar)
// let studentData=[
//     {name:"Student1",batch:'FSD-WE-11'},
//     {name:"Student2",batch:'FSD-WE-22'},
//     {name:"Student3",batch:'FSD-WE-33'},
//     {name:"Student4",batch:'FSD-WE-44'}
// ]
// studentData.map((value)=>{
//     console.log(value.name)
// })

let studentData=[
    {name:"Student1",batch:'FSD-WE-11', mark: 35},
    {name:"Student2",batch:'FSD-WE-11', mark: 42},
    {name:"Student3",batch:'FSD-WE-11', mark: 25},
    {name:"Student4",batch:'FSD-WE-11', mark: 97}
]
let passStudent= studentData.filter((value)=>{
    return value.mark>=40
})
console.log(passStudent);