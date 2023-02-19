function sendGet(){
    const userData1 = {
        lname: $("#lname").val(),
        fname: $("#fname").val(),
        age: $("#age").val(),
        address: $("#address").val()
    };

    if (userData1.age < 1 || userData1.age > 100) {
        alert("Вік повинен бути в межах від 1 до 100.");
        return;
    }

    $.ajax({
        type: "GET",
        url: "/formGet",
        data: userData1,
        dataType: "json"
    });
}

function sendPost(){
    const userData2 = {
        lName: $("#lName").val(),
        fName: $("#fName").val(),
        Age: $("#Age").val(),
        Address: $("#Address").val()
    };

    if (userData2.Age < 1 || userData2.Age > 100) {
        alert("Вік повинен бути в межах від 1 до 100.");
        return;
    }

    $.ajax({
        type: "POST",
        url: "/formPost",
        data: JSON.stringify(userData2),
        contentType: "application/json"
    });
}
