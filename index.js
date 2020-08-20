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
        ]
    }
})

var nav_bar = new Vue({
    el: '.navigation-container',
    data: {
        title: 'Tennor Lee',
        nav_items: [
            {id:1,value:'About'},
            {id:2,value:'Projects'},
            {id:3,value:'Blog'},
            {id:4,value:'Contact'},
        ]
    }
})