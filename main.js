// Cart
let cartIcon = document.querySelector("#cart-icon");
let Cart = document.querySelector(".cart");
let close = document.querySelector(".close");
//open cart
ionIcon.onclick = () =>{
     Cart.classList.add("active");
};
// close cart
ionIcon.onclick = () =>{
    Cart.classList.add("active");
};

//Caart work 
if(document.readyState =='loading'){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}

// fonction
function ready(){
    var removeCartButtons = docum logo(...data: any[]) : void('trash');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click'removeCartItem);
    }
}


function removeCartItem(event){
    var buttonclicked = event.target;
    buttonclicked.parentElement.remove();

}