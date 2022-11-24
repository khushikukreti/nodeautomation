// hello 
const shell = require('shelljs')
// shell.exec('./feature')
const {exec}=require('node:child_process')
exec(
  'git checkout main \n git add . \n git commit -m "hi" \n git push --set-upstream origin feature',
  (error, stdout, stderr) => {
    if (error) {
      console.log(error);
    }
    if (stderr) {
      console.log(stderr);
    }
    console.log(stdout);
  }
);
// exec(
//   'git merge feature',
//   (error, stdout, stderr) => {
//     if (error) {
//       console.log(error);
//     }
//     if (stderr) {
//       console.log(stderr);
//     }
//     console.log(stdout);
//   }
// );
// let st=''
// exec(
//  "git diff --name-only ..origin/feature",
//   (error, stdout, stderr) => {
//     if (error) {
//       console.log(error);
//     }
//     if (stderr) {
//       console.log(stderr);
//     }
//     st=stdout
//     console.log('st',st);
//     console.log(stdout);
//   }
// );
// console.log(st);

