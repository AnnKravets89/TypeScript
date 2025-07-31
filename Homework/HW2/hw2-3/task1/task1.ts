interface IProduct {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
}
interface ICart {
    id: number;
    products: IProduct[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}
fetch('https://dummyjson.com/carts?limit=50')
    .then(response => response.json())
    .then((cartsObjects) => {
        const carts: ICart[] = cartsObjects.carts;
        for(const cart of carts){
            let divCart: HTMLDivElement = document.createElement('div');
            divCart.classList.add('cart-container');

            let h2Cart: HTMLHeadingElement = document.createElement('h2');
            h2Cart.classList.add('cart-title');
            h2Cart.innerText = `Shopping Cart User ${cart.userId}`;

            let divSummary: HTMLDivElement = document.createElement('div');
            divSummary.classList.add('cart-summary');

            let totalProd: HTMLParagraphElement = document.createElement('p');
            totalProd.innerText = `Total Products: ${cart.totalProducts}`;

            let totalQuant: HTMLParagraphElement = document.createElement('p');
            totalQuant.innerText = `Total Quantity: ${cart.totalQuantity}`;

            let totalCart: HTMLParagraphElement = document.createElement('p');
            totalCart.innerText = `Total price:  ${cart.total} USD`;

            let totalCartDisc: HTMLParagraphElement = document.createElement('p');
            totalCartDisc.innerText = `Total price with discount:  ${cart.discountedTotal} USD`;

            let hr: HTMLHRElement = document.createElement('hr');

            for(const product of cart['products']){
                let divProduct: HTMLDivElement = document.createElement('div');
                divProduct.classList.add('product');

                let h4: HTMLHeadingElement = document.createElement('h4');
                h4.innerText =`${product.id}.    ${product.title}  -  ${product.price} USD`;

                let img: HTMLImageElement = document.createElement('img');
                img.src = product.thumbnail;

                let divInfo: HTMLDivElement = document.createElement('div');
                divInfo.classList.add('product-info');

                let quantityProduct: HTMLParagraphElement = document.createElement('p');
                quantityProduct.innerText = `Quantity: ${product.quantity}`;

                let discPercent: HTMLParagraphElement = document.createElement('p');
                discPercent.innerText = `Your discount percentage - ${product.discountPercentage} USD`;

                let totalPrice: HTMLParagraphElement = document.createElement('p');
                totalPrice.innerText = `Price: ${product.total} USD`;

                let totalDiscPrice: HTMLParagraphElement = document.createElement('p');
                totalDiscPrice.innerText = `Price with discount: ${product.discountedTotal} USD`;


                divInfo.append(quantityProduct, discPercent, totalPrice,  totalDiscPrice);
                divProduct.append(h4, img, divInfo);
                divSummary.append(totalProd, totalQuant, totalCart, totalCartDisc);
                divCart.appendChild(divProduct);
            }
            document.body.append(h2Cart, divCart, divSummary, hr);
        }
    });
