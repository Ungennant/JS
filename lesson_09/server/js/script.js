
function sendGet(){
    const userData1 = {
        lname:document.getElementById('lname').value,
        fname:document.getElementById('fname').value,
        age:document.getElementById('age').value,
        address:document.getElementById('address').value
    };

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/formGet?lname="+userData1.lname+"&fname="+userData1.fname+"&age="+userData1.age+"&address="+userData1.address);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
}   

function sendPost(){
    const userData2 = {
        lName:document.getElementById('lName').value,
        fName:document.getElementById('fName').value,
        Age:document.getElementById('Age').value,
        Address:document.getElementById('Address').value
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/formPost");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(userData2));

}

