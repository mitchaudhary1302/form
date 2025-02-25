
let hobby = document.querySelector('#hobby');
hobby.addEventListener('change', (e) => {
let selectedBranch = e.target.value;
localStorage.setItem("hobby", selectedBranch); 
});

let photo=document.querySelector('#docpicker');
photo.addEventListener('change',(e)=>{
    let pri=new FileReader();
    pri.readAsDataURL(photo.files[0]);

    pri.addEventListener('load',()=>{
        let jpg=pri.result;
        localStorage.setItem("my-image",jpg);
    })

})



