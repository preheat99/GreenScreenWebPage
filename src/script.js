var fgimage=null;var bgimage=null;
var fgcanvas,bgcanvas;
function loadFgImg()
{
  fgcanvas=document.getElementById("fgcan");
  var file=document.getElementById("fgfile");
  fgimage=new SimpleImage(file);
  fgimage.drawTo(fgcanvas);
}
function loadBgImg()
{
  bgcanvas=document.getElementById("bgcan");
  var file=document.getElementById("bgfile");
  bgimage=new SimpleImage(file);
  bgimage.drawTo(bgcanvas);
}
function createcomposite()
{
  /*if(image1==null || !image1.complete())
  {alert("Foreground image not uplaoded");return;}
  if(image2==null || !image2.complete())
  {alert("Background image not uploaded");return;}
  clearCanvas();*/
  var output=new SimpleImage(fgimage.getWidth(),fgimage.getHeight());
  for(var pix of fgimage.values())
    {
      var x=pix.getX();
      var y=pix.getY();
      if(pix.getGreen()>pix.getRed()+pix.getBlue())
        {
          var bgpixel=bgimage.getPixel(x,y);
          output.setPixel(x,y,bgpixel);
        }
  else
    output.setPixel(x,y,pix)
;    }
  return output;
}
function doGreenScreen()
{
  clear();
  var merger=createcomposite();
  merger.drawTo(fgcanvas);
}
function clear()
{
  var context = fgcanvas.getContext("2d");
  context.clearRect(0,0,fgcanvas.width,fgcanvas.height);
  context = bgcanvas.getContext("2d");
  context.clearRect(0,0,bgcanvas.width,bgcanvas.height);
}
