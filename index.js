var home = new Vue({
    el: '.home',
    data: {
        prof_pic: './img/Profile.png',
        page_title: 'Hello there!',
        span_1: '< ',
        span_2: '/>',
        subtitle: 'This is a Tennor Lee\'s space, connect with me to know more!',
        logos: [
            {id:1,img:'./img/github-logo.png',url:'https://github.com/TennorHD'},
            {id:2,img:'./img/instagram-logo.png',url:'https://www.instagram.com/hi.im_ning/'},
            {id:3,img:'./img/twitter-logo.png',url:'https://twitter.com/tennorlee'}
        ],
        wave: './img/landingpage_wave.svg'
    }
})

let items = [
    {id:1,value:'About',classname:'about'},
    {id:2,value:'Projects',classname:'projects'},
    {id:3,value:'Blog',classname:'blog'},
    {id:4,value:'Contact',classname:'contact'},
]

var nav_bar = new Vue({
    el: '.navigation-container',
    data: {
        title: 'tennorlee',
        nav_items: items,
    }
})

var container = new Vue({
    el: '.container',
    data: {
        windowwidth: window.innerWidth,
        header: '<tennorlee/>',
        items: items,
    },
})