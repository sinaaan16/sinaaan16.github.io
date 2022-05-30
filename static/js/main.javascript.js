function goToVideoPage(){
    let link = document.querySelector('#link').value;
    let player = document.querySelector('#player');
    if(link != ''){
        player.src = link;
        document.getElementById("player").style.display = 'block';
    }
}