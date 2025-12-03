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

const iphoneProNew = { ...iphonePro,
                        camera: {
                            ...iphonePro.model,
                        }
};

console.log("iphoneProNew: " + iphoneProNew);

        //Example 4. Copying objects with nested objects:
        const iphoneProNew = { ...iphonePro,
                                 camera: {
                                 ...iphonePro.camera,
            }
        };

        iphonePro.camera.model = "t200-apple";

        console.log("iphonePro: " + iphonePro.camera.model);
        console.log("iphoneProNew: " + iphoneProNew.camera.model);

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



