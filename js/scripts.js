'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // ***** NARUTO ******
    function getNaruto() {
        fetch(`https://animechan.vercel.app/api/quotes/character?name=naruto`)
            .then(function (response) {
                return response.json();
            })
            .then(function (quoteArray) {
                randomizeNaruto(quoteArray);
            })
            .catch(function (error) {
                console.error("ERROR: ", error);
            })

    }

    function randomizeNaruto(quoteArray) {
        const random = Math.floor(Math.random() * quoteArray.length);
        console.log(random, quoteArray[random]);
        const narutoQuote = document.querySelector('#narutoQuote');
        narutoQuote.innerText = quoteArray[random].quote;
    }

    const narutoBtn = document.querySelector('#narutoBtn');

    narutoBtn.addEventListener('click', function () {
        getNaruto();
    })

    // ***** SASUKE ******
    function getSasuke() {
        fetch(`https://animechan.vercel.app/api/quotes/character?name=sasuke%20uchiha`)
            .then(function (response) {
                return response.json();
            })
            .then(function (quoteArray) {
                randomizeSasuke(quoteArray);
            })
            .catch(function (error) {
                console.error("ERROR: ", error);
            })

    }

    function randomizeSasuke(quoteArray) {
        const random = Math.floor(Math.random() * quoteArray.length);
        console.log(random, quoteArray[random]);
        const sasukeQuote = document.querySelector('#sasukeQuote');
        sasukeQuote.innerText = quoteArray[random].quote;
    }

    const sasukeBtn = document.querySelector('#sasukeBtn');

    sasukeBtn.addEventListener('click', function () {
        getSasuke();
    })


    //**** SHIKAMARU ******
    function getShikamaru() {
        fetch(`https://animechan.vercel.app/api/quotes/character?name=nara%20shikamaru`)
            .then(function (response) {
                return response.json();
            })
            .then(function (quoteArray) {
                randomizeShikamaru(quoteArray);
            })
            .catch(function (error) {
                console.error("ERROR: ", error);
            })

    }

    function randomizeShikamaru(quoteArray) {
        const random = Math.floor(Math.random() * quoteArray.length);
        console.log(random, quoteArray[random]);
        const shikamaruQuote = document.querySelector('#shikamaruQuote');
        shikamaruQuote.innerText = quoteArray[random].quote;
    }

    const shikamaruBtn = document.querySelector('#shikamaruBtn');

    shikamaruBtn.addEventListener('click', function () {
        getShikamaru();
    })

    //**** KAKASHI *****

    function getKakashi() {
        fetch(`https://animechan.vercel.app/api/quotes/character?name=kakashi`)
            .then(function (response) {
                return response.json();
            })
            .then(function (quoteArray) {
                randomizeKakashi(quoteArray);
            })
            .catch(function (error) {
                console.error("ERROR: ", error);
            })

    }

    function randomizeKakashi(quoteArray) {
        const random = Math.floor(Math.random() * quoteArray.length);
        console.log(random, quoteArray[random]);
        const kakashiQuote = document.querySelector('#kakashiQuote');
        kakashiQuote.innerText = quoteArray[random].quote;
    }

    const kakashiBtn = document.querySelector('#kakashiBtn');

    kakashiBtn.addEventListener('click', function () {
        getKakashi();
    })

    //**** ROCK LEE ****
    function getLee() {
        fetch(`https://animechan.vercel.app/api/quotes/character?name=rock%20lee`)
            .then(function (response) {
                return response.json();
            })
            .then(function (quoteArray) {
                randomizeLee(quoteArray);
            })
            .catch(function (error) {
                console.error("ERROR: ", error);
            })

    }

    function randomizeLee(quoteArray) {
        const random = Math.floor(Math.random() * quoteArray.length);
        console.log(random, quoteArray[random]);
        const leeQuote = document.querySelector('#leeQuote');
        leeQuote.innerText = quoteArray[random].quote;
    }

    const leeBtn = document.querySelector('#leeBtn');

    leeBtn.addEventListener('click', function () {
        getLee();
    })

    //**** ITACHI ****
    function getItachi() {
        fetch(`https://animechan.vercel.app/api/quotes/character?name=itachi%20uchiha`)
            .then(function (response) {
                return response.json();
            })
            .then(function (quoteArray) {
                randomizeItachi(quoteArray);
            })
            .catch(function (error) {
                console.error("ERROR: ", error);
            })

    }

    function randomizeItachi(quoteArray) {
        const random = Math.floor(Math.random() * quoteArray.length);
        console.log(random, quoteArray[random]);
        const itachiQuote = document.querySelector('#itachiQuote');
        itachiQuote.innerText = quoteArray[random].quote;
    }

    const itachiBtn = document.querySelector('#itachiBtn');

    itachiBtn.addEventListener('click', function () {
        getItachi();
    })

})

