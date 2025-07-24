type ProductType = {
    title: string,
    price: number,
    image: string
}

let products: ProductType[] = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://us-east-1-shared-usea1-02.graphassets.com/A2lCPH6tTelhrsostvMQpz/auto_image/resize=fit:max,width:1080/quality=value:75/01n1sh7CTRWsWeDTD2ZM'
    },
];

for (let product of products) {
    document.write(`<div class="product-card">
                        <h3 class="product-title"> ${product.title} </h3>
                        <h4>Price – ${product.price} UAN</h4>
                        <img class="product-image" src="${product.image}" alt="${product.title}">
                    </div>`)
}
