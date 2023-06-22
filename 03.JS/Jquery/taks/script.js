$(document).ready(function () {

    console.log("ready!");

    $("#btn").click(function () {
        console.log("click!");

        var val = $("#task").val();

        if (val != "") {
            
            var li = $("<li></li>").text(val);
            var btnDel = $("<button>").text("X").addClass("delete");
            
            li.append(btnDel);
            
            var btnComplete = $("<button>").text("Complete").addClass("complete");
            li.append(btnComplete);

            $("#myList").append(li);
            $("#task").val("");
        }
    });

    
});

$(document).on('click', '.delete', function() {
    $(this).closest('li').remove();
});

$(document).on('click', '.complete', function() {
    $(this).parent().toggleClass('strike');
});


