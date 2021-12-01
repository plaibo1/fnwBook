// let a = 
function stampGo() {
    setTimeout(function(){
        document.querySelectorAll('.pora-valit').forEach(el => el.classList.add('stamp'))
    }, 2000)
}
stampGo()


window.addEventListener('pageUpdate', function() {
    stampGo()
    console.log('stamp on page update')
})

//     function test (foo, time) {
//         let done = false;
//         let interval = null;
//         function main() {
//             if (document.readyState !== 'complete') return;
//             foo()
//             done = true;
//         }


//         interval = setInterval(() => {
//             if (done && interval) return clearInterval(interval);
//             main();
//         }, time)
//     }

// test(a, 150)