
const GREETINGS = 'Hello World!';

exports.hello = function( firstName, lastName ) {
    return GREETINGS + ', ' + firstName + ' ' + lastName + '!';
}

exports.notification = function(senderName, message, subject) {
    return subject + ", you got a message from " + senderName + ": " + message;
}

