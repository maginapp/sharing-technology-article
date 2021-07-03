var Process = require("progress");

// var bar = new Process("[ :bar ]", { total: 10 });
// var timer = setInterval(function() {
//   bar.tick();
//   if (bar.complete) {
//     console.log("\ncomplete\n");
//     clearInterval(timer);
//   }
// }, 100);

// :bar the progress bar itself
// :current current tick number
// :total total ticks
// :elapsed time elapsed in seconds
// :percent completion percentage
// :eta estimated completion time in seconds
// :rate rate of ticks per second

// var bar = new Process("[ :percent:current:bar:total]", { total: 10 });
var bar = new Process("[downloading [:bar] :rate/bps :percent :etas]", { total: 500 }, { callback: () => {
  console.log(...arguments)
} });
// var timer = setInterval(function() {
//   bar.tick();
//   if (bar.complete) {
//     console.log("\ncomplete\n");
//     clearInterval(timer);
//   }
// }, 500);


const next = (bar) => {
  setTimeout(function() {
    bar.tick();
    if (bar.complete) {
      console.log("\ncomplete\n");
    } else {
      next(bar)
    }
  }, Math.random() * 100);
}

next(bar)