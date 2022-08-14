let orektika = [
{
	onoma: "Oiled Feta",
	timh: "4",
	pos:parseInt(0),
},
{
	onoma: "Fried Fries",
	timh: "3",
	pos:parseInt(0),
},
{
	onoma: "Tzatziki",
	timh: "2",
	pos:parseInt(0),
},
]

let kyriws = [
{
	onoma: "Grilled Chicken",
	timh: "8",
	pos:parseInt(0),
},
{
	onoma: "Pastitsio",
	timh: "10",
	pos:parseInt(0),
},
{
	onoma: "Tsipoura ",
	timh: "13",
	pos:parseInt(0),
},
]

let pota= [
{
	onoma: "Wine",
	timh: "11",
	pos:parseInt(0),
},
{
	onoma: "Liquer",
	timh: "12",
	pos:parseInt(0),
},
{
	onoma: "Soda ",
	timh: "3",
	pos:parseInt(0),
},
]




var price=" Price ";
var dollar="$ ";
let sum=0;
howmanytimesrun=parseInt(0);


function Refresh()
{  
let sel = document.getElementById("epiloges").value;


if ( "orektika" == sel )
{   


document.getElementById("customid1").innerHTML = orektika[0].onoma+ price+ orektika[0].timh + dollar;
document.getElementById("mikri1").src= "images/feta.jpg";
let adds=document.getElementsByClassName("add");

for (i=0; i<adds.length; i++)
{
adds[i].style.display="block";
}
document.getElementById("customid2").innerHTML = orektika[1].onoma+price+ orektika[1].timh + dollar;
document.getElementById("mikri2").src= "images/fried.jpg";

document.getElementById("customid3").innerHTML = orektika[2].onoma+price+orektika[2].timh + dollar;
document.getElementById("mikri3").src= "images/tzatziki.jpg";

}
else if ( "kyriws" ==sel)
{
document.getElementById("customid1").innerHTML = kyriws[0].onoma + price+ kyriws[0].timh + dollar;
document.getElementById("mikri1").src= "images/koto.jpg";

let adds=document.getElementsByClassName("add");

for (i=0; i<adds.length; i++)
{
adds[i].style.display="block";
}

document.getElementById("customid2").innerHTML = kyriws[1].onoma+ price+ kyriws[1].timh + dollar;
document.getElementById("mikri2").src= "images/pastitsio.jpg";

document.getElementById("customid3").innerHTML = kyriws[2].onoma+ price+ kyriws[2].timh + dollar;
document.getElementById("mikri3").src= "images/tsipoura.jpg";


}
else if ( "pota" == sel)
{
document.getElementById("customid1").innerHTML = pota[0].onoma+ price+ pota[0].timh + dollar;
document.getElementById("mikri1").src="images/krasos.jpg";

let adds=document.getElementsByClassName("add");

for (i=0; i<adds.length; i++)
{
adds[i].style.display="block";
}

document.getElementById("customid2").innerHTML = pota[1].onoma+ price+ pota[1].timh + dollar;
document.getElementById("mikri2").src= "images/liker.jpg";




document.getElementById("customid3").innerHTML = pota[2].onoma+ "price <span id='p3'>" + pota[2].timh + "</span>" + dollar;
document.getElementById("mikri3").src= "images/soda.jpg";
}
}

function addtocartbutton(id) 
{   
if (howmanytimesrun >4 ) 
{   
clearbasket();
howmanytimesrun=parseInt(0);
console.log(howmanytimesrun);

}

let sel = document.getElementById("epiloges").value;


if (id == 1 )
{
if (sel == "orektika")
{
orektika[0].pos=parseInt(orektika[0].pos)+1;
sum=parseInt(sum)+parseInt(orektika[0].timh); 
document.getElementById("final").innerHTML=sum+" Dollars";
document.getElementById("basket"+howmanytimesrun).innerHTML=orektika[0].pos+ " X " + orektika[0].onoma + "<br>";


}
else if (sel=="kyriws")
{
kyriws[0].pos=parseInt(kyriws[0].pos)+1;
sum=parseInt(sum)+parseInt(kyriws[0].timh); 
document.getElementById("final").innerHTML=sum+" Dollars";
document.getElementById("basket"+howmanytimesrun).innerHTML=kyriws[0].pos+ " X " + kyriws[0].onoma + "<br>";

}
else if (sel=="pota")
{
pota[0].pos=parseInt(pota[0].pos)+1;
sum=parseInt(sum)+parseInt(pota[0].timh); 
document.getElementById("final").innerHTML= sum+" Dollars";
document.getElementById("basket"+howmanytimesrun).innerHTML=pota[0].pos+ " X " + pota[0].onoma + "<br>";
}
}
else if (id == 2)
{

if (sel == "orektika")
{
orektika[1].pos=parseInt(orektika[1].pos)+1;
sum=parseInt(sum)+parseInt(orektika[1].timh); 
document.getElementById("final").innerHTML=sum+" Dollars";
document.getElementById("basket"+howmanytimesrun).innerHTML=orektika[1].pos+ " X " + orektika[1].onoma + "<br>";		 

}
else if (sel=="kyriws")
{
kyriws[1].pos=parseInt(kyriws[1].pos)+1;
sum=parseInt(sum)+parseInt(kyriws[1].timh); 
document.getElementById("final").innerHTML=sum+" Dollars";
document.getElementById("basket"+howmanytimesrun).innerHTML=kyriws[1].pos+ " X " + kyriws[1].onoma + "<br>";
}
else if (sel=="pota")
{
pota[1].pos=parseInt(pota[1].pos)+1;
sum=parseInt(sum)+parseInt(pota[1].timh); 
document.getElementById("final").innerHTML=sum+" Dollars";		
document.getElementById("basket"+howmanytimesrun).innerHTML=pota[1].pos+ " X " + pota[1].onoma + "<br>";				
}
}
else if (id ==3)
{

if (sel == "orektika")
{
orektika[2].pos=parseInt(orektika[2].pos)+1;
sum=parseInt(sum)+parseInt(orektika[2].timh); 
document.getElementById("final").innerHTML=sum+" Dollars";
document.getElementById("basket"+howmanytimesrun).innerHTML=orektika[2].pos+ " X " + orektika[2].onoma + "<br>";

}
else if (sel=="kyriws")
{
kyriws[2].pos=parseInt(kyriws[2].pos)+1;
sum=parseInt(sum)+parseInt(kyriws[2].timh); 
document.getElementById("final").innerHTML=sum+" Dollars";
document.getElementById("basket"+howmanytimesrun).innerHTML=kyriws[2].pos+ " X " + kyriws[2].onoma + "<br>";
}
else if (sel=="pota")
{
pota[2].pos=parseInt(pota[2].pos)+1;
sum=parseInt(sum)+parseInt(pota[2].timh); 
document.getElementById("final").innerHTML=sum+" Dollars";
document.getElementById("basket"+howmanytimesrun).innerHTML=pota[2].pos+ " X " + pota[2].onoma + "<br>";
}
}
howmanytimesrun=parseInt(howmanytimesrun)+1;				
}

function svisimo()
{
	
	
	
for(i=0;i<3;i++)
{
	orektika[i].pos=parseInt(0);
	kyriws[i].pos=parseInt(0);
	pota[i].pos=parseInt(0);
}


for(i=0;i<5;i++)
{
document.getElementById("basket"+i).innerHTML=" ";
}

sum=parseInt(0);	
document.getElementById("final").innerHTML="0 Dollars";
}

function clearbasket()
{
	for(i=0;i<5;i++)
			{
			document.getElementById("basket"+i).innerHTML=" ";
			}
}

