const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const foods = [
    {
        name: '🍔',
        price: 30,
        amount: 10,
    },
    {
        name: '🍨',
        price: 20,
        amount: 3,
    },
    {
        name: '🍿',
        price: 10,
        amount: 5,
    },
    {
        name: '🍵',
        price: 5,
        amount: 9,
    },
]
suite
    .add("[Suite:1] Calculate sum using ForEach fn", function ()
    {
        let sum = 0
        foods.forEach((food) =>
        {
            sum += food.price * food.amount
        })
    })
    .add("[Suite:2] Calculate sum using Reduce fn", function ()
    {
        let sum = foods.reduce((res, food) => res += food.price * food.amount, 0)

    })
    .on('cycle', function (event)
    {
        console.log(String(event.target))
    })
    .on('complete', function ()
    {
        console.log(`The fastest is => ${this.filter('fastest').map('name')}`)
    })
    .run({ 'async': true })
