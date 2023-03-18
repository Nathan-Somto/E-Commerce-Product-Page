const add = document.getElementById('js--add');
const sub = document.getElementById('js--sub');
const cart = document.getElementById('js--cart');
const htmlAmount = document.getElementById('js--amount');
const btnHtmlAmount = document.getElementById('js--btn--amount');
const jsCartAmount = document.getElementById('js--cart--amount');
const jsCartInfo = document.getElementById('js--cart--info');
const jsCartEmpty = document.getElementById('js--cart--empty');
const checkout = document.querySelector('#js--cart--info+button');
const result = document.getElementById('js--result');
const addCart = document.getElementById('js--add--cart');
const deleteBtn= document.getElementById('js--delete'); 
const basket= document.getElementById('js--basket');
const basketClose = document.querySelector('#js--basket>img');
const thumbnails = document.querySelectorAll("[data-thumbnail]");
const overlay = document.querySelectorAll('.overlay');
const mainImg = document.querySelectorAll('.main-img');
const lightBox = document.querySelector('[data-light-box]');
const jsPrev = document.querySelectorAll('[data-js-prev]');
const jsNext= document.querySelectorAll('[data-js-next]');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const jsMenu = document.getElementById('js--menu');
const sideNav = document.getElementById('side--nav');
const sideClose = document.getElementById('side--close');
const sideShadow = document.getElementById('side--shadow');
let currIndex =0;

jsPrev.forEach((prev,index)=>{
prev.addEventListener('click',()=>{
   changeImage(index,'prev');

}
)});
jsNext.forEach((next,index)=>{
    next.addEventListener('click',()=>{
       changeImage(index,'next');
    
    }
    )})
function changeImage (index,position){
    let i;
    let j=0;
    let baseIndex;
     i = currIndex;
     baseIndex = 4;
if(index !== 0){
    i+=4;
    j+=4;
}
overlay[i].classList.add('hidden');
mainImg[i].classList.add('hidden');
 
 if(position === 'prev'){
    j+= (i+baseIndex-1)% baseIndex;
    currIndex= (currIndex+baseIndex-1)% baseIndex;
 }
 else{
    j+= (i+1)% baseIndex;
    currIndex= (currIndex+1)% baseIndex;
 }
overlay[j].classList.remove('hidden');
mainImg[j].classList.remove('hidden');
};
jsMenu.addEventListener('click',()=>{
    sideNav.classList.remove('max-[1023px]:hidden');
    setTimeout(()=>sideShadow.classList.remove('hidden'),300);
    sideNav.classList.add('slide-in');
    sideShadow.classList.add('fade-in');
})
sideClose.addEventListener('click',()=>{
    sideNav.classList.remove('slide-in');
    sideShadow.classList.remove('fade-in');
    sideNav.classList.add('slide-out');
    sideShadow.classList.add('fade-out');

    setTimeout(()=>{
        sideNav.classList.add('max-[1023px]:hidden');
        sideNav.classList.remove('slide-out');
     
},300);
setTimeout(()=>{
    sideShadow.classList.add('hidden');
    sideShadow.classList.remove('fade-out');

},300)
   
   
})
let amount = 0;
close.addEventListener('click',()=>{
    modal.classList.add('hidden');
})
mainImg.forEach((img)=>{
    img.addEventListener('click',()=>{
        let classNameArr = modal.className.split(' '); 
        if(classNameArr[classNameArr.length-1]=== 'hidden')
        {
            modal.classList.remove('hidden');
            
        } 
    })
    
    
})

thumbnails.forEach((thumbnail,index) =>{
thumbnail.addEventListener('click',(e)=>{
  
   let start = 0;
   let classNameArr = modal.className.split(' '); 
    if(classNameArr[classNameArr.length-1]!== 'hidden')
    {
        start = 4;
    } 
  for(let i = start; i< thumbnails.length; i++){
    
   if(  i !==index && !overlay[i].className.includes('hidden') ){
    mainImg[i].classList.add('hidden');
    mainImg[index].classList.remove('hidden');
    overlay[i].classList.add('hidden');
    overlay[index].classList.remove('hidden');
    break;
}  
}});
});
cart.addEventListener('click',()=>{
    if(jsCartAmount.innerHTML !== '0'){
    basket.classList.remove('hidden');
    }
})
 basketClose.addEventListener('click',()=>{
   
    basket.classList.add('hidden');
   
}) 
addCart.addEventListener('click',()=>{
    if(btnHtmlAmount.textContent === '0'){
    checkEmptyCart();
    return;
    }
    addToCart(parseInt(btnHtmlAmount.innerHTML));
   
})
deleteBtn.addEventListener('click',()=>{
    deleteCart();
})
add.addEventListener('click',()=>{
    amount+=1;
    btnHtmlAmount.textContent = amount;
    htmlAmount.textContent = amount;
    jsCartAmount.innerHTML = amount;
    calculate(amount);
    
});
sub.addEventListener('click',()=>{
    
    if(amount === 1){
        checkEmptyCart();
        }
   if(amount >0)
   {
    amount-=1;
    jsCartAmount.innerHTML = amount;
    htmlAmount.textContent = amount;
    btnHtmlAmount.innerHTML = amount;
    calculate(amount);
   }
})
function checkEmptyCart(){
        amount= 0;
        jsCartAmount.textContent = '';
        btnHtmlAmount.innerHTML= '0';
        jsCartAmount.classList.add('hidden');
        jsCartEmpty.classList.remove('hidden');
        checkout.classList.add('hidden');
        jsCartInfo.classList.add('hidden');
        jsCartInfo.classList.remove('flex');
       
        htmlAmount.textContent = amount;
       
    
}

function addToCart(amount){
    if( amount >= 1)
    {
        jsCartEmpty.classList.add('hidden');
        jsCartInfo.classList.remove('hidden');
        checkout.classList.remove('hidden');
        jsCartInfo.classList.add('flex');
        jsCartAmount.classList.remove('hidden');
    }
}
function deleteCart(){
    checkEmptyCart();

}
function calculate(amount){
    result.innerHTML=`$${(125*amount).toFixed(2)}`;
}
