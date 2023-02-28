"use strict";
let canvas , context;

function setUp(){
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    drawTree(100, 100);
    drawTreeCricle(100, 100, 50, 0);
}

function drawTree(x,y){
    context.save();
    context.translate(x,y);
    context.beginPath();
    context.lineWidth = 10;
    context.strokeStyle = "brown";
    context.lineTo(0, 0);
    context.lineTo(0, -40);
    context.stroke();

    context.beginPath();
    context.fillStyle = "green";
    context.arc(0 ,-30, 20, 0, Math.PI * 2)
    context.fill();
    context.restore();
};
function drawTreeCricle(x, y, r, count){
    context.save();
    context.translate(x, y);
    for (let i = 0;i<count;i++){
        
    }
    context.restore();
}