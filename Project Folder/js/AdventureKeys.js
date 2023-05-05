var currentRoom = "start";
var commands = ["go", "scout", "quit"];
var inventory = ["nothing", "more nothing", "and of course, nothing"];



function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir]
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
    } else {
        $('#game-text').append("<p>You cannot go that way!</p>");
    }
}


function showHelp() {
    $('#game-text').append("<p>Here are the possible commands: </p>");
    $('#game-text').append("<ul>");
    for (var i = 0; i < commands.length; i++) {
        $('#game-text').append("<li>" + commands[i] + "</li>");
    }
    $('#game-text').append("</ul>");
}
//there will be nothing here but I thought it would be a nice joke
function showInventory() {
    if (inventory.length == 0) {
        $('#game-text').append("<p>You are not carrying anything because your manly!</p>");
        return;
    }
    $('#game-text').append("<p>Here is your inventory: (Hint: theres nothing in here) </p>");
    $('#game-text').append("<ul>");
    for (var i = 0; i < inventory.length; i++) {
        $('#game-text').append("<li>" + inventory[i] + "</li>");
    }
    $('#game-text').append("</ul>");
}


function gameEnd() {
    $('#game-text').append("<p>What a wimp. Not even going to try eh?</p>");
}

 
function scoutRoom() {
    $('#game-text').append("<p>" + rooms[currentRoom].scout + "</p>");

}
function showQuit() {
    $('#game-text').append("<p>" + rooms[currentRoom].quit + "</p>");

}




//input commands

function playerInput(input) {
    var command = input.split(" ")[0];
    switch (command) {
        case "go":
            var dir = input.split(" ")[1];
            changeRoom(dir);
            break;
        case "help":
            showHelp();
            break;
        case "inventory":
            showInventory();
            break;
        case "scout":
            scoutRoom();
            break;
        case "end":
            gameEnd();
            break;
        case "quit":
            showQuit();
            break;
        default:
            $('#game-text').append("<p>You can't do that!</p>");

    }
}

$(document).ready(function() {
    $('#game-text').append("<p>" + rooms.start.description + "</p>");
    $(document).keypress(function(key) {
        if (key.which == 13 && $('#user-input').is(':focus')) {
            var value = $('#user-input').val().toLowerCase();
            $('#user-input').val("");
            playerInput(value);
        }
    })

});
