/////////////////////////////////// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a 9-forkify-final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Gup {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    getYear() {
        return this.year;
    }
}

class Parks extends Gup {
    constructor(name, year, trees, area) {
        super(name, year);
        this.trees = trees;
        this.area = area;
    }

    treeDensity() {
        //number of trees/park areaž
        console.log(`Tree density is: ${parseInt(this.trees / this.area)}`);
    }
}

class Streets extends Gup {
    constructor(name, year, length, size = "normal") {
        super(name, year);
        this.length = length;
        this.size = size;
    }
}

const park1 = new Parks("zelengaj", 1999, 1111, 123);
const park2 = new Parks("zrinjevac", 1799, 123, 1000);
const park3 = new Parks("maksimir", 2001, 3245, 156);

const street1 = new Streets(10, "tiny");
const street2 = new Streets(20, "small");
const street3 = new Streets(30, "normal");
const street4 = new Streets(40, "big");

let parksArray = new Array(park1, park2, park3);
let streetsArray = new Array(street1, street2, street3);

parksArray.forEach(value => value.treeDensity());

//sum of all ages/number of parks
let allAges;
parksArray.forEach( (value) => {
    allAges = allAges + (2018 - value.getYear());
    console.log(allAges);
    console.log(typeof(value.getYear()));
});

console.log(`Average age of town's park is: ${parseInt(allAges / parksArray.size)}`);