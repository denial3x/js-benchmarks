# js-benchmarks

A basic node application built to benchmark JavaScript statements, methods and whatever you want.
This implementation is nothing special and really easy, just built in top of [Benchmark.js](https://benchmarkjs.com/).

## Installation

Use the node package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 
to install js-benchmarks locally.

```bash
npm install
```

## Usage
* Create your own benchmarks javascript files and put them in ```benchmarks``` project folder.


    ├── node_modules                  
    ├── benchmarks  <------ This one!
    ├── .gitignore                     
    ├── index.js                    
    ├── package.json                
    ├── package-lock.json
    └── README.md

* Use my ```benchmarks/array-sum.js``` script as reference to see how i implemented different sums on array's elements using methods (e.g. [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), [forEach](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)) and statements 
(e.g. [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop). You should at least obtain something like that:

```js
(function () {
  const Benchmark = require("benchmark");
  const suite = new Benchmark.Suite();

  suite
    .add("firstMethod", () => {
    /* Piece of code that you want to benchmark */
    })
    .add("secondMethod", () => {
    /* Another piece of code that you want to benchmark */
    })
    .on("cycle", function (event) {
      /* printing out the results of each benchmark in ops/sec */
      console.log(String(event.target));
    })
    .on("complete", function () {
      /* printing out the fastest by benchmark name */
      console.log("The fastest is: " + this.filter("fastest").map("name"));

      /* printing out the slowest by benchmark name */
      console.log("The slowest is: " + this.filter("slowest").map("name"));
    })
    .run();
})();
```
* Import your "newborn" benchmark modules inside ```index.js``` using [require](https://nodejs.org/en/knowledge/getting-started/what-is-require/).
 
```js
require("./benchmarks/**your-new-benchmark.js**") 
```
* Launch the application.

```bash
npm run start
```
or 
```bash
node index.js
```
## Contributing
Pull requests are welcome. For major changes or any ideas please open an issue first to discuss what you would like to change or implement.

## License
[MIT](https://choosealicense.com/licenses/mit/)
