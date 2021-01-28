(function () {
  const Benchmark = require("benchmark");
  const _ = require("lodash");

  const suite = new Benchmark.Suite();

  let array = [];
  for (let i = 0; i < 1000000; i++) array.push(i);

  suite
    .add("reduce", () => {
      array.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );
    })
    .add("for", () => {
      let sum = 0;
      for (let i = 0; i < array.length; i++) sum += array[i];
    })
    .add("forEach", () => {
      let sum = 0;
      array.forEach((element) => {
        sum += element;
      });
    })
    .on("cycle", function (event) {
      console.log(String(event.target));
    })
    .on("complete", function () {
      console.log("The fastest is: " + this.filter("fastest").map("name"));
      this.each((i) => {
        console.log("Comparing: " + i.name);
        this.each((k) => {
          if (!_.isEqual(i, k)) {
            let percDiff = Math.round(((i.hz - k.hz) / k.hz) * 100);
            console.log("\t with: " + k.name + " results in " + percDiff + "%");
          }
        });
      });
    })
    .run({ async: true });
})();
