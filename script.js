function printNames () {
    var reversed = prompt("Please enter (true) or (false).");
    var names = ["James", "Jill", "Jane", "Jack", reversed];
    var arrow = prompt("Create an arrow.");
    if (reversed === "true") {
        for (var i = names.length-2; i >= 0; i--) {
            console.log(i + arrow + names[i]);
        }
    } else {
        for (var i = 0; i < names.length-1; i++) {
            console.log(i + arrow + names[i]);
        }
    }
};
printNames();