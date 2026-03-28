let video = document.getElementById("video");
let upload = document.getElementById("upload");

let clips = [];

upload.onchange = function(e){
  let files = e.target.files;

  for(let file of files){
    let url = URL.createObjectURL(file);
    clips.push(url);
  }

  video.src = clips[0];
}

/* CUT */
function cut(){
  let time = video.currentTime;
  alert("Cut at: " + time);
}

/* AUDIO FEATURES */
function audio(){
  let choice = prompt("Voice: normal / deep / thin / robot");

  if(choice === "deep"){
    video.playbackRate = 0.7;
  }
  else if(choice === "thin"){
    video.playbackRate = 1.3;
  }
  else if(choice === "robot"){
    video.playbackRate = 1.8;
  }
  else{
    video.playbackRate = 1;
  }
}

/* EFFECTS */
function effects(){
  let effect = prompt("Effect: hdr / bw / vintage");

  if(effect === "hdr"){
    video.style.filter = "contrast(1.5) saturate(1.5)";
  }
  else if(effect === "bw"){
    video.style.filter = "grayscale(1)";
  }
  else if(effect === "vintage"){
    video.style.filter = "sepia(1)";
  }
}

/* EXPORT */
function exportVideo(){
  alert("⚠️ Real export ke liye FFmpeg backend chahiye");
}
