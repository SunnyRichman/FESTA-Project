function loadItem(){
    let url = window.location.href;
    let query = url.split("?");
    fetch("http://localhost:3100/callSearch?"+query[1])
    .then((res) => res.json()) // Get JSON from the response
    .then((data) => {
    console.log(data);

    let display = document.getElementById("product-display");
    for (let i=0;i<data.length;i++){
        var div = document.createElement("div");
        div.setAttribute("id","product");
        var title = document.createElement("h3");
        title.innerText = data[i].Title;
        var cover = document.createElement("img");
        cover.src = data[i].cover;
        var artist = document.createElement("h3");
        artist.setAttribute("style","font-style: italic")
        artist.innerText = data[i].contributeArtist;
        var price = document.createElement("p");
        price.innerText = data[i].Price;
        div.appendChild(title);
        div.appendChild(cover);
        div.appendChild(artist);
        div.appendChild(price);
        var a = document.createElement("a");
        a.href = `/search/${data[i].Title}`;
        a.appendChild(div);
        display.appendChild(a);
    }

    }).catch((err) => console.log(err));
}


