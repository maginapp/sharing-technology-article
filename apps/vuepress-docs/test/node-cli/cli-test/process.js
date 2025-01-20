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
const bar = new Process(
  // 进度栏效果
  "[downloading [:bar] :rate/bps :percent :etas]", 
  {  
    // 任务数量
    total: 20,
    // 所有完成回调
    callback: () => {
      console.log("callback")
    } 
  }
)

const next = (bar) => {
  setTimeout(function() {
    bar.tick() // 任务完成，更新进度
    if (bar.complete) {
      console.log("complete")
    } else {
      next(bar)
    }
  }, Math.random() * 100)
}

next(bar)

// var timer = setInterval(function() {
//   bar.tick();
//   if (bar.complete) {
//     console.log("\ncomplete\n");
//     clearInterval(timer);
//   }
// }, 500);

