
let workinghour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am']
// console.log(workinghour);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let Seattle = {
    locationName: 'seatile',
    mincust: 23,
    maxcust: 65,
    avgcookies: 6.3,
    custumerperhour: [],
    cookiesPressingPerHouer: [],
    calcucustumerperhour: function () {
        for (let i = 0; i < workinghour.length; i++) {
            this.custumerperhour.push(random(this.mincust, this.maxcust));
        }


    },
    calcucookiesPressingPerHouer: function () {
        for (let i = 0; i < workinghour.length; i++) {
            this.cookiesPressingPerHouer.push(this.custumerperhour[i] * this.avgcookies);

        }
    },
    render: function () {
        let parent = document.getElementById('parent');
        let unorderedliest = document.createElement('ul')
        parent.appendChild(unorderedliest)
        let shop = document.createElement('li')
        unorderedliest.appendChild(shop)
        shop.textContent = this.locationName
        console.log(parent);
        for (i = 0; i < workinghour.length; i++) {
            // creat li 
            let leastitem = document.createElement('li')
            unorderedliest.appendChild(leastitem)
            leastitem.textContent = `${workinghour[i]} ${this.cookiesPressingPerHouer[i]} cookies`



        }
    }



}
Seattle.calcucustumerperhour();

Seattle.calcucookiesPressingPerHouer();
console.log(Seattle);
Seattle.render();




let tokyo = {
    locationName: 'tokyo',
    mincust: 3,
    maxcust: 24,
    avgcookies: 1.2,
    custumerperhour: [],
    cookiesPressingPerHouer: [],
    calcucustumerperhour: function () {
        for (let i = 0; i < workinghour.length; i++) {
            this.custumerperhour.push(random(this.mincust, this.maxcust));
        }


    },
    calcucookiesPressingPerHouer: function () {
        for (let i = 0; i < workinghour.length; i++) {
            this.cookiesPressingPerHouer.push(this.custumerperhour[i] * this.avgcookies);

        }
    },
    render: function () {
        let parent = document.getElementById('parent');
        let unorderedliest = document.createElement('ul')
        parent.appendChild(unorderedliest)
        let shop = document.createElement('li')
        unorderedliest.appendChild(shop)
        shop.textContent = this.locationName
        console.log(parent);
        for (i = 0; i < workinghour.length; i++) {
            // creat li 
            let leastitem = document.createElement('li')
            unorderedliest.appendChild(leastitem)
            leastitem.textContent = `${workinghour[i]} ${this.cookiesPressingPerHouer[i]} cookies`



        }
    }



}
tokyo.calcucustumerperhour();

tokyo.calcucookiesPressingPerHouer();
console.log(tokyo);
tokyo.render();




let dubai = {
    locationName: 'dubai',
    mincust: 11,
    maxcust: 38,
    avgcookies: 3.7,
    custumerperhour: [],
    cookiesPressingPerHouer: [],
    calcucustumerperhour: function () {
        for (let i = 0; i < workinghour.length; i++) {
            this.custumerperhour.push(random(this.mincust, this.maxcust));
        }


    },
    calcucookiesPressingPerHouer: function () {
        for (let i = 0; i < workinghour.length; i++) {
            this.cookiesPressingPerHouer.push(this.custumerperhour[i] * this.avgcookies);

        }
    },
    render: function () {
        let parent = document.getElementById('parent');
        let unorderedliest = document.createElement('ul')
        parent.appendChild(unorderedliest)
        let shop = document.createElement('li')
        unorderedliest.appendChild(shop)
        shop.textContent = this.locationName
        console.log(parent);
        for (i = 0; i < workinghour.length; i++) {
            // creat li 
            let leastitem = document.createElement('li')
            unorderedliest.appendChild(leastitem)
            leastitem.textContent = `${workinghour[i]} ${this.cookiesPressingPerHouer[i]} cookies`



        }
    }



}
dubai.calcucustumerperhour();

dubai.calcucookiesPressingPerHouer();
console.log(dubai);
dubai.render();


let paris = {
    locationName: 'paris',
    mincust: 20,
    maxcust: 38,
    avgcookies: 2.3,
    custumerperhour: [],
    cookiesPressingPerHouer: [],
    calcucustumerperhour: function () {
        for (let i = 0; i < workinghour.length; i++) {
            this.custumerperhour.push(random(this.mincust, this.maxcust));
        }


    },
    calcucookiesPressingPerHouer: function () {
        for (let i = 0; i < workinghour.length; i++) {
            this.cookiesPressingPerHouer.push(this.custumerperhour[i] * this.avgcookies);

        }
    },
    render: function () {
        let parent = document.getElementById('parent');
        let unorderedliest = document.createElement('ul')
        parent.appendChild(unorderedliest)
        let shop = document.createElement('li')
        unorderedliest.appendChild(shop)
        shop.textContent = this.locationName
        console.log(parent);
        for (i = 0; i < workinghour.length; i++) {
            // creat li 
            let leastitem = document.createElement('li')
            unorderedliest.appendChild(leastitem)
            leastitem.textContent = `${workinghour[i]} ${this.cookiesPressingPerHouer[i]} cookies`



        }
    }



}
paris.calcucustumerperhour();

paris.calcucookiesPressingPerHouer();
console.log(paris);
paris.render();



let lima = {
    locationName: 'lima',
    mincust: 2,
    maxcust: 16,
    avgcookies: 4.6,
    custumerperhour: [],
    cookiesPressingPerHouer: [],
    calcucustumerperhour: function () {
        for (let i = 0; i < workinghour.length; i++) {
            this.custumerperhour.push(random(this.mincust, this.maxcust));
        }


    },
    calcucookiesPressingPerHouer: function () {
        for (let i = 0; i < workinghour.length; i++) {
            this.cookiesPressingPerHouer.push(this.custumerperhour[i] * this.avgcookies);

        }
    },
    render: function () {
        let parent = document.getElementById('parent');
        let unorderedliest = document.createElement('ul')
        parent.appendChild(unorderedliest)
        let shop = document.createElement('li')
        unorderedliest.appendChild(shop)
        shop.textContent = this.locationName
        console.log(parent);
        for (i = 0; i < workinghour.length; i++) {
            // creat li 
            let leastitem = document.createElement('li')
            unorderedliest.appendChild(leastitem)
            leastitem.textContent = `${workinghour[i]} ${this.cookiesPressingPerHouer[i]} cookies`



        }
    }



}
lima.calcucustumerperhour();

lima.calcucookiesPressingPerHouer();
console.log(lima);
lima.render();