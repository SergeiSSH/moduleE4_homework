const obj = {
  city:''
};

function properties(string, object) {
    if (string in object) {
        return true;
    } else {
        return false;
    }
}
console.log(properties('city', obj))
