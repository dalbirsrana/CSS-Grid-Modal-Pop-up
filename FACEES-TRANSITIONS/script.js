

const buttons = document.querySelectorAll('button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

console.log(buttons, modalOuter, modalInner);

// Add eventListener to each button
buttons.forEach(button => button.addEventListener('click', getInfo));

modalOuter.addEventListener('click', closeModal);

function closeModal(e) {
    // console.log('hello modal click test.. :-)');

    modalOuter.classList.remove('active');
}



function getInfo(e) {
    console.log(e.target);

    const btn = e.target;
    const card = btn.closest('.card');
    const img = card.querySelector('img');
    const src = img.src;
    const bigSrc = src.replace('img-400', 'img-1000');
    const name = card.querySelector('h2').textContent;
    const desc = card.dataset.description;

    console.log(btn, card, img, src, name, bigSrc, desc);

    modalInner.innerHTML= `
        
        <div class="img-wrrapper">
            <img src="${bigSrc}" alt="${name}">
        </div>
        <h2>${name}</h2>
        <p class="description">${desc}</p>
    `;
    
    modalOuter.classList.add('active');

}