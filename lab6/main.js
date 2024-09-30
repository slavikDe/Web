const btn = document.getElementsByClassName('btn_download')[0];

async function getJson(url) {
    let res = await fetch(url)
    return await res.json();
}


btn.addEventListener("click", async () => {
    getJson("https://randomuser.me/api?results=5").then((res) => {
        setValueToHtml(res.results);
    })
});

function setValueToHtml(users){
    const div = document.getElementsByClassName('box');

    for (let i = 0; i < users.length; i++) {
        div[i].querySelector('img').src = users[i].picture.large;
        div[i].querySelectorAll('p')[0].innerHTML = "Cell: <br>" + users[i].cell;
        div[i].querySelectorAll('p')[1].innerHTML = "City: <br>" + users[i].location.city;
        div[i].querySelectorAll('p')[2].innerHTML = "Postcode: <br>" + users[i].location.postcode;
        div[i].querySelectorAll('p')[3].innerHTML = "Email: <br>" + users[i].email;
    }
}


// picture
// cell cell
// city location.city
// postcode location.postcode
// email email
