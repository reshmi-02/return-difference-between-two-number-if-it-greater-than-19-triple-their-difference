var num1=parseInt(prompt("Enter the  value"))
var num2=19
document.write(`Given value=${num2}<br>`)
document.write(`User defined value=${num1}<br><br>`)
if(num1>19){
    let c=(num1-num2)
    let ans=c*3
    document.write(`diffrence between two number is ${c}<br>`)
    document.write(`User defined value is grater than 19 so triple of the diffrence is ${ans}`)
}
else{
    let c=(num2-num1)
    document.write(`diffrence between two number is ${c}`)
}