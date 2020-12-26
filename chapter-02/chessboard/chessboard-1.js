let string = ''
let length = 8
for ( let row = 0 ; row < length ; row++ ) {

    for ( let col = 0 ; col < length ; col++ ) {

        if ( !( (row + col) % 2 ) ) {
            string += ' '
        } else {
            string += '#'
        }

    }

    if (row !== length - 1) {
        string += '\n'
    }

}

console.log(string)