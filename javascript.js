// let a = document.getElementById("image1");
// let b = document.getElementById("image2");
// let c = document.getElementById("image3");
// let d = document.getElementById("image4");
// let e = document.getElementById("image5");
// let f = document.getElementById("image6");
// let g = document.getElementById("image7");
// let h = document.getElementById("myimage");


//     a.addEventListener("click",function(){
//         b.style.display="none";
//         c.style.display="none";
//         d.style.display="none";
//         e.style.display="none";
//         f.style.display="none";
        
//     })

//     b.addEventListener("click",function(){
//          h.style.display="inline-block";
//     })

//     c.addEventListener("click",function(){

//         a.style.display="none";
//         b.style.display="none";
//         d.style.display="none";
//         e.style.display="none";
//         f.style.display="none";
//         g.style.display="none";
//     })

//     d.addEventListener("click",function(){

//         a.style.display="none";
//         b.style.display="none";
//         c.style.display="none";
//         e.style.display="none";
//         f.style.display="none";
//         g.style.display="none";
//     })

//     e.addEventListener("click",function(){

//         a.style.display="none";
//         b.style.display="none";
//         c.style.display="none";
//         d.style.display="none";
//         f.style.display="none";
//         g.style.display="none";
//     })

//     f.addEventListener("click",function(){

//         a.style.display="none";
//         b.style.display="none";
//         c.style.display="none";
//         d.style.display="none";
//         e.style.display="none";
//         g.style.display="none";
//     })

//     g.addEventListener("click",function(){

//         a.style.display="none";
//         b.style.display="none";
//         c.style.display="none";
//         d.style.display="none";
//         e.style.display="none";
//         f.style.display="none";
//     })

function hello(sachin)
{
   var full = document.getElementById("myimage");
   full.src = sachin.src;
}

function validateform(){
   var name=document.myform.name.value;
   var password=document.myform.password.value;


   if (name==null||name=="") {
      alert("name can not be empty");
      return false;

   }

   else if(password.length<6){
      alert("password must be 6 characters long");
      return false;
   }
}




