'use strict';
const opens=document.querySelector('.open');
const modal=document.querySelector('.modal');
const closes=document.querySelector('.cancel');


opens.addEventListener('click',function(){
    modal.classList.toggle('hide');
})
closes.addEventListener('click' ,function(){
    modal.classList.toggle('hide');
})
