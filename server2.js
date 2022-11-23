
const simpleGit = require("simple-git");
simpleGit().clean(simpleGit.CleanOptions.FORCE);

// Shelljs package for running shell tasks optional
const shellJs = require("shelljs");
// Simple Git with Promise for handling success and failure
const simpleGitPromise = require("simple-git")();
// change current directory to repo directory in local
// shellJs.cd('path/to/repo/folder');
// Repo name
const repo = 'nodeautomation';  //Repo name
// User name and password of your GitHub
const userName = 'khushikukreti';
const password = 'Pinki20#';
// Set up GitHub url like this so no manual entry of user pass needed
const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;
// // add local git config like username and email
simpleGit().addConfig('user.email','khushikukreti20@gmail.com');
simpleGit().addConfig('user.name','khushikukreti');
simpleGit()
  .add("./*")
  .commit("first commit!")
  .addRemote("origin", gitHubUrl)
 simpleGit()
  .push("origin", "feature")
  .then(
    (success) => {
      console.log("repo successfully pushed!");
    },
    (failed) => {
      console.log("repo push failed");
    }
  );
   simpleGit()
     .checkout("main")
     .then(
       (success) => {
         console.log("repo successfully pushed!");
       },
       (failed) => {
         console.log("repo push failed");
       }
     );
// Add remore repo url as origin to repo
// simpleGitPromise.addRemote('origin',gitHubUrl);
// Add all files for commit
//   simpleGitPromise.add('.')
//     .then(
//        (addSuccess) => {
//           console.log(addSuccess);
//        }, (failedAdd) => {
//           console.log('adding files failed');
//     });
// // Commit files as Initial Commit
//  simpleGitPromise.commit('Intial  by simplegit')
//    .then(
//       (successCommit) => {
//         console.log(successCommit);
//      }, (failed) => {
//         console.log('failed commmit');
//  });
// // Finally push to online repository
//  simpleGitPromise.push()
//     .then((success) => {
//        console.log('repo successfully pushed');
//     },(failed)=> {
//        console.log('repo push failed');
//  });