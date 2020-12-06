var user = "cortes"
var pas = "cortes"

var validate = (user,pass)=>{
    if(user==pass)
        return true;
    else
        return false;
}
console.log(validate(user,pas));