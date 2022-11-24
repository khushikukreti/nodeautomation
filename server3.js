const simpleGit = require("simple-git");
simpleGit().clean(simpleGit.CleanOptions.FORCE);
const dotenv = require("dotenv").config();
const shellJs = require("shelljs");
const simpleGitPromise = require("simple-git")();
const repo = "nodeautomation"; //Repo name
console.log(process.env.NAME);
const userName = process.env.NAME;
const password = process.env.PASSWORD;
const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;
simpleGit().addConfig("user.email", "khushikukreti20@gmail.com");
simpleGit().addConfig("user.name", "khushikukreti");
const add = async () => {
  simpleGit().add("./*");
};
// simpleGit()
//   .add(".")
//   .commit("first commit!")
//   .addRemote("origin", gitHubUrl)
// simpleGit().push()
//     .then((success) => {
//         simpleGit().checkout('main').then((success)=>{
//         console.log('checkedout ');
//         },(failed)=>{
//             console.log(failed);
//         })
//        console.log('repo successfully pushed');
//     },(failed)=> {
//        console.log('repo push failed');
//  })

async function checkoutandcommit() {
  const add = await simpleGit().add(".");
  const commit = await simpleGit().commit("hello");
//   const addremote = await simpleGit().addRemote("origin", gitHubUrl);
  const push = await simpleGit().push();
  const checkout = await simpleGit().checkout("feature");
}
checkoutandcommit();
