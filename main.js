var canvas= new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var image_object="";

function player_update(){
fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;


    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x

    });
    canvas.add(player_object);
})

}
function new_image(get_image){
fabric.Image.fromURL(get_image,function(Img){
image_object=Img;


image_object.scaleToWidth(block_image_width);
image_object.scaleToHeight(block_image_height);
image_object.set({
        top:player_y,
        left:player_x

    });
    canvas.add(image_object);
});


}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){

keypressed=e.keyCode;
console.log(keypressed);

if(keypressed=="67"){
console.log("c");
new_image("cloud.jpg");
}

if(keypressed=="68"){
console.log("d");
new_image("dark_green.png");
}

if(keypressed=="71"){
    console.log("g");
    new_image("ground.png");
    }

    if(keypressed=="82"){
        console.log("r");
        new_image("roof.jpg");

    }

    if(keypressed=="84"){
        console.log("t");
        new_image("trunk.jpg");

    }

    if(keypressed=="85"){
        console.log("u");
        new_image("unique.png");

    }

    if(keypressed=="87"){
        console.log("w");
        new_image("wall.jpg");

    }
    if(keypressed=="89"){
        console.log("y");
        new_image("yellow_wall.png");

    }

    if(keypressed=="80"&& e.shiftKey){
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;

    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='38'){

        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='65'){
        undo();
        console.log("a");
    }
}
function up(){

if(player_y>=0){

    player_y=player_y - block_image_height;


canvas.remove(player_object);
player_update();

}

}
function down(){

    if(player_y<=500){

        player_y=player_y + block_image_height;


        canvas.remove(player_object);
        player_update();
    }
}
function right(){

    if(player_x<=800){

        player_x=player_x + block_image_width;

        canvas.remove(player_object);
        player_update();
    }
}
function left(){

    if(player_x>=0){

        player_x=player_x- block_image_width;

        canvas.remove(player_object);
        player_update();
    }
}
function undo(){
    canvas.remove(image_object);
}