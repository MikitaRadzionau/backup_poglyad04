let http = new XMLHttpRequest();
http.open('get', "/data/videos.json", true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let videos = JSON.parse(this.responseText);
      let output = "";
      for(let item of videos){
        output += `
        <div class="vid-list">
        <a href="/play-video"><img src="${item.image}" alt="няма куплинова" class="video"></a>
        <div class="flex-div">
        <a href="/play-video"><img src="${item.icon}" alt="няма куплинова" class="video"></a>
            <div class="vid-info">
                <a href="/play-video">${item.title}</a>
                <p>${item.name}</p>
                <p>${item.view} · ${item.data}</p>
            </div>
        </div>
    </div>
        `;
      }
      document.querySelector(".list-container").innerHTML = output;
   }
}