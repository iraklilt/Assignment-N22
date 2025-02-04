// let a = "s";
//
// switch (a) {
//     case 3:
//         console.log( 'Too small' );
//         break;
//     case 4:
//         console.log( 'Exactly!' );
//         break;
//     case 5:
//         console.log( 'Too big' );
//         break;
//     default:
//         console.log( "I don't know such values" );
// }

// let a = "1";
// let b = 0;
//
// switch (+a) {
//     case b + 1:
//         console.log("this runs, because +a is 1, exactly equals b+1");
//         break;
//
//     default:
//         console.log("this doesn't run");
// }

//
// let a = "4";
//
// switch (a) {
//     case 4:
//         console.log('Right!');
//         break;
//
//     case 3: // (*) grouped two cases
//     case 5:
//         console.log('Wrong!');
//         console.log("Why don't you take a math class?");
//         break;
//
//     default:
//         console.log('The result is strange. Really.');
// }


// ------task------

// switch (browser) {
//     case 'Edge':
//         alert( "You've got the Edge!" );
//         break;
//
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert( 'Okay we support these browsers too' );
//         break;
//
//     default:
//         alert( 'We hope that this page looks ok!' );
// }

let browser = null;
if (browser === "edge") {
    console.log("You've got the Edge!");
}else if (browser === "Firefox" || "opera" || "Safari" || "chrome" ) {
    console.log("Okay we support these browsers too");
}else {
    console.log("We hope that this page looks ok!");
}

// ------task------

// let a = +prompt('a?', '');
//
// if (a == 0) {
//     console.log( 0 );
// }
// if (a == 1) {
//     console.log( 1 );
// }
//
// if (a == 2 || a == 3) {
//     console.log( '2,3' );
// }


let a=2;
switch (a) {
    case 1:
        console.log( 1 );
        break;

    case 2:
    case 3:
        console.log( "2,3" );
        break;
}

// ------task------

let a=2;
let b = 4;
function Fun(a,b) {
    if (a < b) {
        return a;

    } else {
        return b;

    }
}
console.log(Fun(a,b));

