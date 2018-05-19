function playNote(e) {
    
    keyCode = e.keyCode;
    keyCode = 'key-'.concat(parseInt(keyCode));
    const note = document.getElementById(keyCode);
    var key = document.getElementsByClassName(keyCode)[0];
    key.classList.add("pressed");
    if(!note) {return;}
    console.log("note");
    console.log(key);
    note.currentTime=0;
    note.play();
    
}

function stopNote(e) {
    
    keyCode = e.keyCode;
    keyCode = 'key-'.concat(parseInt(keyCode));
    const note = document.getElementById(keyCode);
    var key = document.getElementsByClassName(keyCode)[0];
    key.classList.remove("pressed");
    if(!note) {return;}
    console.log("stop");
    note.currentTime = 0;
    note.pause();

}

function howto() {
    window.alert("q, w, e, r, t, y, u, i, o, p, [, ],\\ <|== notes")
}

addEventListener("keydown",playNote);
addEventListener("keyup",stopNote);