console.log("Basic Challenge 06 : Create reate a function that return object that contain gruop of people based on sex, age, marital-status, job-status input:");

function groupPeople(data) {
    const result = {
        Gender: { Male: [], Female: [] },
        Age: { Under20: [],Above20: [] },
        Maritalstatus: { Single: [], Married: [] },
        Socialstatus: { Student: [], Employee: [] },
    };

    data.forEach(person => {
        // Group by Gender
        if (person.sex === 'male') {
            result.Gender.Male.push(person.name);
        } else {
            result.Gender.Female.push(person.name);
        }
        // Group by Age
        if (person.age < 20) {
            result.Age.Under20.push(person.name);
        } else {
            result.Age.Above20.push(person.name);
        }
        // Group by Marital status
        if (person.marital === 'single') {
            result.Maritalstatus.Single.push(person.name);
        } else {
            result.Maritalstatus.Married.push(person.name)
        }
        // Group by Social status
        if (person.social === 'student') {
            result.Socialstatus.Student.push(person.name);
        } else {
            result.Socialstatus.Employee.push(person.name);
        }
    });

    return result;
    }

    const data = [
        {
            name:"Irene",
            sex:"female",
            age:23,
            marital:"married",
            social:"student"
        },
        {
            name:"Felix",
            sex:"male",
            age:27,
            marital:"married",
            social:"employee"
        },
        {
            name:"Claudia",
            sex:"female",
            age:19,
            marital:"single",
            social:"student"
        },
        {
            name:"Martina",
            sex:"female",
            age:30,
            marital:"single",
            social:"employee"
        },
        {
            name:"Hugo",
            sex:"male",
            age:57,
            marital:"married",
            social:"employee"
        },
        {
            name:"Lucas",
            sex:"male",
            age:19,
            marital:"single",
            social:"student"
        },
    ];

    const result = groupPeople(data);
    console.log(result);