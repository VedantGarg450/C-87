var canvas = new fabric.Canvas("myCanvas");
playerX = 100;
playerY = 100;
BlockWidth = 30;
BlockHeight = 30;
var Player_object= "";
var block_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
    Player_object= Img;
    Player_object.scaleToWidth(140);
    Player_object.scaleToHeight(140);
    Player_object.set({
    top:playerY,
    left:playerX
    }
    );
    canvas.add(Player_object);
    }
    );
}
function block_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    block_object= Img;
    block_object.scaleToWidth(BlockWidth);
    block_object.scaleToHeight(BlockHeight);
    block_object.set({
    top:playerY,
    left:playerX
    }
    );
    canvas.add(block_object);
    }
    );
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="84"){
        console.log("t");
        block_update("trunk.jpg");
    }
    if(keyPressed=="68"){
        console.log("d");
        block_update("dark_green.png");
    }
    if(keyPressed=="76"){
        console.log("l");
        block_update("light_green.png");
    }
    if(keyPressed=="71"){
        console.log("g");
        block_update("ground.png");
    }
    if(keyPressed=="87"){
        console.log("w");
        block_update("wall.jpg");
    }
    if(keyPressed=="89"){
        console.log("y");
        block_update("yellow_wall.png");
    }
    if(keyPressed=="85"){
        console.log("u");
        block_update("unique.png");
    }
    if(keyPressed=="82"){
        console.log("r");
        block_update("roof.jpg");
    }
    if(keyPressed=="67"){
        console.log("c");
        block_update("cloud.jpg");
    }
    if(e.shiftKey==true && keyPressed== "80"){
        console.log("p");
        BlockWidth= BlockWidth+10;
        BlockHeight= BlockHeight+10;
        document.getElementById("width").innerHTML=BlockWidth;
        document.getElementById("height").innerHTML=BlockHeight;

    }
    if(e.shiftKey==true && keyPressed== "77"){
        console.log("m");
        BlockWidth= BlockWidth-10;
        BlockHeight= BlockHeight-10;
        document.getElementById("width").innerHTML=BlockWidth;
        document.getElementById("height").innerHTML=BlockHeight;

    }
    if(keyPressed== "37"){
        left()
    }
    if(keyPressed== "38"){
        up()
    }
    if(keyPressed== "39"){
        right()
    }
    if(keyPressed== "40"){
        down()
    }
}