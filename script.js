a=0;
function menuOpen() {
    switch(a) {
        case 0:{
            document.getElementById("menu").innerHTML="";
            setTimeout(()=>{document.getElementById("menu").style="border-radius:0%;transition:0.5s;"},1)
            setTimeout(()=>{document.getElementById("menu").style="width:30%;height:100%;border-radius:0%;transition:0.5s;"},500)
            setTimeout(()=>{document.getElementById("menuContainer").innerHTML += "<div id='close' onclick='menuClose()'><img src='images/close.png' alt='Zamknij'><div>";},1000)
            setTimeout(()=>{document.getElementById("menu").innerHTML="<br><ul><li><a href='StronaGlowna.html' target='frame'>Strona Główna</a></li><li><a href='London.html' target='frame'>Londyn</a></li><li><a href='Birmingham.html' target='frame'>Birmingham</a></li><li><a href='Leeds.html' target='frame'>Leeds</a></li><li><a href='Glasgow.html' target='frame'>Glasgow</a></li><li><a href='Sheffield.html' target='frame'>Sheffield</a></li><li><a href='Manchester.html' target='frame'>Manchester</a></li><li><a href='Edynburg.html' target='frame'>Edynburg</a></li></ul>"},1000);
            a=1;
            break;
        }
        case 1:{
            a=0;
            menuClose();
            break;
        }
    }
}
function menuClose() {
    document.getElementById("menu").innerHTML="";
    document.getElementById("close").innerHTML="";
    document.getElementById("close").style="heihght:0px;width:0px;";
    document.getElementById("menu").style="width:50px;height:50px;border-radius:0%;transition:0.5s;"
    setTimeout(()=>{document.getElementById("menu").style="border-radius:100%;transition:0.5s;"},500)
    setTimeout(()=>{document.getElementById("menuContainer").innerHTML = "<div id='menu' onclick='menuOpen()'><img src='images/menu.png' alt='Menu'></div>"},1000);
    a=0;
}