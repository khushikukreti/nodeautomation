// hello 
const shell = require('shelljs')
// shell.exec('./feature')
const {exec}=require('node:child_process')
exec('git add . \n git commit -m "hi" \n git push', (error, stdout, stderr) => {
  if (error) {
    console.log(error);
  }
  if (stderr) {
    console.log(stderr);
  }
  console.log(stdout);
});
// exec("git commit -m \"hi\"", (error, stdout, stderr) => {
//   if (error) {
//     console.log(error);
//   }
//   if (stderr) {
//     console.log(stderr);
//   }
//   console.log(stdout);
// });