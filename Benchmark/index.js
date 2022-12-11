const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;

suite
    .add("[Suite:1] Last element of array dynamic length", function () {
        var array = [1, 2, 3, 4, 5, 6];
        let el =array[array.length-1]
    })
    .add("[Suite:2] Last element of array using slice", function () {
        var array = [1, 2, 3, 4, 5, 6];
        let el =array.slice(-1)
    })
    .on('cycle', function (event) {
        console.log(String(event.target))
    })
    .on('complete', function () {
        console.log(`The fastest is => ${this.filter('fastest').map('name')}`)
    })
    .run({'async': true})
