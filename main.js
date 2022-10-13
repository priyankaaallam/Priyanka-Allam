let carts =document.querySelectorAll('.add-cart');

let products = [
    { 
        name:'Watch',
        tag :'1.jpg',
        brand:'KAMILTON',
        price :5500,
        inCart:0
        },

    { 
        name:'Watch',
        tag :'2.jpg ',
        brand: 'OMEGA',
        price :3500,
        inCart:0
        },
    {
        name:'Watch',
        tag : ' 3.jpg',
        brand:'TIMES',
        price :5500,
        inCart:0
        },
    {   
        name:'Watch',
        tag :'4.jpg',
        brand: 'NOISE',
        price :3500,
        inCart:0
        },
    {
        name:'Watch',
        tag :'5.jpg',
        brand: 'ROLEX',
        price :9500,
        inCart:0
        } ,
    { 
      name:'Watch',
      tag :'6.jpg ',
      brand:'STTTZEN',
      price :3000,
         inCart:0
        }
         ]

          for(let i=0; i < carts.length; i++){
             carts[i].addEventListener('click',() =>{
                  cartNumbers(products[i]);
                  totalcost(products[i])
            })
            }

          
             function onLoadCartNumbers(){
                    let productNumbers = localStorage.getItem('cartNumbers');

                  if(productNumbers){
                   document.querySelector('.cart span').textContent = productNumbers;
                   }
                 }



          function cartNumbers(product){
    
                 let productNumbers = localStorage.getItem('cartNumbers');
                productNumbers =parseInt(productNumbers);
                if(productNumbers) {
                     localStorage.setItem('cartNumbers',productNumbers +1);
                    document.querySelector('.cart span').textContent = productNumbers +1;
                  } else {
                  localStorage.setItem('cartNumbers',1);
                    document.querySelector('.cart span').textContent = 1
                     }
                 setItems(product);
                     }


    function setItems(product){
              let cartItems = localStorage.getItem('productsInCart');
              cartItems =JSON.parse(cartItems);
              
                  if(cartItems !=null){
                    if(cartItems[product.tag] == undefined){
                      cartItems ={
                        ...cartItems,
                        [product.tag]:product
                      }
                    }
                 cartItems[product.tag].inCart +=1;
                     } else{
                   product.inCart =1;

                       cartItems = {
                        [product.tag]:product
                          }
                        }

                      localStorage.setItem("productsInCart",JSON.stringify(cartItems));
                     }

    function totalcost(product)    {
                      let cartCost =localStorage.getItem('totalcost');
                  
                       if(cartCost != null){
                    cartCost = parseInt(cartCost);
                    localStorage.setItem("totalcost", cartCost + product.price);
                  } else {

                
                    localStorage.setItem("totalcost",product.price);
                  }
                 }
         function displayCart(){
          let cartItems = localStorage.getItem("productsInCart");
          cartItems =JSON.parse(cartItems);
            let productContainer = document.querySelector(".products");
            let cartCost =localStorage.getItem('totalcost');
            

                if(cartItems && productContainer){
                  productContainer.innerHTML = '';
                  Object.values(cartItems).map(item => {
                    productContainer.innerHTML += `
                    <div class="products">
                    <div class="images">
                    
                    <img src = ./images/${item.tag}>
                    <span>${item.brand}</span>
                    <span>${item.name}</span>
                      
                    </div>
                 
                      <div class="price">₹${item.price}</div>
                        <div class= "quantity">
                        ${ item.inCart }</span></div>
                    <div class="total">₹${item.inCart * item.price}</div>
                                      </div>
                    `;

                    });
                               
                  productContainer.innerHTML +=
                  `
                  <div class="basketTotalContainer">
                   <h4 class="basketTotalTitle">
                   Basket Total
                   </h4>
                   <h4 class="basketTotal">₹${cartCost}
                   </h4>
                   </div>
                  `
                 
                }
                         
    
    }
                onLoadCartNumbers();
                displayCart();
            