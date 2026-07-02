const toasts = document.querySelector(".small-toast");
const mainimg = document.getElementById("mainimg");
const subimg = document.querySelectorAll(".subimg");
const btn = document.querySelector(".cart-btn");
const colorbtn = document.querySelectorAll(".color-btn");


btn.addEventListener("click",()=>{

    toasts.style.display = 'block';

    setTimeout(()=>{
        toasts.style.display = 'none';
    },3000);

  });
  

subimg.forEach(imge => {

    imge.addEventListener("click",()=> {
        mainimg.src = imge.src;
    });

});


colorbtn.forEach(btns => {
    btns.addEventListener("click",()=>{

        colorbtn.forEach(element => {
            element.classList.remove("active");
        });
             btns.classList.add("active");
        }
    )});
