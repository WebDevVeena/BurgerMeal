const slider_items = [
    {
        name: 'Mini Party With Family',
        img: './images/meal3.png',
        rating: '5',
        items:
        {
            burger: 2,
            coke: 1,
            fries: 'small'
        },

    },
    {
        name: 'Big Party With Family',
        img: './images/meal4.png',
        rating: '5',
        items:
        {
            burger: 1,
            coke: 1,
            fries: 'big'
        },

    },
    {
        name: 'Party With Italian Burger',
        img: './images/meal2.png',
        rating: '4',
        items:
        {
            burger: 1,
            pizza: 1,
            coke: 1,
            fries: 'big'
        },

    },
    {
        name: 'Burger With Coke & Fries',
        img: './images/meal4.png',
        rating: '3',
        items:
        {
            burger: 2,
            coke: 1,
            fries: 'medium'
        },

    },
    {
        name: 'Burger Party With Family',
        img: './images/meal5.png',
        rating: '5',
        items:
        {
            burger: 2,
            coke: 1,
            fries: 'big'
        },

    },
    {
        name: 'Burger Combo With Fries',
        img: './images/meal6.png',
        rating: '5',
        items:
        {
            burger: 2,
            coke: 1,
            fries: 'Big'
        },

    },
];

function createStars(rating) {
    let stars = '';
    for(let i=0; i<rating; i++) {
        stars+= `<i class="fa fa-stars"></i>`;
    }
    return stars;
}

let count = 0;
let slider = document.querySelector('.slider');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

function renderSlider() {
    slider.innerHTML = ` <div class="bg-white p-8 flex justify-between items-center">
                <div>
                    <p class="font-semibold text-red-950">${slider_items[count].name}</p>
                    <div class="text-yellow-500 text-sm mt-1">
                        ${createStars(slider_items[count].rating)}
                    </div>
                    <div class="pt-3">
                        <div>
                            <label class="text-2xl">&#127828;</label>
                            <label class="text-sm">${slider_items[count].items?.burger ?? 0} Burger</label>
                        </div>
                        <div>
                            <label class="text-2xl">&#129380;</label>
                            <label class="text-sm">${slider_items[count].items?.coke ?? 0} Cold Drink - 250ml</label>
                        </div>
                        <div>
                            <label class="text-2xl">&#x1F35F;</label>
                            <label class="text-sm capitalize">Fries - ${slider_items[count].items?.fries ?? 0}</label>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <img src="${slider_items[count].img}" alt="">
                </div>
            </div>
            <div class="absolute w-full text-center bottom-5">
                <button
                        class="bg-red-500 text-white px-8 py-3 rounded-full font-semibold border-2 border-transparent cursor-pointer hover:scale-105 duration-500">Order
                        Now</button>
            </div>`
}

prev.addEventListener('click',()=>{
    count = (count-1 + slider_items.length) % slider_items.length;
    renderSlider();
})

next.addEventListener('click',()=>{
    count = (count+1) % slider_items.length;
    renderSlider();
})