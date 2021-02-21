
let workinghour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am']
// console.log(workinghour);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let resturent = [];
function Resturent(locationName, mincust, maxcust, avgcookies) {
    this.locationName = locationName
    this.mincust = mincust
    this.maxcust = maxcust
    this.avgcookies = avgcookies
    this.custumerperhour = [];
    this.cookiesPressingPerHouer = []
    this.totalcookiesperday = 0;
    resturent.push(this)
}


// calculating custumer per hour

Resturent.prototype.calcucustumerperhour = function () {
    for (let i = 0; i < workinghour.length; i++) {
        this.custumerperhour.push(Math.floor(random(this.mincust, this.maxcust)));
        // console.log();
    }
}
// custumer per hour * avg cookies give us cookies per hour
Resturent.prototype.calcucookiesPressingPerHouer = function () {
    for (let i = 0; i < workinghour.length; i++) {
        this.cookiesPressingPerHouer.push(Math.floor(this.custumerperhour[i] * this.avgcookies));
        this.totalcookiesperday += this.cookiesPressingPerHouer[i]
    }
}




console.log(resturent);


// gitting div element

let parent = document.getElementById('parent')
console.log(parent);
// making a table
let table = document.createElement('table')
parent.appendChild(table);
// making the header row of the table 
function makeheader() {
    let headerRow = document.createElement('tr')

    table.appendChild(headerRow)
    // first element in the first row
    let firsthead = document.createElement('th')
    headerRow.appendChild(firsthead)
    firsthead.textContent = "our shop"

    // for loop to make the hour in the first row
    for (i = 0; i < workinghour.length; i++) {
        let tabhead = document.createElement('th')
        headerRow.appendChild(tabhead)
        tabhead.textContent = workinghour[i]
    }
    // last element in the first row
    let lastheding = document.createElement('th')
    headerRow.appendChild(lastheding)
    lastheding.textContent = "daily location total"


}

// creating a function for making the name colom

Resturent.prototype.resttable = function () {
    let datarow = document.createElement('tr')
    table.appendChild(datarow)

    resName = document.createElement('td')
    datarow.appendChild(resName)
    resName.textContent = this.locationName;
    for (let i = 0; i < workinghour.length; i++) {
        let tdElement = document.createElement('td')
        tdElement.textContent = this.cookiesPressingPerHouer[i];
        datarow.appendChild(tdElement);

    }
    let totalDataEachShope = document.createElement('td')
    datarow.appendChild(totalDataEachShope)
    console.log(this.totalcookiesperday);
    totalDataEachShope.textContent = this.totalcookiesperday

}
// creating a function for the footer 

let makeFooter = function () {
    let footerRow = document.createElement('tr')
    table.appendChild(footerRow)
    let footerTh = document.createElement('th');
    footerRow.appendChild(footerTh);
    footerTh.textContent = "totale"
    let totOfTotale = 0;
    for (let i = 0; i < workinghour.length; i++) {
        let totaleOfHour = 0;
        for (let j = 0; j < resturent.length; j++) {
            // console.log(resturent[j].cookiesPressingPerHouer[i]);
            totaleOfHour += resturent[j].cookiesPressingPerHouer[i]
            totOfTotale += resturent[j].cookiesPressingPerHouer[i]
        }
        let totale = document.createElement('th')
        footerRow.appendChild(totale)
        totale.textContent = totaleOfHour

    }

    let finalth = document.createElement('th')
    footerRow.appendChild(finalth)
    finalth.textContent = totOfTotale
}




//calling functions 
let seattile = new Resturent('siattle', 23, 65, 6.3)

let tokyo = new Resturent('tokyo', 3, 24, 1.2)

let dubai = new Resturent('dubai', 11, 38, 3.7)

let paris = new Resturent('paris', 20, 36, 2.3)
let lima = new Resturent('lima', 23, 65, 6.3)

makeheader();



for (i = 0; i < resturent.length; i++) {
    resturent[i].calcucustumerperhour();
    resturent[i].calcucookiesPressingPerHouer();
    resturent[i].resttable();
}
makeFooter();



