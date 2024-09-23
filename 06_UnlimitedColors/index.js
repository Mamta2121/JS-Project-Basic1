
const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    
    for( let i = 0; i < 6;  i++)
    {
         color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

//console.log(randomColor())
//console.log(document.getElementsByTagName('body')[0].style);

let intervalId;  //bahr bnana padega jisse ki scope global rhe =>or hum use clearTimout  me as reference use kr skte
console.log(intervalId)
const startChangingColor = function(){
    
    if( !intervalId )  //prevents multiple intervals from being created if the "start" button is clicked multiple times.
    {
        intervalId = setInterval(changeBgColor, 1000);
    }

    console.log(intervalId);  // see here difference is clearly seen when check is made and when check is not made
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
    //return setIntervalVar;
};

const stopChangingColor = function(){
    
     clearInterval(intervalId);
     intervalId = null; //clean up  //good practice
     
};

document.querySelector('#start').addEventListener( 'click', startChangingColor)

document.querySelector('#stop').addEventListener( 'click', stopChangingColor)