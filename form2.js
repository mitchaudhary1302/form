let surname=document.querySelector('#SURNAME');
surname.innerText=localStorage.sname

surname.addEventListener('input',(e)=>{
    localStorage.sname = e.target.value
})

let NAme=document.querySelector('#NAME');
NAme.innerText=localStorage.Name

NAme.addEventListener('input',(k)=>{
    localStorage.Name=k.target.value
})

let collage=document.querySelector('#COLLAGE');
collage.innerText=localStorage.Collage

collage.addEventListener('input',(l)=>{
    localStorage.Collage=l.target.value
})

let contect=document.querySelector('#CONTACT');
contect.innerText=localStorage.getItem("Contect");

contect.addEventListener('input',(t)=>{
    localStorage.setItem("Contect",t.target.value)
})


let branch = document.querySelector('#BRANCH');
branch.addEventListener('change', (e) => {
let selectedBranch = e.target.value;
localStorage.setItem("Branch", selectedBranch); 
});






