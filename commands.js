#!/usr/bin/env node
const program = require("commander");
const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomer,
} = require("./index");
const { prompt } = require("inquirer");

//customer questions
const questions = [
  { type: "input", name: "firstName", message: "Customer first name:" },
  { type: "input", name: "lastName", message: "Customer last name:" },
  { type: "input", name: "phone", message: "Customer phone:" },
  { type: "input", name: "email", message: "Customer email:" },
];

program.version("1.0.0").description("Client Management System");

// program
//   .command("add <firstName> <lastName> <phone> <email>")
//   .alias("a")
//   .description("Add a customer")
//   .action((firstName, lastName, phone, email) => {
//     addCustomer({ firstName, lastName, phone, email });
//   });

//Find command
program
  .command("find <name>")
  .alias("f")
  .description("Find a customer")
  .action((name) => {
    findCustomer(name);
  });

//Add command
program
  .command("add")
  .alias("a")
  .description("Add a customer")
  .action(() => {
    prompt(questions).then((answers) => addCustomer(answers));
  });

//Update command
program
  .command("update <_id>")
  .alias("u")
  .description("Update a customer")
  .action((_id) => {
    prompt(questions).then((answers) => updateCustomer(_id, answers));
  });

//Remove command
program
  .command("remove <_id>")
  .alias("r")
  .description("Remove a customer")
  .action((_id) => {
    removeCustomer(_id);
  });

//List command
program
  .command("list")
  .alias("l")
  .description("List all customers")
  .action(() => {
    listCustomer();
  });

program.parse(process.argv);
