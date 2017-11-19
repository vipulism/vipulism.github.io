// bird js
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



var keyfrm = [
    {   
        transform:"translate(-100px,-100px) scale(.4) ",
        margin:"10px"
    },
    {
        transform:"translate(180px, 100px) scale(.6) ",
        margin:"100px",
        offset:.4
    },
    {
        transform:"translate(180px, 800px)  ",
        margin:"100px"
    }

]

birds.map((bird, i) => {
    
    page.insertAdjacentHTML('beforeEnd', bird);
    var bird = document.getElementById('bird-'+i)
    console.log(bird);
    bird.style.willChange = 'transform';
    bird.animate(keyfrm, {
        duration:70000,
        fill:"forwards",
        easing:'linear',
        delay:1000
    });
    bird.style.willChange = 'auto';
    
    
    
})