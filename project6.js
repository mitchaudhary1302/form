let Suname=document.querySelector('#Suname');
Suname.innerText=localStorage.sname

let p=document.querySelector('#mi');
p.innerText=localStorage.Name

let r=document.querySelector('#i1')
r.innerText=localStorage.Collage

let x=document.querySelector('#i5')
x.innerText=localStorage.getItem("Contect")

let f=document.querySelector('#i2');
f.innerText=localStorage.getItem("Branch")

let f1=document.querySelector('#i4');
f1.innerText=localStorage.getItem("hobby");


    let newpic = document.querySelector("#pic");
    let imgSrc = localStorage.getItem("my-image");

    if (newpic && imgSrc) {
        newpic.src = imgSrc; 
        newpic.style.width = "110px";
        newpic.style.height = "100px";
    };

