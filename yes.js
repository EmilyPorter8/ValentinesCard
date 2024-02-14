yes = document.getElementById("yes");

function enlargebutton()
{
var yes = document.getElementById("yes");
var curwidth = yes.clientWidth;
var curheight = yes.clientHeight;
var newwidth = curwidth * 1.2;
var newheight = curheight * 1.2;

yes.style.width = newwidth + "px";
yes.style.height = newheight + "px";
}