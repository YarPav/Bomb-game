let items = document.querySelectorAll('.item'),
    p = document.querySelector('.count'),
    count = 3,
    pause = document.querySelector('.pause'),
    res = document.querySelector('.res');
p.textContent = count;
res.addEventListener('click', () => {
    location.reload();
});
function gener () {
    
    let rand = (Math.floor(Math.random() * 9) + 1) - 1;
    console.log(rand);
    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (index != rand) {
                item.style.backgroundColor = 'red';
                count--;
                p.textContent = count;
            } else {
                alert('Ты выиграл!');
                items.forEach((item, i) => {
                    if (i == rand) {
                        item.style.backgroundColor = '#fff000';
                        
                    } else {
                        
                        item.style.backgroundColor = 'red';
                    }
                    
                });
                pause.style.display = 'block';
            }
            if (count == 0) {
                alert('Ты проиграл');
                items.forEach((item, i) => {
                    if (i == rand) {
                        item.style.backgroundColor = '#fff000';
                        
                    } else {
                        item.style.backgroundColor = 'red';
                    }
                    
                });
                pause.style.display = 'block';
            } 
        });
    });
    items[rand].addEventListener('click', (event) => {
        items[rand].classList.add('active');
    });
    
}

gener();
