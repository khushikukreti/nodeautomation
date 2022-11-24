
const simpleGit = require("simple-git");
simpleGit().clean(simpleGit.CleanOptions.FORCE);
require("dotenv").config();
const shellJs = require("shelljs");
const simpleGitPromise = require("simple-git")();
const repo = 'nodeautomation';  
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
  .checkoutBranch("main","origin/feature")
  .then(
    (success) => {
      console.log("repo checkout pushed!");
    },
    (failed) => {
      console.log("repo checkout failed");
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