let Result= document.getElementById('Result');

function insertValue(value){
    Result.value +=value;
}
function clearResult(){
    Result.value = '';
}
function deletResult(){
    Result.value = Result.value.slice(0, -1);
}
function calculate(){
    try{
        Result.value = eval(Result.value);
    }
    catch(error){
        Result.value = "Error";
    }
}