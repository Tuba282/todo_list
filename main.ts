#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let list = [];
let loop = true;

while (loop) {
  let Answer: any = await inquirer.prompt([
    {
      name: "todo",
      type: "list",
      message: chalk.bgBlueBright`\n What do you want to do with your todo list:`,
      choices: ["Add", "Delete", "Show Todos", "Exit"],
    },
  ]);
  // ---------------------------------Add-Option---------------------------------------
  if (Answer.todo === "Add") {
    let Answer_add: any = await inquirer.prompt([
      {
        name: "add",
        type: "string",
        message: "\n\tfrom here can add your todo list:",
      },
    ]);
    list.push(Answer_add.add); //push last sy elemnts ko add karwana
    //   console.log(`\n`);
    //   console.log(list);
    console.log(chalk.blueBright`\n Your item has been added.\n\t Thank you. `);
    console.log(
      chalk.magenta`\n\tYou wanna see your todo list?.\nThen please check the Show Todos option`
    );
  }
  // ---------------------------------Delete-Option---------------------------------------
  else if (Answer.todo === "Delete") {
    if (list.length > 0) {
      let Answer_delete: any = await inquirer.prompt([
        {
          name: "delete",
          type: "list",
          message: "\n\tfrom here can delete your item from todo list:",
          choices: list,
        },
      ]);

      const remove_item = list.indexOf(Answer_delete.remove_item);
      // The splice method is used to add or remove elements from an array.
      // The first parameter is the index where you want to start changing the array.
      // The second parameter is the number of elements you want to remove.
      // The third (optional) parameter is the element(s) you want to add to the array.
      // Here, we are removing one element at the index `index` by passing 1 as the second parameter.
      // So, it's removing one element from the array `list` at the index `index`.
      console.log(chalk.bgYellowBright`\n Your item has been deleted.\n\t Thank you. `);
      console.log(chalk.magenta`\n\tYou wanna see your todo list?.\nThen please check the Show Todos option`);
    } else {
      console.log(`please first add some todos to delete`);
    }
  }
  // ---------------------------------Show Todos-Option---------------------------------------
  else if (Answer.todo === "Show Todos") {
    console.log(`\nDisplaying todos:`);
    list.forEach((add) => {
      console.log(`\t\n ${add}`);
    });
  }

  // ---------------------------------Exit-Option---------------------------------------
  else if (Answer.todo === "Exit") {
    loop = false;
  }

  // ---------------------------------else-Option---------------------------------------
  else {
    console.log("Invalid action. Please choose again.");
  }
}
