canvas = document.getElementById("my canvas");
ctx-canvas.getcontext("2d");

ctx.beginpath();
ctx.strokstyle = "blue";
ctx.linewidth=4;
ctx.rect(150,143,430,200);
ctx.strok();

ctx.beginpath();
ctx.strokstyle = "yellow";
ctx.linewidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.strok();

ctx.beginpath();
ctx.strokstyle = "black";
ctx.linewidth=5;
ctx.arc(350,210,40,0,2*Math.PI);
ctx.strok();

ctx.beginpath();
ctx.strokstyle = "green";
ctx.linewidth=5;
ctx.arc(450,210,40,0,2*Math.PI);
ctx.strok();

ctx.beginpath();
ctx.strokstyle = "red";
ctx.linewidth=5;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.strok();