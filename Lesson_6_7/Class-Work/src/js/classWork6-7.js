//Example 1: 
//debugger;
globalVariable = 1000;

let ternarnyOperator = globalVariable ? globalVariable : 200;

console.log(ternarnyOperator);

document.querySelector('.contentResult').innerHTML = ternarnyOperator;

//Example 2: Objects

const iphone = {
    color: "black",
    width: 20, 
    height: 40,
    weght: 800,
    camera: {
        count: 3,
        model: "t100-samsung",
        countPixels: 1000
    }
}

console.table(iphone.color); // black


//Example 3: 


const iphonePro = {
    color: "white",
    width: 30, 
    height: 50,
    weght: 900,
    camera: {
        count: 3,
        model: "t100-samsung",
        countPixels: 1000
    }
}

const objectKey = "height"; 

console.log("Object Key: " + iphonePro['height']); // 50 

const iphoneObject = iphone; // new object

console.table(iphone.color); // black

iphone.color = "green"; // set gern color

console.table(iphoneObject.color); // green

const iphoneObjectConst = { ...iphone }; //new constant object

console.table(iphoneObjectConst.color); // black

const  iphoneProNewObj1 = { ...iphonePro,
                        camera: {
                            ...iphonePro.model,
                        }
};

console.log("iphoneProNewObj1: " + iphoneProNewObj1);

        //Example 4. Copying objects with nested objects:
        const iphoneProNewObj2 = { ...iphonePro,
                                 camera: {
                                 ...iphonePro.camera,
            }
        };

        iphonePro.camera.model = "t200-apple";

        console.log("iphonePro: " + iphonePro.camera.model);
        console.log("iphoneProNewObj2: " + iphoneProNewObj2.camera.model);

//Example 5. Object contains property with function:

        const enteredCity = ['Trebic', 'Paris', 'Rome', 'Bratislava', 'Kyiv'];

        const company = {
            name: "Nuvia",
            size: "1000",
            employee: 5000,
            locationCity: function (city) {
                const locationCity = city;
                if (locationCity) {
                    const fullLocation = [locationCity];
                    return this.locationCountry(fullLocation);
                }
            },

            locationCountry: function (fullLocation) {
                let country;
                if (fullLocation[0] === 'Trebic') {
                    country = 'CZ';
                } else {
                    country = 'OTHER';
                }
                fullLocation.push(country);
                return fullLocation;
            }
        };
        const randomCity = Math.floor(Math.random() * enteredCity.length);
        console.log("Location: " + company.locationCity(enteredCity[randomCity]));

//Tasks.
// 1. Проверьте, что этот объект не пустой и что в нем есть ключ age.
        const user = {
            location: "London",
            age: 30,
            name: "John"
        };

        if (Object.keys(user).length === 0) {
            // Checking empty:
            console.log("Object is empty");
        } else {
            // Checking if object conains key = "John":
            for (let key in user) {
                const checkObjectKey = user[key];
                if (checkObjectKey === 'John') {
                    console.log("John Key Is: " + true);
                } else {
                    console.log("John Key Is: " + false);
                }
            }
        }

        //HW-7-OBJ
        const userObject = {
            name: "Alex Deliergiyec",
            age: 38,
            stack: ["HRML", "CSS", "SASS"],
            location: {
                country: "CZ",
                city: ["Trebic", "Brno", "Ostrava"],
            },
        };

        console.log("NOT MANDATORY PROPARTY: " + userObject.location?.city[0]);

        //1. Created new Object
        console.log("NEW OBJECT CREATING: " + JSON.stringify(userObject, null, 2));

        //2. Added new property to object
        const newKeys = ['gitHub', 'stageProgress'];
        const newObjValues = ['https://github.com/AlexDeliergiyec;', 'JavaScript'];

        function newKeyAndValue (newKeys, newObjValues) {
            //debugger;
            for (let i = 0; i < newKeys.length; i++) {
                userObject[newKeys[i]] = newObjValues[i];
            }
            return userObject;
        }


        console.table("NEW PROPERTIES IS ADDED: " + JSON.stringify(newKeyAndValue(newKeys, newObjValues), null, 2));

         function showFunctionOne (userObject) {
            for (const key in userObject) {
                console.log(`${key}: ${userObject[key]}`);
            }
        }

        showFunctionOne(userObject);

         function showFunctionTwo (userObject) {
            const resultKeys = [];
             for (let key in userObject) {
                 resultKeys.push(`${key}: ${userObject[key]}`);
             }
             return resultKeys;
         }

        console.log(showFunctionTwo(userObject));

        function randomInteger (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const score = randomInteger(0, 5);

        console.log("RANDOM SCORE: " + score);

        const newKeysScore = ['score'];
        const newObjValuesScore = [score];

        const newKeyAndValueScore = newKeyAndValue(newKeysScore, newObjValuesScore);

        showFunctionOne(newKeyAndValueScore);

        if (score >= 3) {
            //debugger;
            for (let i in newObjValues){
                if (newObjValues[i] === "JavaScript") {
                    newObjValues[i] = 'React';
                    const updatedStack = newKeyAndValue(newKeys, newObjValues);
                    //delete newKeyAndValueScore['stageProgress'];
                    newKeyAndValueScore.stack.push(updatedStack['stageProgress']);
                }
            }
        } else {
            newKeyAndValueScore.stack.push(newKeyAndValueScore['stageProgress']);
        }
        console.log("NEW STACK IS ADDED: " + JSON.stringify(newKeyAndValueScore, null, 2));
        console.log("REPEAT PLEASE: " + newKeyAndValueScore[newKeys[1]]);



