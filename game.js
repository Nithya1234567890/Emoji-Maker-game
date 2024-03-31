var red=document.getElementById('red');
var green=document.getElementById('green');
var yellow=document.getElementById('yellow');
var emoji=document.getElementById('emoji');
var colors=document.getElementById('selectColors');
var eyes=document.getElementById('selectEyes');
var mouth=document.getElementById('selectMouth');
var img=document.getElementById('superimg');

var eyeitem1=document.getElementById('eyeitem1');
var eyeitem2=document.getElementById('eyeitem2');
var eyeitem3=document.getElementById('eyeitem3');
var eyeitem4=document.getElementById('eyeitem4');
var eyeitem5=document.getElementById('eyeitem5');
var eyeitem6=document.getElementById('eyeitem6');

var mouthitem1=document.getElementById('mouthitem1');
var mouthitem2=document.getElementById('mouthitem2');
var mouthitem3=document.getElementById('mouthitem3');
var mouthitem4=document.getElementById('mouthitem4');
var mouthitem5=document.getElementById('mouthitem5');

var emojieye1=document.getElementById('emojieye1');
var emojieye2=document.getElementById('emojieye2');
var emojieye3=document.getElementById('emojieye3');
var emojieye4=document.getElementById('emojieye4');
var emojieye5=document.getElementById('emojieye5');
var emojieye6=document.getElementById('emojieye6');
var lefteye4=document.getElementById('lefteye4');
var righteye4=document.getElementById('righteye4');

var emojimouth1=document.getElementById('emojimouth1');
var emojimouth2=document.getElementById('emojimouth2');
var emojimouth3=document.getElementById('emojimouth3');
var emojimouth4=document.getElementById('emojimouth4');
var emojimouth5=document.getElementById('emojimouth5');

var next=document.getElementById('next');
var prev=document.getElementById('prev');
var text=document.getElementById('text');

red.onclick=function(){
    emoji.style.backgroundColor="red";
    colors.style.display="none";
    eyes.style.display="block";
    prev.style.display="block";
}
green.onclick=function(){
    emoji.style.backgroundColor="green";
    colors.style.display="none";
    eyes.style.display="block";
    prev.style.display="block";
}
yellow.onclick=function(){
    emoji.style.backgroundColor="yellow";
    colors.style.display="none";
    eyes.style.display="block";
    prev.style.display="block";
}
emoji.classList.add('eye1');


function echeck(){
    if(emojieye1.classList.contains('emojieye1')){
        emojieye1.classList.remove('emojieye1');
    }
    if(emojieye2.classList.contains('emojieye2')){
        emojieye2.classList.remove('emojieye2');
    }
    if(emojieye3.classList.contains('emojieye3')){
        emojieye3.classList.remove('emojieye3');
    }
    if(emojieye4.classList.contains('emojieye4')){
        lefteye4.innerHTML="";
    righteye4.innerHTML="";
        emojieye4.classList.remove('emojieye4');
    }
    if(emojieye5.classList.contains('emojieye5')){
        emojieye5.classList.remove('emojieye5');
    }
    if(emojieye6.classList.contains('emojieye6')){
        emojieye6.classList.remove('emojieye6');
    }
}

eyeitem1.onclick=function(){
    echeck();
    emojieye1.classList.add('emojieye1');
    eyes.style.display="none";
    mouth.style.display="block";
    next.style.display="none";
}
eyeitem2.onclick=function(){
    echeck();
    emojieye2.classList.add('emojieye2');
    eyes.style.display="none";
    mouth.style.display="block";
    next.style.display="none";
}
eyeitem3.onclick=function(){
    echeck();
    emojieye3.classList.add('emojieye3');
    eyes.style.display="none";
    mouth.style.display="block";
    next.style.display="none";
}
eyeitem4.onclick=function(){
    echeck();
    lefteye4.innerHTML="&gt;"
    righteye4.innerHTML="&lt;"
    emojieye4.classList.add('emojieye4');
    eyes.style.display="none";
    mouth.style.display="block";
    next.style.display="none";
}
eyeitem5.onclick=function(){
    echeck();
    emojieye5.classList.add('emojieye5');
    eyes.style.display="none";
    mouth.style.display="block";
    next.style.display="none";
}
eyeitem6.onclick=function(){
    echeck();
    emojieye6.classList.add('emojieye6');
    eyes.style.display="none";
    mouth.style.display="block";
    next.style.display="none";
}

function mcheck(){
    if(emojimouth1.classList.contains('emojimouth1')){
        emojimouth1.classList.remove('emojimouth1');
    }
    if(emojimouth2.classList.contains('emojimouth2')){
        emojimouth2.classList.remove('emojimouth2');
    }
    if(emojimouth3.classList.contains('emojimouth3')){
        emojimouth3.classList.remove('emojimouth3');
    }
    if(emojimouth4.classList.contains('emojimouth4')){
        emojimouth4.classList.remove('emojimouth4');
    }
    if(emojimouth5.classList.contains('emojimouth5')){
        emojimouth5.classList.remove('emojimouth5');
    }
}


mouthitem1.onclick=function(){
    mcheck();
    emojimouth1.classList.add('emojimouth1');
    text.style.display="block";
    img.style.display="block";
}
mouthitem2.onclick=function(){
    mcheck();
    emojimouth2.classList.add('emojimouth2');
    text.style.display="block";
    img.style.display="block";
}
mouthitem3.onclick=function(){
    mcheck();
    emojimouth3.classList.add('emojimouth3');
    text.style.display="block";
    img.style.display="block";
}
mouthitem4.onclick=function(){
    mcheck();
    emojimouth4.classList.add('emojimouth4');
    text.style.display="block";
    img.style.display="block";
}
mouthitem5.onclick=function(){
    mcheck();
    emojimouth5.classList.add('emojimouth5');
    text.style.display="block";
    img.style.display="block";
}

next.onclick=function(){
    if(colors.style.display=="block"){
        colors.style.display="none";
        eyes.style.display="block";
        prev.style.display="block";
        next.style.display="block";
    }
    else if(eyes.style.display=='block'){
        eyes.style.display="none";
        mouth.style.display="block";
        next.style.display="none";
        prev.style.display="block";
    }
}
prev.onclick=function(){
    if(eyes.style.display=='block'){
        eyes.style.display="none";
        colors.style.display="block";
        prev.style.display="none";
        next.style.direction="block";
        text.style.display="none";
        img.style.display="none";
    }
    else if(mouth.style.display=="block"){
        mouth.style.display="none";
        eyes.style.display="block";
        prev.style.display="block";
        next.style.display="block";
        text.style.display="none";
        img.style.display="none";
    }
}