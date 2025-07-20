module.exports.ChatbotReply = function (message) {
    this.Bot_Age = 25;
    this.Bot_Name = "name1";
    this.Bot_University = "VNSGU";
    this.Bot_Country = "India";

    message = message.toLowerCase();

    if (message.indexOf("hi") > -1 ||
        message.indexOf("hello") > -1 ||
        message.indexOf("welcome") > -1) {
        return "Hi!";
    }
    else if (message.indexOf("age") > -1 &&
        message.indexOf("your") > -1) {
        return "I'm " + this.Bot_Age + " years old.";
    }
    else if (message.indexOf("how") > -1 &&
        message.indexOf("are") > -1 &&
        message.indexOf("you") > -1) {
        return "I'm fine ^_^";
    }
    else if (message.indexOf("where") > -1 &&
        message.indexOf("live") > -1 &&
        message.indexOf("you") > -1) {
        return "I live in " + this.Bot_Country;
    }
    else if (message.indexOf("name") > -1 &&
        message.indexOf("your") > -1) {
        return "My name is " + this.Bot_Name + "!";
    }
    else if (message.indexOf("university") > -1 ||
        (message.indexOf("study") > -1 && message.indexOf("where") > -1)) {
        return "I studied at " + this.Bot_University + ".";
    }
    else if (message.indexOf("thank") > -1) {
        return "You're welcome!";
    }
    else if (message.indexOf("bye") > -1 ||
        message.indexOf("goodbye") > -1) {
        return "Goodbye! Have a great day :)";
    }
    else if (message.indexOf("what") > -1 &&
        message.indexOf("can") > -1 &&
        message.indexOf("you") > -1 &&
        message.indexOf("do") > -1) {
        return "I can answer simple questions about me, like my age, name, university, or country!";
    }

    return "Sorry, I didn't get it :( ";
}
