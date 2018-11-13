let fs = require('fs');

const MY_NAME = 'Ahmed Mohammed';

function get_rows_number(flowers) {
    console.log(`Number of rows is (${flowers.length})`);
}

function get_s_flowers(flowers) {
    let sFlowers = flowers.filter(e => e[0] == 'S');
    let sFlowersString = sFlowers.join(', ');
    console.log(`\n\nFlowers that start with letter 'S': \n${sFlowersString}`);
}

function get_number_of_other_flowers(flowers) {
    let not_s_Flowers = flowers.filter(e => e[0] != 'S');
    let not_s_Flowers_String = not_s_Flowers.join(', ');
    console.log(`\n\nFlowers that not start with letter 'S': \n${not_s_Flowers_String}`);
}

function flower_my_name(flowers) {
    let myNameFlowers = flowers.filter(e => e[0] == MY_NAME[0]);
    let myNameFlowersString = myNameFlowers.join(', ');
    console.log(`\n\nFlowers that start with first letter '${MY_NAME[0]}' of my name: \n${myNameFlowersString}`);    
}

function flower_five_length(flowers) {
    let five_length_flowers = flowers.filter(e => e.length == 5);
    let five_length_flowers_string = five_length_flowers.join(', ');
    console.log(`\n\nFlowers that it's name length is 5:\n${five_length_flowers_string}`);
}


void function main() {
    fs.readFile('./flower.txt', (err, data) => {
        if (err) {
            console.log('Error reading file');
            return;
        } else {
            let flowerString =  data.toString();
            let flowersList = flowerString.split('\n');
            
            // 1. Count the number of rows.
            get_rows_number(flowersList);

            // 2. List the flower name that start with letter 'S'.
            get_s_flowers(flowersList);

            // 3. Count the number of flower that not start with letter 'S'.
            get_number_of_other_flowers(flowersList);

            // 4. List the flower start with first letter of your name if your name start with 'S' use second letter.
            flower_my_name(flowersList);

            // 5. List all the flower the name length is 5.
            flower_five_length(flowersList);
        }
    })
}();
