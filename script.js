// Modal Settings
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');


// Start (با کلیک بر روی ضربدر صفحه مدل بسته میشود)
// Start (با کلیک کردن بیرون از ـ مدل ـ صفحه مدل بسته میشود)
const modalCloseFunc = function () {
    modal.classList.add('closed');
};

modalCloseOverlay.addEventListener('click', modalCloseFunc);
// End (با کلیک کردن بیرون از ـ مدل ـ صفحه مدل بسته میشود)


modalCloseBtn.addEventListener('click', modalCloseFunc);
// End (با کلیک بر روی ضربدر صفحه مدل بسته میشود)
// Modal Settings




// Home Category
const wrapper = document.querySelector('.slider-wrapper');
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {

        // Change the Current Slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

    });
});
// Home Category


// Product Settings
const products = [

    {
        id: 1,
        title: 'Air Force',
        price: 119,
        colors: [
            {
                code: 'black',
                img: './Image/air.png'
            },
            {
                code: 'darkblue',
                img: './Image/air2.png',
            },
        ],
    },


    {
        id: 2,
        title: 'Air Jordan',
        price: 149,
        colors: [
            {
                code: 'lightgray',
                img: './Image/jordan.png',
            },
            {
                code: 'green',
                img: './Image/jordan2.png',
            },
        ],
    },


    {
        id: 3,
        title: 'Blazer',
        price: 109,
        colors: [
            {
                code: 'lightgray',
                img: './Image/blazer.png',
            },
            {
                code: 'green',
                img: './Image/blazer2.png',
            },
        ],
    },


    {
        id: 4,
        title: 'Crater',
        price: 129,
        colors: [
            {
                code: 'black',
                img: './Image/crater.png',
            },
            {
                code: 'lightgray',
                img: './Image/crater2.png',
            },
        ],
    },


    {
        id: 5,
        title: 'Hippie',
        price: 99,
        colors: [
            {
                code: 'gray',
                img: './Image/hippie.png',
            },
            {
                code: 'black',
                img: './Image/hippie2.png',
            },
        ],
    },

];

let choosenProduct = products[0];

const currentProductImg = document.querySelector('.product-img');
const currentProductTitle = document.querySelector('.product-title');
const currentProductPrice = document.querySelector('.product-price');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');


menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {

        // Change the Choosen Product
        choosenProduct = products[index];

        // Change Texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // Assign new Colors
        currentProductColors.forEach((color, index) => {
            color.style.background = choosenProduct.colors[index].code;
        });
    });
});

// Fix Colors on Image
currentProductColors.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});


currentProductSizes.forEach((size, index) => {
    size.addEventListener('click', () => {

        // When don't Click the Size 
        currentProductSizes.forEach((size) => {
            size.style.background = 'white';
            size.style.color = 'black';
        });

        // When Clicked the Size 
        size.style.background = 'black';
        size.style.color = 'white';

    });
});
// Product Settings



// Payment Settings
const productButton = document.querySelector('.product-btn');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
    payment.style.display = 'flex';
});


close.addEventListener('click', () => {
    payment.style.display = 'none';
});
// Payment Settings