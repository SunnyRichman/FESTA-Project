function _deleteAlbum(title,length){
    /* After admin click on button "Delete this album?" 
    it will pass album's title and number of songs in the album as a parameter*/

    if(confirm(`Are you sure to delete album ${title}`)){
        if(length==0){
            fetch("http://localhost:3100/deleteAlbum/"+title, {method: "DELETE"})
                .then((res) => res.json()) // Get JSON from the response
                .then((data) => {
                alert(`Album ${data.message} has been remove successfully`);
                window.location.href = "/admin/home";
            }).catch((err) => console.log(err));
        }else{
            fetch("http://localhost:3100/callDetail/"+title)
            .then((res) => res.json()) // Get JSON from the response
            .then((data) => {
                for(let i=0;i<data.length;i++){
                    deleteSong1(title,data[i].songName);
                }
                fetch("http://localhost:3100/deleteAlbum/"+title, {method: "DELETE"})
                    .then((res) => res.json()) // Get JSON from the response
                    .then((data) => {
                    alert(`Album ${data.message} has been remove successfully`);
                    window.location.href = "/admin/home";
                }).catch((err) => console.log(err));
            }).catch((err) => console.log(err));
        }
        
    }else{
        alert(`Deleting canceled`);
    }
    
}

function deleteSong1(Album,_song){
    const deleteData ={album: Album, song: _song} ; 
    fetch("http://localhost:3100/deleteSong",{method: 'DELETE',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(deleteData)})
        .then((res) => res.json()) // Get JSON from the response
        .then((data) => {
    }).catch((err) => console.log(err));
    
}

function deleteSong(Album,_song){
    let _album = Album;
    
    if(confirm(`Are you sure to remove song ${_song}`)){
        const deleteData ={album: _album, song: _song} ; 
        fetch("http://localhost:3100/deleteSong",{method: 'DELETE',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(deleteData)})
            .then((res) => res.json()) // Get JSON from the response
            .then((data) => {
            alert(data.message);
            location.reload();
        }).catch((err) => console.log(err));
    }else{
        alert(`Deleting canceled`);
    }
    
}

var url = window.location.href;
var id = url.substring(url.lastIndexOf('/') + 1);
id = id.replace("%20"," ");

let rooturl = "http://localhost:3100/callDetail/"+id;
fetch(rooturl)
.then((res) => res.json()) // Get JSON from the response
.then((data) => {
    console.log(data);
    let right = document.getElementById("column_right");

    deleteAlbum = document.createElement("button");
    deleteAlbum.innerHTML = "<h3>Delete this album?</h3>"
    deleteAlbum.setAttribute("onclick", `_deleteAlbum("${id}",${data.length})`);
    right.appendChild(deleteAlbum);
        let title = document.getElementsByTagName("title");
        title[0].innerText = data[0].Title;
        let header = document.getElementsByTagName("header");
        header[0].innerHTML = "<h1>"+data[0].Title+"</h1>";

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
        td.setAttribute("style","width: 300px")
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

        let deleteSong = document.createElement("TD");
        deleteSong.innerHTML = "<button>Delete Song</button>"
        deleteSong.setAttribute("onclick",`deleteSong("${data[0].Title}","${data[i].songName}")`)
        deleteSong.setAttribute("style","width: 100px")

        track.innerText = `${i+1} `;
        songName.innerText = data[i].songName;
        duration.innerText = data[i].Duration;
        key.innerText = data[i]._Key;

        tr.appendChild(track);
        tr.appendChild(songName);
        tr.appendChild(duration);
        tr.appendChild(key);
        tr.appendChild(deleteSong);
        table.appendChild(tr);
    }

    right.appendChild(table);
    br = document.createElement("br");
    right.appendChild(br);
    }).catch((err) => console.log(err));