const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const a = [1, 2, 3, 4, 5]

suite
    .add("[Suite:1] Search item using filter fn", function ()
    {
        const result = a.filter(
            item =>
            {
                return item === 3
            }
        )
    })
    .add("[Suite:2] Search item using find fn", function ()
    {
        const result = a.find(item => item === 3)
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
