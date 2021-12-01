function marselVideo() {
    let videoWrap = document.querySelector('.marsel-nice-video');
    let video = document.querySelector('.marsel-nice-video video');

    document.querySelector('#marsel-nice-btn').addEventListener('click', function(e){
        e.preventDefault()
        videoWrap.classList.add('show')
        video.play();
    })
    videoWrap.addEventListener('click', function(e) {
        if (!(e.target == video)) {
            videoWrap.classList.remove('show')
            video.pause()
        }
    })
}
marselVideo()
