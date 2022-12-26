function setup()
{
    canvas=createCanvas(640, 480);
    canvas.position(100, 500);
    video=createCapture(VIDEO);
    video.hide(),
    tint_color=""
}

function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot()
{
    save('Ali.png');
}

function Filtro()
{
    tint_color=document.getElementById("Color").value;
}