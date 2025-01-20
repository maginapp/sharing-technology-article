const inquirer = require('inquirer')

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//     {
//       type: 'list',
//       name: 'Has yes?',
//       message: 'des: hhhh',
//       choices: ['A', 'B']
//     }
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//     console.log('answers')
//     console.log(answers)
//   })
//   .catch((error) => {
//     console.log('error')
//     console.log(error)
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });


  // inquirer
  // .prompt([
  //   /* Pass your questions in here */
  //   {
  //     type: 'list',
  //     name: 'name:test filter?',
  //     message: 'message: test filter',
  //     choices: ['A', 'B'],
  //     /* Preferred way: with promise */
  //     filter(a, b) {
  //       console.log('filter')
  //       console.log(arguments.length)
  //       console.log('filter a')
  //       console.log(a)
  //       console.log('filter b')
  //       console.log(b)
  //       console.log('filter a')
  //       console.log(a)
  //       return new Promise((res, rej) => {
  //         res('sss')
  //       });
  //     },

  //     /* Legacy way: with this.async */
  //     validate: function (input) {
  //       console.log('validate')
  //       console.log(input)
  //       // Declare function as asynchronous, and save the done callback
  //       var done = this.async();

  //       // Do async stuff
  //       setTimeout(function() {
  //         if (typeof input !== 'number') {
  //           // Pass the return value in the done callback
  //           done('You need to provide a number');
  //           return;
  //         }
  //         // Pass the return value in the done callback
  //         done(null, true);
  //       }, 3000);
  //     }
  //   }
  // ])
  // .then((answers) => {
  //   // Use user feedback for... whatever!!
  //   console.log('answers')
  //   console.log(answers)
  // })
  // .catch((error) => {
  //   console.log('error')
  //   console.log(error)
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // });


  // inquirer
  // .prompt([
  //   /* Pass your questions in here */
  //   {
  //     type: 'input',
  //     name: 'dev',
  //     message: 'message: input-dev',
  //     /* Preferred way: with promise */
  //     filter(a) {
  //       return new Promise((res, rej) => {
  //         res(a)
  //       });
  //     }
  //   },
  //   {
  //     type: 'number',
  //     name: 'dev-2',
  //     message: 'message: number-dev',
  //     /* Preferred way: with promise */
  //     /* Legacy way: with this.async */
  //     validate: function (input) {
  //       console.log('validate')
  //       console.log(input)
  //       // Declare function as asynchronous, and save the done callback
  //       var done = this.async();

  //       // Do async stuff
  //       setTimeout(function() {
  //         if (typeof input !== 'number') {
  //           // Pass the return value in the done callback
  //           done('You need to provide a number');
  //           return;
  //         }
  //         // Pass the return value in the done callback
  //         done(null, true);
  //       }, 3000);
  //     }
  //   }
  // ])
  // .then((answers) => {
  //   // Use user feedback for... whatever!!
  //   console.log('answers')
  //   console.log(answers)
  // })
  // .catch((error) => {
  //   console.log('error')
  //   console.log(error)
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // });

  const ques = [
    /* Pass your questions in here */
    {
      type: 'list',
      name: 'template',
      message: 'des: hhhh',
      choices: ['A', 'B', 'cus']
    }
  ]

  const ques2 = [
    /* Pass your questions in here */
    {
      type: 'list',
      name: 'eslint',
      message: 'des: hhhh 2',
      choices: ['A2', 'B2', 'cus']
    }
  ]
  

  inquirer
  .prompt(ques)
  .then((answers) => {
    console.log(answers)
    if (answers.template === 'cus') {
      return inquirer
        .prompt(ques2)
        .then((answers) => {
          console.log(answers)
        })
    } else {
      console.log('download模板')
    }
  })
  .catch((error) => {
    console.log(error)
  });