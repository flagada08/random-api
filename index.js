const quote = document.getElementById('quote');

const getQuote = () => {
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
        quote.innerHTML = data.content;
    });

    fetch('https://picsum.photos/1600/1000')
    .then((res) => {
        document.getElementById('pic').innerHTML = `<img src=${res.url} />`
    })
    // try {
    //     const response1 = await fetch('https://api.quotable.io/random')
    //     const data = await response1.json();
    //     quote.innerHTML = data.content;

    //     const response2 = await fetch('https://picsum.photos/1600/1000')
    //     const data2 = await response2;
    //     document.getElementById('pic').innerHTML = `<img src=${data2.url} />`
    //     }
    // catch (err) {
    //     console.log(err)
    // }
};

quote.addEventListener('click', () => getQuote());
getQuote();