// // forms
let newShope = document.getElementById('newShope')
newShope.addEventListener('submit', submitter)
function submitter(event) {

    event.preventDefault();
    console.log(event);
}




// preventDefault();




























// for (i = 0; i < resturent.length; i++) {
    //     let tabRow = document.createElement = ('tr')
    //     table.appendChild(tabRow)
    //     tabRow.textContent = resturent[i]

    // }





    // let Seattle = {
        //     locationName: 'seatile',
        //     mincust: 23,
//     maxcust: 65,
//     avgcookies: 6.3,
//     custumerperhour: [],
//     cookiesPressingPerHouer: [],
//     calcucustumerperhour: function () {
//         for (let i = 0; i < workinghour.length; i++) {
//             this.custumerperhour.push(Math.floor(random(this.mincust, this.maxcust)));
//         }


//     },
//     calcucookiesPressingPerHouer: function () {
//         for (let i = 0; i < workinghour.length; i++) {
//             this.cookiesPressingPerHouer.push(Math.floor(this.custumerperhour[i] * this.avgcookies));

//         }
//     },
//     render: function () {
//         let parent = document.getElementById('parent');
//         let unorderedliest = document.createElement('ul')
//         parent.appendChild(unorderedliest)
//         let shop = document.createElement('li')
//         unorderedliest.appendChild(shop)
//         shop.textContent = this.locationName
//         console.log(parent);
//         for (i = 0; i < workinghour.length; i++) {
//             // creat li 
//             let leastitem = document.createElement('li')
//             unorderedliest.appendChild(leastitem)
//             leastitem.textContent = `${workinghour[i]} ${this.cookiesPressingPerHouer[i]} cookies`



//         }
//     }



// }
// Seattle.calcucustumerperhour();

// Seattle.calcucookiesPressingPerHouer();
// console.log(Seattle);
// Seattle.render();




// let tokyo = {
//     locationName: 'tokyo',
//     mincust: 3,
//     maxcust: 24,
//     avgcookies: 1.2,
//     custumerperhour: [],
//     cookiesPressingPerHouer: [],
//     calcucustumerperhour: function () {
//         for (let i = 0; i < workinghour.length; i++) {
//             this.custumerperhour.push(Math.floor(random(this.mincust, this.maxcust)));
//         }


//     },
//     calcucookiesPressingPerHouer: function () {
//         for (let i = 0; i < workinghour.length; i++) {
//             this.cookiesPressingPerHouer.push(Math.floor(this.custumerperhour[i] * this.avgcookies));

//         }
//     },
//     render: function () {
//         let parent = document.getElementById('parent');
//         let unorderedliest = document.createElement('ul')
//         parent.appendChild(unorderedliest)
//         let shop = document.createElement('li')
//         unorderedliest.appendChild(shop)
//         shop.textContent = this.locationName
//         console.log(parent);
//         for (i = 0; i < workinghour.length; i++) {
//             // creat li 
//             let leastitem = document.createElement('li')
//             unorderedliest.appendChild(leastitem)
//             leastitem.textContent = `${workinghour[i]} ${this.cookiesPressingPerHouer[i]} cookies`



//         }
//     }



// }
// tokyo.calcucustumerperhour();

// tokyo.calcucookiesPressingPerHouer();
// console.log(tokyo);
// tokyo.render();




// let dubai = {
//     locationName: 'dubai',
//     mincust: 11,
//     maxcust: 38,
//     avgcookies: 3.7,
//     custumerperhour: [],
//     cookiesPressingPerHouer: [],
//     calcucustumerperhour: function () {
//         for (let i = 0; i < workinghour.length; i++) {
//             this.custumerperhour.push(Math.floor(random(this.mincust, this.maxcust)));
//         }


//     },
//     calcucookiesPressingPerHouer: function () {
//         for (let i = 0; i < workinghour.length; i++) {
//             this.cookiesPressingPerHouer.push(Math.floor(this.custumerperhour[i] * this.avgcookies));

