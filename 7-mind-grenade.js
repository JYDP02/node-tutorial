var num1 = 10;
var num2 = 12;

var sum = () => {
    console.log(`sum is: ${num1 + num2}`);
};

sum();

//should we not require to export this module?
//node exports it