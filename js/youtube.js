var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
    videoId: 'u6ueARcBF68', //최초 재생할 유튜브 영상ID
    playerVars: {
        autoplay:true, //자동 재생 유무
        loop: true, //반복 재생 유무
        playlist:'u6ueARcBF68',//반복 재생할 유튜브 영상 ID 목록
        controls:0
    },
    events:{
        onReady: function(event){
            event.target.mute() //음소거
        }
    }
});
}

function random(min, max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
    /* gsap.to(요소, 시간, 옵션) */
    gsap.to(selector, random(1.5, 2.5), {
        y:size,
        repeat:'-1',
        yoyo:true,
        ease:Power1.easeInOut,
        delay:random(0, delay),
    })
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 25)