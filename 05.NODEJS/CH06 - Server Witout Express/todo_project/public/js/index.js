

$(document).ready(function () {

    $.ajax({url: "http://localhost:3000/api/todos", success: function(result){
        console.log(result);

        result.forEach(element => {
            console.log(element);
            $('#todolist').append(' <li><span><input type="checkbox">' +element +'</span></li>');
        });

    }});

});