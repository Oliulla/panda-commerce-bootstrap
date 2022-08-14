// 2. select all h2 element and change color as lightblue
const h2Color = document.getElementsByTagName('h2');
for (const h2 of h2Color) {
    h2.style.color = 'blue';
}

// 3. bagpack section background color tomato
document.getElementById('bagpack').style.backgroundColor = 'tomato';

// 4. All card class has to be border radius 30px;
const cards = document.getElementsByClassName('card');
for (const card of cards){
    card.style.borderRadius = '30px';
}

// 5. Write a function and add its in any button
function buyNow(){
    console.log('Clicked')
}

// 6. add event handler for all buy now btn so that they can remove if clicked
const allBtn = document.getElementsByClassName('btn');
for (let i = 0; i<allBtn.length-1; i++){
    const buyBtn = allBtn[i];
    buyBtn.addEventListener('click', function(){
        buyBtn.style.display = 'none';
    })
}

// 7. Disabled submit button, then enable if input field take text 'email'.
//  and else write other thing do disabled again
const submitBtn = document.getElementById('submit-button');
document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
    const text = event.target.value;
    if (text === 'email'){
        submitBtn.removeAttribute('disabled')
    } else {
        submitBtn.setAttribute('disabled', true);
    }
});

// 8. if do mouseenter image will be changed
document.getElementById('img1').addEventListener('mouseenter', function(event){
    const elm = event.target;
    elm.style.display = 'none';
    document.getElementById('img2').style.display = 'block';
});

// 9. Change stay in touch section color if mouse event double clicked occur
const container = document.getElementById('subs');
const classes = container.classList;
const eventOccur = document.getElementById('subs').addEventListener('dblclick', function(){
    classes.replace('bg-info', 'bg-primary');
    container.style.color = '#fff';
});