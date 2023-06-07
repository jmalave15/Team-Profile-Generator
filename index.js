const inquirer = ('requirer');
const fs = require('fs');
const teamArray = [];
const html = "";
const Manager = require ("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");
const generateWebPage = require ('./generateWebPage');


const addManager = () => {
    return inquirer.prompt([
    {
        type: "input",
        message: "Enter manager name",
        name:"name"

    },
    {

        type: "input",
        message: "Enter manager id",
        name:"id"

    },
    {

        type: "input",
        message: "Enter manager email",
        name:"email"

    },
    {

        type: "input",
        message: "Enter manager number",
        name:"number"

    },

    ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.number);
            teamArray.push(manager)
            chooseEmployee();
        })

}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Are you sure you want to add any of these options?",
            name: "Add options",
            choices: [
                'Add Engineer',
                'Add Intern',
                'Finish building team'
            ]
        }
    ])
        .then(pickedOption => {
            switch (pickedOption.Adding){
                case "Add Engineer":
                    addEngineer();
                    break;
                case "Add Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
                    break;
            }
        });

};


const addEngineer = () => {
    return inquirer.prompt([
    {
        type: "input",
        message: "Enter engineer name",
        name:"name"

    },
    {

        type: "input",
        message: "Enter engineer id",
        name:"id"

    },
    {

        type: "input",
        message: "Enter engineer email",
        name:"email"

    },
    {

        type: "input",
        message: "Enter engineer github ",
        name:"Github"

    },

    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamArray.push(engineer)
        chooseEmployee();
    })

}
    const addIntern = () => {
        return inquirer.prompt([
        {
            type: "input",
            message: "Enter intern name",
            name:"name"
    
        },
        {
    
            type: "input",
            message: "Enter intern id",
            name:"id"
    
        },
        {
    
            type: "input",
            message: "Enter intern email",
            name:"email"
    
        },
        {
    
            type: "input",
            message: "Enter intern school",
            name:"school"
    
        },
    
        ])
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamArray.push(intern)
            chooseEmployee();
        })
    
    };

    const buildTeam = () => {
        fs.writeFileSync("generatedHTML.html", generateWebPage(teamArray), "utf8")
    }

    addManager()