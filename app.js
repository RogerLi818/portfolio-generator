const profileDataArgs=process.argv.slice(2, process.argv.length);

console.log(profileDataArgs);
console.log(process.argv.length);


const printProfileData=profileDataArr=>{
    for (let i =0; i<profileDataArr.length;i++){
        console.log(profileDataArr[i]);
    }
};

printProfileData(profileDataArgs);