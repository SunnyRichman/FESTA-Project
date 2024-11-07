function _delete(){
    alert("Admin can delete both songs or album in each album's detail page");
}

function songAdding(){
    let title = document.getElementById("addSongTitle").value;
    let album = document.getElementById("addToAlbum").value;
    let length = document.getElementById("addSonglength").value;
    let key = document.getElementById("addSongKey").value;
    if(confirm(`Are you sure to add song ${title} [${length}] key: ${key} to album ${album}`)){
        const addSong = {song:{aTitle: album, songName: title, Duration: length, _Key: key}};
        fetch("http://localhost:3100/addSong",{method: 'POST',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(addSong)})
            .then((res) => res.json()) // Get JSON from the response
            .then((data) => {
            alert(data.message);
        }).catch((err) => console.log(err));
    }else{
        alert("Adding song canceled");
    }
}

function songUpdate(){
    let Title = document.getElementById("put_title").value;
    let Property = document.getElementById("put_property").value;
    let Value = document.getElementById("new_value").value;
    let Album = document.getElementById("editSong").value;
    if(confirm(`Are you sure to update song ${Title} from album ${Album} [${Property}: ${Value}]`)){
        const updateSong = {song:{song: Title, property: Property, title: Album, value: Value}};
        fetch("http://localhost:3100/updateSong",{method: 'PUT',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(updateSong)})
            .then((res) => res.json()) // Get JSON from the response
            .then((data) => {
            alert(data.message);
        }).catch((err) => console.log(err));
    }else{
        alert("Update song canceled");
    }
}

function addAlbum(){
    let title = document.getElementById("addAlbum_title").value;
    let price = document.getElementById("addAlbum_price").value;
    let artist = document.getElementById("addAlbum_artist").value;
    let label = document.getElementById("addAlbum_label").value;
    let cover = document.getElementById("addAlbum_cover").value;
    let type = document.getElementById("addAlbum_type").value;
    let year = document.getElementById("addAlbum_year").value;
    let disc = document.getElementById("addAlbum_disc").value;
    let tape = document.getElementById("addAlbum_tape").value;

    if(confirm(`Please check if these information correct or not\n[ [${type}]${title} (${year})\n${artist}-${label}\n${cover}\n${disc} disc(s) ${tape} tape(s)\n${price} ฿]`)){
        const addAlbum = {album:{Title: title, Price: price, cover: cover, cassetteTape: tape, vinylDisc: disc, label: label, contributeArtist: artist, albumType: type, releaseYear: year}};
        fetch("http://localhost:3100/addAlbum",{method: 'POST',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(addAlbum)})
            .then((res) => res.json()) // Get JSON from the response
            .then((data) => {
            alert(data.message);
        }).catch((err) => console.log(err));
    }else{
        alert("Update song canceled");
    }
}

function updateAlbum(){
    let Album = document.getElementById("editAlbum").value;
    let Property = document.getElementById("album_property").value;
    let Value = document.getElementById("album_value").value;
    if(confirm(`Are you sure to update album ${Album} [${Property}: ${Value}]`)){
        fetch("http://localhost:3100/callDetail/"+Album)
            .then((res) => res.json()) // Get JSON from the response
            .then((data) => {
            const updateAlbum = {song:{property: Property, title: Album, value: Value}};
            fetch("http://localhost:3100/updateAlbum",{method: 'PUT',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(updateAlbum)})
            .then((res) => res.json()) // Get JSON from the response
            .then((data) => {
            alert(data.message);
            }).catch((err) => console.log(err));
        }).catch((err) => console.log(err));
        
    }else{
        alert("Update song canceled");
    }
}

function deleteAlbum(title){
    if(confirm(`Are you sure to delete album ${title}`)){
        fetch("http://localhost:3100/deleteAlbum/"+title)
            .then((res) => res.json()) // Get JSON from the response
            .then((data) => {
            alert(`Album ${data.message} has been remove successfully`);
        }).catch((err) => console.log(err));
    }else{
        alert(`Deleting canceled`);
    }
    
}

function deleteSong(_song){
    let _album = window.location.href;
    const deleteData ={album: _album, song: _song} ; 
    fetch("http://localhost:3100/deleteSong",{method: 'DELETE',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(deleteData)})
    .then((res) => res.json()) // Get JSON from the response
    .then((data) => {
        alert(`Album ${data.message} has been remove successfully`)
    }).catch((err) => console.log(err));
}

fetch("http://localhost:3100/callAlbum")
.then((res) => res.json()) // Get JSON from the response
.then((data) => {
    console.log(data);
    let add_to_album = document.getElementById("addToAlbum");
    let editSong = document.getElementById("editSong");
    let editalbum = document.getElementById("editAlbum");
    var option;
    for(let i=0;i<data.length;i++){
        option = document.createElement("option");
        option.setAttribute("value",data[i].Title);
        option.innerText = data[i].Title;
        add_to_album.appendChild(option);
        option = document.createElement("option");
        option.setAttribute("value",data[i].Title);
        option.innerText = data[i].Title;
        editSong.appendChild(option);
        option = document.createElement("option");
        option.setAttribute("value",data[i].Title);
        option.innerText = data[i].Title;
        editalbum.appendChild(option);
    }
}).catch((err) => console.log(err));

fetch("http://localhost:3100/callItems")
.then((res) => res.json()) // Get JSON from the response
.then((data) => {
    // console.log(data);
    let table = document.getElementById("albumTable");
    var tr;
    for (let i=0;i<data.length;i++){
        tr = document.createElement("TR");

        var title = document.createElement("TD");
        title.innerHTML = `<a href="/admin/album/${data[i].Title}" style="text-decoration: none; color: #006C6C">${data[i].Title}</a>`;

        var artist = document.createElement("TD");
        artist.innerText = data[i].contributeArtist;

        var label = document.createElement("TD");
        label.innerText = data[i].label;

        var cover = document.createElement("TD");
        cover.innerHTML = `<img style="width: 50px; height: 50px" src = "${data[i].cover}">`

        var type = document.createElement("TD");
        type.innerText = data[i].albumType;

        var year = document.createElement("TD");
        year.innerText = data[i].releaseYear;

        var price = document.createElement("TD");
        price.innerText = data[i].Price;

        var tape = document.createElement("TD");
        tape.innerText = data[i].cassetteTape;

        var disc = document.createElement("TD");
        disc.innerText = data[i].vinylDisc;

        tr.appendChild(title);  tr.appendChild(artist);  tr.appendChild(label);  tr.appendChild(cover);
        tr.appendChild(type);  tr.appendChild(year);  tr.appendChild(price);  tr.appendChild(disc);
        tr.appendChild(tape); table.appendChild(tr);
    }
}).catch((err) => console.log(err));