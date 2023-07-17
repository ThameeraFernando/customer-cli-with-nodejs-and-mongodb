const program = require("commander");
const { addCustomer, findCustomer } = require("./index");
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

program
  .command("find <name>")
  .alias("f")
  .description("Find a customer")
  .action((name) => {
    findCustomer(name);
  });

program
  .command("add")
  .alias("a")
  .description("Add a customer")
  .action(() => {
    prompt(questions).then((answers) => addCustomer(answers));
  });

program.parse(process.argv);
