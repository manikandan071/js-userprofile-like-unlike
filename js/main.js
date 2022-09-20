var data=[{
	img:"images/mani.jpeg",
	batch:"FED-02",
	name:"manikandan",
	age:24,
	address:"new street",
	dob:"15/05/1998",
	email:"manidhiyamech07167@gmail.com",
	phone:6369982019,
	bloodgroup:"O+"
},
{
	img:"images/ranjith.jpg",
	batch:"FED-02",
	name:"ranjithkumar",
	age:24,
	address:"dharmapuri",
	dob:"20/05/1998",
	email:"ranjithkumar123@gmail.com",
	phone:6369982019,
	bloodgroup:"A+"
},
{
	img:"images/rammshanker.jpg",
	batch:"FED-02",
	name:"Rammsanker",
	age:24,
	address:"Madurai",
	dob:"05/04/1998",
	email:"sankeramm@gmail.com",
	phone:8110933318,
	bloodgroup:"B+"
}];
//console.log(data[0].name);
var btn=document.getElementById("addval");
var mainDiv=document.getElementById("main");
var rows=document.createElement("div");
rows.setAttribute("class","row");
mainDiv.appendChild(rows);
var vals=0;

btn.addEventListener("click",function(){
for (var i=0; i<data.length; i++){
	var img=data[i].img;
	var batch=data[i].batch;
	var name=data[i].name;
	var age=data[i].age;
	var address=data[i].address;
	var dob=data[i].dob;
	var email=data[i].email;
	var phone=data[i].phone;
	var bloodgroup=data[i].bloodgroup;
	console.log(bloodgroup);
	
	

	
	var colm=document.createElement("div");
	colm.setAttribute("class","col-4");
	rows.appendChild(colm);
	var card=document.createElement("div");
	colm.appendChild(card);
	card.setAttribute("class","card");
	var photo=document.createElement("img");
	photo.setAttribute("class","card-img-top");
	photo.setAttribute("src",img);
	card.appendChild(photo);
	
	var orderlist=document.createElement("ul");
	card.appendChild(orderlist);
	
	var batchLi=document.createElement("li");
	orderlist.appendChild(batchLi);
	var nameLi=document.createElement("li");
	orderlist.appendChild(nameLi);
	var ageLi=document.createElement("li");
	orderlist.appendChild(ageLi);
	var addressLi=document.createElement("li");
	orderlist.appendChild(addressLi);
	var dobLi=document.createElement("li");
	orderlist.appendChild(dobLi);
	var emailLi=document.createElement("li");
	orderlist.appendChild(emailLi);
	var phoneLi=document.createElement("li");
	orderlist.appendChild(phoneLi);
	var bloodgroupLi=document.createElement("li");
	orderlist.appendChild(bloodgroupLi);


	
	batchLi.innerText="BATCH :"+ " "+batch;
	nameLi.innerText="NAME :"+" "+name;
	ageLi.innerText="AGE :"+" "+age;
	addressLi.innerText="ADDRESS :"+" "+address;
	dobLi.innerText="DOB :"+" "+dob;
	emailLi.innerText="EMAIL :"+" "+email;
	phoneLi.innerText="PHONE :"+" "+phone;
	bloodgroupLi.innerText="BLOODGROUP :"+" "+bloodgroup;
	console.log(card);

	var liksDisliks =document.createElement("div");
	liksDisliks.setAttribute("class","d-flex");
	card.appendChild(liksDisliks);
	var like=document.createElement("button");
	like.innerText="LIKE";
	like.setAttribute("class","like-btn");
	like.setAttribute("id","list_"+ vals);
	liksDisliks.appendChild(like);
	var likecnt=document.createElement("h6");
	likecnt.setAttribute("class","increse");
	likecnt.innerText="0";
	liksDisliks.appendChild(likecnt);

	//var unlikeDiv=document.createElement("div");
	//unlikeDiv.setAttribute("class","d-flex");
	//card.appendChild(unlikeDiv);
	var unlike=document.createElement("button");
	unlike.innerText="UNLIKE";
	unlike.setAttribute("class","unlike-btn");
	unlike.setAttribute("id","unlist_"+ vals);
	liksDisliks.appendChild(unlike);
	var unlikecnt=document.createElement("h6");
	unlikecnt.setAttribute("class","dicrese");
	unlikecnt.innerText="0";
	liksDisliks.appendChild(unlikecnt);

	console.log(card);
	

	var likeBtn=document.getElementsByClassName("like-btn");
	var unlikeBtn=document.getElementsByClassName("unlike-btn");

	for(var j=0; j<likeBtn.length; j++){
		// console.log(likeBtn[j]);
		likeBtn[j].addEventListener("click",liked);
		
	}
	for(var k=0; k<unlikeBtn.length; k++){
		unlikeBtn[k].addEventListener("click",unliked);
	}

	vals++;
   }
})
var isliked =false;
var isdislike=false;
let likeCnt, unlikeCnt;
function liked(){
	isliked = !isliked;
	var getprnt=this.parentNode;
	// console.log(getprnt);

	likeCnt=getprnt.getElementsByClassName("increse")[0];
	unlikeCnt = getprnt.getElementsByClassName("dicrese")[0];
	// console.log(likeCnt);
	
	if(isliked){
		likeCnt.innerText="1";
		unlikeCnt.innerText="0";
		isdislike=false;
	}
	else{
		likeCnt.innerText="0";
	}
}

function unliked(){
	isdislike = !isdislike;
	var getprnt=this.parentNode;
	console.log(getprnt);
	unlikeCnt = getprnt.getElementsByClassName("dicrese")[0];
	likeCnt = getprnt.getElementsByClassName("increse")[0];
	
	if(isdislike){
		unlikeCnt.innerText="1";
		likeCnt.innerText="0";
		isliked =false;
	}
	else{
		unlikeCnt.innerText="0";
		
	}
	
}