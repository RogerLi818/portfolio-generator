const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage=require('./src/page-template');

// const pageHTML=generatePage(name, github);

// fs.writeFile('./index.html',pageHTML,err=>{
//     if(err) throw err;

//     console.log("Protfolio complete! Check out index.html to see the output!");
// });
const promptUser=()=>{
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is your name? (Required)',
            validate:nameInput=>{
                if(nameInput){
                    return true;
                }else{
                    console.log('please enter your name!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'github',
            message:'Enter your Github Username? (Required)',
            validate:nameInput=>{
                if(nameInput){
                    return true;
                }else{
                    console.log('please enter your Github Username!');
                    return false;
                }
            }
        },
        {
            type:'confirm',
            name:'confirmAbout',
            message:'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type:'input',
            name:'about',
            message:'Provide some information about yourself:',
            when:({confirmAbout})=>{
                if(confirmAbout){
                    return true;
                }else{
                    return false;
                }
            }
        }
    ]);  
};

const promptProject =portfolioData =>{

    // If there's no 'projects' array property, create one
    

    console.log(`
    ==========================
    Add a New Project
    ==========================
    `);

    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:"What's the name of your proejct? (Required)",
            validate:nameInput=>{
                if(nameInput){
                    return true;
                }else{
                    console.log('please enter the name of your proejct!');
                    return false;
                }
            }

        },
        {
            type:'input',
            name:'description',
            message:"Provide a description of the project (Required)",
            validate:nameInput=>{
                if(nameInput){
                    return true;
                }else{
                    console.log('please enter the description of the project!');
                    return false;
                }
            }

        },
        {
            type:'checkbox',
            name:'language',
            message:"What did you build this project with? (Check all that apply)",
            choices:["Javascript","HTML", "CSS", "ES6","jQuery","Bootstrap","Node"]

        },
        {
            type:'input',
            name:'link',
            message:"Enter the GitHub link to your project. (Required)",
            validate:nameInput=>{
                if(nameInput){
                    return true;
                }else{
                    console.log('please enter the GitHub link!');
                    return false;
                }
            }

        },
        {
            type:'confirm',
            name:'feature',
            message:"Would you like to feature this project?",
            default:false

        },
        {
            type:'confirm',
            name:'confirmAddProject',
            message:"Would you like to enter another project?",
            default:false

        },
    ])
    .then(projectData=>{
        portfolioData.projects.push(projectData);
        if(projectData.confirmAddProject){
            return promptProject(portfolioData);
        }else{
            return portfolioData;
        }
    });
};


promptUser()
.then(promptProject)
.then(portfolioData=>{
    console.log(portfolioData);
});