//         }
//     },
//     render: function () {
//         let parent = document.getElementById('parent');
//         let unorderedliest = document.createElement('ul')
//         parent.appendChild(unorderedliest)
//         let shop = document.createElement('li')
//         unorderedliest.appendChild(shop)
//         shop.textContent = this.locationName
//         console.log(parent);
//         for (i = 0; i < workinghour.length; i++) {
//             // creat li 
//             let leastitem = document.createElement('li')
//             unorderedliest.appendChild(leastitem)
//             leastitem.textContent = `${workinghour[i]} ${this.cookiesPressingPerHouer[i]} cookies`



//         }
//     }



// }
// dubai.calcucustumerperhour();

// dubai.calcucookiesPressingPerHouer();
// console.log(dubai);
// dubai.render();


// let paris = {
//     locationName: 'paris',
//     mincust: 20,
//     maxcust: 38,
//     avgcookies: 2.3,
//     custumerperhour: [],
//     cookiesPressingPerHouer: [],
//     calcucustumerperhour: function () {
//         for (let i = 0; i < workinghour.length; i++) {
//             this.custumerperhour.push(Math.floor(random(this.mincust, this.maxcust)));
//         }


//     },
//     calcucookiesPressingPerHouer: function () {
//         for (let i = 0; i < workinghour.length; i++) {
//             this.cookiesPressingPerHouer.push(Math.floor(this.custumerperhour[i] * this.avgcookies));

//         }
//     },
//     render: function () {
//         let parent = document.getElementById('parent');
//         let unorderedliest = document.createElement('ul')
//         parent.appendChild(unorderedliest)
//         let shop = document.createElement('li')
//         unorderedliest.appendChild(shop)
//         shop.textContent = this.locationName
//         console.log(parent);
//         for (i = 0; i < workinghour.length; i++) {
//             // creat li 
//             let leastitem = document.createElement('li')
//             unorderedliest.appendChild(leastitem)
//             leastitem.textContent = `${workinghour[i]} ${this.cookiesPressingPerHouer[i]} cookies`



//         }
//     }



// }
// paris.calcucustumerperhour();

// paris.calcucookiesPressingPerHouer();
// console.log(paris);
// paris.render();



// let lima = {
//     locationName: 'lima',
//     mincust: 2,
//     maxcust: 16,
//     avgcookies: 4.6,
//     custumerperhour: [],
//     cookiesPressingPerHouer: [],
//     calcucustumerperhour: function () {
//         for (let i = 0; i < workinghour.length; i++) {
//             this.custumerperhour.push(Math.floor(random(this.mincust, this.maxcust)));
//         }


//     },
//     calcucookiesPressingPerHouer: function () {
//         for (let i = 0; i < workinghour.length; i++) {
//             this.cookiesPressingPerHouer.push(Math.floor(this.custumerperhour[i] * this.avgcookies));

//         }
//     },
//     render: function () {
//         let parent = document.getElementById('parent');
//         let unorderedliest = document.createElement('ul')
//         parent.appendChild(unorderedliest)
//         let shop = document.createElement('li')
//         unorderedliest.appendChild(shop)
//         shop.textContent = this.locationName
//         console.log(parent);
//         for (i = 0; i < workinghour.length; i++) {
//             // creat li 
//             let leastitem = document.createElement('li')
//             unorderedliest.appendChild(leastitem)
//             leastitem.textContent = `${workinghour[i]} ${this.cookiesPressingPerHouer[i]} cookies`



//         }
//     }



// }
// lima.calcucustumerperhour();






// lima.calcucookiesPressingPerHouer();
// console.log(lima);
// lima.render();















// console.log(Resturent);

// calcucustumerperhour();
// lima.calcucookiesPressingPerHouer();
// console.log(lima);
// lima.render();


// console.log(seattile);
// console.log(Resturent);
// seattile.calcucustumerperhour();
// seattile.calcucookiesPressingPerHouer();
