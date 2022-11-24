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
simpleGit()
  .add(".")
  .commit("first commit!")
  .addRemote("origin", gitHubUrl)
  .push(["-u", "origin", "feature"], () => console.log("done"));
