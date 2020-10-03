function tinyFriend(names) {

    var tinyName = names[0];

    for (var i = 0; i < names.length; i++) {

        var currentName = names[i];

        if (currentName.length < tinyName.length) {
            tinyName = currentName;
        }

    }
    return tinyName;

}

var result = tinyFriend([`abir`, `kabir`, `sabbir`, `munabir`, `bir`]);

console.log(result);

