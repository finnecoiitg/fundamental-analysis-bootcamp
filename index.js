document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu_btn');
    const menu = document.getElementsByClassName('mobl_nav_btns')[0];
    const rem = document.getElementsByClassName('mobl_nav_left')[0];

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            if (rem.style.display!="none") {
                rem.style.display = `none`;
                menu.style.width = `80%`;
            }
            else{
                menu.style.width = `0%`;
                setTimeout(()=>{
                    rem.style.display = `flex`;
                }, 400)
            }
        });
    } else {
        console.error("Element with ID 'menu_btn' not found.");
    }
    
    const btns = document.querySelectorAll('.btn');

    btns.forEach(btn => {
        const txt = btn.querySelector('div');

        btn.addEventListener('mouseenter', ()=>{
            txt.style.width = "70px";
        })
        btn.addEventListener('mouseleave', ()=>{
            txt.style.width = "0px";
        })
    });

    const cards = document.querySelectorAll('.card');
    const suppl = document.querySelector('.image-card');
    const q_cards = document.querySelectorAll('.quiz-card');
    const q_suppl = document.querySelector('.quiz-image-card');

    if(cards.length%3==0){
        suppl.style.display="none";
    }
    else if(cards.length%3==1){
        suppl.style.gridColumn ="span 2";
    }
    else{
        suppl.style.gridColumn="span 1";

        const image = suppl.querySelector('img');
        image.style.height = "100%";
    }


    if(q_cards.length%3==0){
        q_suppl.style.display="none";
    }
    else if(q_cards.length%3==1){
        q_suppl.style.gridColumn ="span 1";
    }
    else{
        q_suppl.style.gridColumn="span 1";
    }
});