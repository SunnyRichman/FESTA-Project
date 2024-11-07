// This code is the same as file "home.js", but this one is for admin page. 
//The difference between both file is on line 27.

let rooturl = "http://localhost:3100/callItems"
fetch(rooturl)
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
    a.href = `/admin/album/${data[i].Title}`; /* This will route to the detail page for admin. 
                                                Admin can delete either song or whole album via this page. */
    a.appendChild(div);
    display.appendChild(a);
}

}).catch((err) => console.log(err));