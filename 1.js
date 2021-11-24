const person = {

 city: "Chicago"

}
const student = Object.create(person);
student.ownCity = "NY";

function ValueKeys(object){
    for(let key in object){
        if(object.hasOwnProperty(key)){
            console.log(`key: ${key}, value: ${object[key]}`);
        }
    }
}

ValueKeys(student)
