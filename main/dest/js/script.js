var birds = (function(){
    const maxBird = 1;

    function bird (id) {
        return `<div class="bird" id="bird-${id}">
        <div class="bird-container">
            <div class="left">
                <div class="uno">
                    <div class="uno">
                        <div class="uno">
                            <div class="uno"></div>7ya%</div>--/3</div>asdad</div>
        
            </div>
            <div class="right">
                <div class="uno">
                    <div class="uno">
                        <div class="uno">
                            <div class="uno"></div>i+*m</div>--+=</div>09Oda</div>
        
            </div>
        </div>
        </div>`
    
    };

    var arr=[];
    for(let i = 0   ; i < maxBird;i++){
        arr.push(bird(i));
    }
    return arr;

})();

let page = document.getElementsByTagName('body')[0];

var keyfrm = [
    {   
        transform:"translate(0px, 0px) ",
        margin:"10px"
    },
    {
        transform:"translate(180px, 200px)  ",
        margin:"100px"
    },
    {
        transform:"translate(180px, 200px)  ",
        margin:"100px"
    }

]

birds.map((bird, i) => {
    
    page.insertAdjacentHTML('beforeEnd', bird);
    var bird = document.getElementById('bird-'+i)
    console.log(bird);
    bird.style.willChange = 'transform';
    bird.animate(keyfrm, {
        duration:17000,
        fill:"forwards",
        easing:'linear',
        delay:1000
    });
    bird.style.willChange = 'auto';
    
    
    
})