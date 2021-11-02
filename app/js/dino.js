function dinoGameStart() {
    const dino = document.getElementById('dino');
    // const cactus = document.querySelector('.cactus');

    function dinoJump() {
        if (dino.classList != 'dinoJump') {
            dino.classList.add('dinoJump');

            setTimeout(function () {
                dino.classList.remove('dinoJump')
            }, 300)
        }
    }

    // let isAlive = setInterval(() => {
    //     // get x dino pos
    //     let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    //     // console.log(dinoTop)

    //     //get cur cactus pos
    //     let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    //     // console.log(cactusLeft)

    //     // detect collision
    //     if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    //         console.log('boom')
    //     }

    // }, 20);

    document.addEventListener('keydown', function (e) {
        
        if (e.keyCode === 32 && event.target === document.body || e.keyCode === 38) {
            e.preventDefault();
            dinoJump()
        }
    })

    document.addEventListener('touchstart', function () {
        dinoJump()
    })
}

dinoGameStart()
