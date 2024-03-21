#! /usr/bin/env node 
import inquirer from "inquirer";
const input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Kindly Enter the First Number",
});
const input3 = await inquirer.prompt({
    name: "Operator",
    type: "list",
    message: "kindly select the Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulous", "Exponential"]
});
const input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "Kindly Enter the Second Number",
});
// const input3 = await inquirer.prompt({
//     name:"Operator",
//     type:"list",
//     message:"kindly select the Operator",
//     choices:["Addition" ,"Subtraction","Multiplication","Division","Modulous","Exponential"]
// });
if (input3.Operator === "Addition") {
    console.log(`Afer Adding those of Two number your Result is = ${input1.num1 + input2.num2}`);
}
else if (input3.Operator === "Subtraction") {
    console.log(`Afer Subtracting of those Two number your Result is = ${input1.num1 - input2.num2}`);
}
else if (input3.Operator === "Multiplication") {
    console.log(`Afer Multiolication of those Two number your Result is = ${input1.num1 * input2.num2}`);
}
else if (input3.Operator === "Division") {
    if (input2.num2 === 0) {
        console.log("Can not Divide by zero");
    }
    else {
        console.log(`Afer Division of those Two number your Result is = ${input1.num1 / input2.num2}`);
    }
}
else if (input3.Operator === "Exponential") {
    console.log(`After Apply Exponent your Result is = ${input1.num1 ** input2.num2}`);
}
else if (input3.Operator === "Modulous") {
    console.log(`After Apply Modulous your Result is: ${input1.num1 % input2.num2}`);
}
else {
    console.log("Invalid Operator");
}
;
