var url = window.location.href;
var id = url.substring(url.lastIndexOf('/') + 1);


let rooturl = "http://localhost:3100/callDetail/"+id;
fetch(rooturl)
.then((res) => res.json()) // Get JSON from the response
.then((data) => {
console.log(data);
let title = document.getElementsByTagName("title");
id = id.replaceAll("%20"," ");
title[0].innerText = id;
let header = document.getElementsByTagName("header");
header[0].innerHTML = "<h1>"+id+"</h1>";
let left = document.getElementById("column_left");
var cover = document.createElement("img");
cover.src = data[0].cover;
var h3 = document.createElement("h3");
h3.innerText = `${data[0].Price} Baht [ ${data[0].vinylDisc} Vinyl Disc(s) ${data[0].cassetteTape} Cassette Tape(s) ]`;
h3.setAttribute("id","price");
left.appendChild(cover);
var br = document.createElement("br");
left.appendChild(br);
left.appendChild(h3);

let right = document.getElementById("column_right");
var h1 = document.createElement("h1");
h1.innerText = `(${data[0].albumType}) ${data[0].Title} [${data[0].releaseYear}]\n`;
right.appendChild(h1);
var h2 = document.createElement("h2");
h2.innerText = `${data[0].contributeArtist} - ${data[0].label}`;
h2.setAttribute("id","artist");
br = document.createElement("br");
right.appendChild(br);
right.appendChild(h2);
br = document.createElement("br");
right.appendChild(br);
let table = document.createElement("TABLE");
let td;

let tr = document.createElement("TR");
    td = document.createElement("TD");
    td.setAttribute("style","width: 10%")
    td.innerText = "Track";
    tr.appendChild(td);
    td = document.createElement("TD");
    td.innerText = "Title";
    td.setAttribute("style","width: 400px")
    tr.appendChild(td);
    td = document.createElement("TD");
    td.innerText = "Duration";
    td.setAttribute("style","width: 100px")
    tr.appendChild(td);
    td = document.createElement("TD");
    td.innerText = "Key"
    td.setAttribute("style","width: 50px")
    tr.appendChild(td);
    table.appendChild(tr);

for(let i=0;i<data.length;i++){
    let tr = document.createElement("TR");

    let track = document.createElement("TD");
    let songName = document.createElement("TD");
    let duration = document.createElement("TD");
    let key = document.createElement("TD");

    if(i%2==0){
        track.setAttribute("style","background-color: #006C6C; color: #FFFFC9");
        songName.setAttribute("style","background-color: #006C6C; color: #FFFFC9");
        duration.setAttribute("style","background-color: #006C6C; color: #FFFFC9");
        key.setAttribute("style","background-color: #006C6C; color: #FFFFC9");
    }else{
        track.setAttribute("style","color: #006C6C");
        songName.setAttribute("style","color: #006C6C");
        duration.setAttribute("style","color: #006C6C");
        key.setAttribute("style","color: #006C6C");
    }

    track.innerText = `${i+1} `;
    songName.innerText = data[i].songName;
    duration.innerText = data[i].Duration;
    key.innerText = data[i]._Key;

    tr.appendChild(track);
    tr.appendChild(songName);
    tr.appendChild(duration);
    tr.appendChild(key);
    table.appendChild(tr);
}

right.appendChild(table);
br = document.createElement("br");
right.appendChild(br);


}).catch((err) => console.log(err));