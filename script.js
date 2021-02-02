var a = 2;
var x = 1 + (a *= 2);

console.log(x);

//если a и b положительные, вывести их разность;
function div(a,b){
    return a - b;
}
console.log('div ' + div(5,6));

//если а и b отрицательные, вывести их произведение;
function mut(a,b){
    return a * b;
}
console.log('mut ' + mut(-5,-6));

//если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. 
function sum(a,b){
    return a + b;
}
console.log('sum ' + sum(-5,6));

//### 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел 
//от a до 15. 

function print(a){
    while(a < 16){
        console.log(a);
        a++;
    }
}

print(10);
//### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
//Обязательно использовать оператор return. 
//реализовано в первом пункте

//### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
//где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
//В зависимости от переданного значения операции выполнить одну из арифметических операций 
//(использовать функции из пункта 3) и вернуть полученное значение (использовать switch). 

function count(arg1,arg2, operator){
    let  result = 0;
    switch (operator){
        case '+':
            result = arg1 + arg2;
            break;
        case '-':
            result = arg1 - arg2; 
            break;
        case '*':
            result = arg1 * arg2;    
            break;
        case '/':
            result = arg1 / arg2;  
            break
    }
    return result; 
}

console.log('+ ' + count(1,2,'+'));
console.log('- ' + count(1,2,'-'));
console.log('* ' + count(4,2,'*'));
console.log('/ ' + count(1,2,'/'));

//### 7) *Сравнить null и 0. Попробуйте объяснить результат. 

console.log(0 === null);
//0 - число
//null - ну существует объекта

//### 8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), 
//где val – заданное число, pow – степень.

function power(val,pow){
    if(pow > 0){
        return val * power(val,pow-1);
    } else{
        return 1;
    }
}

console.log(power(3,4));