let butik = document.querySelector('#butik')
let kitcen = document.querySelector('.kitcen-flex')
let more = document.querySelector('#more')
let mor = document.querySelector('#mor')
let omg = document.querySelector('.omg')
let omg1 = document.querySelector('.omg1')
let a = 0
console.log(mor);
console.log(more);
function openmenu(){
    if (kitcen.style.height == '550px'){
        kitcen.style.height = '265px'
        butik.style.backgroundColor = '#D5621D'
        butik.innerText = 'ВСЕ МЕНЮ'
    }else{
        kitcen.style.height = '550px'
        butik.innerText = 'СКРЫТЬ МЕНЮ'
        butik.style.backgroundColor = 'grey'
    }
    a += 1
    if(a == 5){
        butik.removeEventListener('click',openmenu)
        butik.innerText = 'НЕ СПАМЬ!!'
    }
}

butik.addEventListener('click',openmenu)
let s = 0
function moree(){
    if(omg1.style.height == '500px'){
        omg1.style.height = '376px'
        mor.innerText = 'ПОДРОБНЕЕ'
    }else{
        omg1.style.height = '500px'
        mor.innerText = 'ЗАКРЫТЬ'
    }
    s += 1
    if(s == 5){
        mor.innerText = 'НЕ СПАМЬ!!'
        console.log('PLS ING')
        mor.removeEventListener('click',moree)
    }
}  

mor.addEventListener('click',moree)

let c = 0

function moro(){
    if (omg.style.height == '500px'){
        omg.style.height = '376px'
        more.innerText = 'ПОДРОБНЕЕ'
    } else{
        omg.style.height = '500px'
        more.innerText = 'ЗАКРЫТЬ'
    }
    c += 1
    if(c == 5){
        more.innerText = 'НЕ СПАМЬ!!'
        more.removeEventListener('click',moro)
    }
}

more.addEventListener('click',moro)
AOS.init();

let loudspear = document.querySelector('.loudspeares')
let amplifi = document.querySelector('.amplifier')
let fo = document.querySelector('.foh')
let backlin = document.querySelector('.backline')
let microphonese = document.querySelector('.microphoneset')
let djj = document.querySelector('.dj')
let q = 0
function loudspeare(){
    if (loudspear.style.height == '253px'){
        loudspear.style.height = '67px'
        loudspear.innerText = 'LOUDSPEAKERS'
    } else{
        loudspear.style.height = '253px'
        setTimeout(()=>{ loudspear.innerHTML = '<div class="l"><h2>LOUDSPEAKERS</h2> <p>·Acoustic system BELL Top 600W x 2</p><p>·Acoustic system BELL Mid 600W x 2</p> <p>·Acoustic system BELL Sub 1000W x 2</p> ·Front monitor Yamaha SM12V 300w x 2<p> ·Backside monitor Dynacord 500W x 2</p></div>'}, 300)
        setTimeout(()=>{document.querySelector('.l').style.opacity = 1}, 350)
       
    }
    amplifi.style.height = '67px'
    amplifi.innerText = 'AMPLIFIER'
    fo.style.height = '67px'
    fo.innerText = 'FOH'
    backlin.style.height = '67px'
    backlin.innerText = 'BACKLINE'
    microphonese.style.height = '67px'
    microphonese.innerText = 'MICROPHONE SET'
    djj.style.height = '67px'
    djj.innerText = 'DJ EQIUPMENT'
    q += 1
    if(q == 10){
        loudspear.removeEventListener('click',loudspeare)
    }
}
loudspear.addEventListener('click', loudspeare)
let w = 0
function amplifie(){
    if (amplifi.style.height == '253px'){
        amplifi.style.height = '67px'
        amplifi.innerText = 'AMPLIFIER'
    } else{
        amplifi.style.height = '253px'
        
        setTimeout(()=>{ amplifi.innerHTML = '<div class="a"><h2>LOUDSPEAKERS</h2> <p>·Acoustic system BELL Top 600W x 2</p><p>·Acoustic system BELL Mid 600W x 2</p> <p>·Acoustic system BELL Sub 1000W x 2</p> ·Front monitor Yamaha SM12V 300w x 2<p> ·Backside monitor Dynacord 500W x 2</p></div>'}, 300)
        setTimeout(()=>{document.querySelector('.a').style.opacity = 1}, 350)
    }
    loudspear.style.height = '67px'
    loudspear.innerText = 'LOUDSPEAKER'
    fo.style.height = '67px'
    fo.innerText = 'FOH'
    backlin.style.height = '67px'
    backlin.innerText = 'BACKLINE'
    microphonese.style.height = '67px'
    microphonese.innerText = 'MICROPHONE SET'
    djj.style.height = '67px'
    djj.innerText = 'DJ EQIUPMENT'
    w += 1
    if(w == 10){
        amplifi.removeEventListener('click',amplifie)
    }
}
amplifi.addEventListener('click', amplifie)
let e = 0
function f(){
    if (fo.style.height == '253px'){
        fo.style.height = '67px'
        fo.innerText = 'FOH'
    } else{
        fo.style.height = '253px'
        setTimeout(()=>{ fo.innerHTML = '<div class="f"><h2>LOUDSPEAKERS</h2> <p>·Acoustic system BELL Top 600W x 2</p><p>·Acoustic system BELL Mid 600W x 2</p> <p>·Acoustic system BELL Sub 1000W x 2</p> ·Front monitor Yamaha SM12V 300w x 2<p> ·Backside monitor Dynacord 500W x 2</p></div>'}, 300)
        setTimeout(()=>{document.querySelector('.f').style.opacity = 1}, 350)
    }
    amplifi.style.height = '67px'
    amplifi.innerText = 'AMPLIFIER'
    loudspear.style.height = '67px'
    loudspear.innerText = 'LOUDSPEAKER'
    backlin.style.height = '67px'
    backlin.innerText = 'BACKLINE'
    microphonese.style.height = '67px'
    microphonese.innerText = 'MICROPHONES SET'
    djj.style.height = '67px'
    djj.innerText = 'DJ EQIUPMENT'
    e += 1
    if(e == 10){
        fo.removeEventListener('click', f)
    }
}
fo.addEventListener('click', f)

let u = 0
function backli(){
    if (backlin.style.height == '253px'){
        backlin.style.height = '67px'
        backlin.innerText = 'BACKLINE'
    } else{
        backlin.style.height = '253px'
        setTimeout(()=>{ backlin.innerHTML = '<div class="b"><h2>LOUDSPEAKERS</h2> <p>·Acoustic system BELL Top 600W x 2</p><p>·Acoustic system BELL Mid 600W x 2</p> <p>·Acoustic system BELL Sub 1000W x 2</p> ·Front monitor Yamaha SM12V 300w x 2<p> ·Backside monitor Dynacord 500W x 2</p></div>'}, 300)
        setTimeout(()=>{document.querySelector('.b').style.opacity = 1}, 350)
    }
    amplifi.style.height = '67px'
    amplifi.innerText = 'AMPLIFIER'
    fo.style.height = '67px'
    fo.innerText = 'FOH'
    loudspear.style.height = '67px'
    loudspear.innerText = 'LOUDSPEAKER'
    microphonese.style.height = '67px'
    microphonese.innerText = 'MICROPHONE SET'
    djj.style.height = '67px'
    djj.innerText = 'DJ EQIUPMENT'
    u += 1
    if(u == 10){
        backlin.removeEventListener('click', backli)
    }
}
backlin.addEventListener('click', backli)

let r = 0
function microphones(){
    if (microphonese.style.height == '253px'){
        microphonese.style.height = '67px'
        microphonese.innerText = 'MICROPHONE SET'
    } else{
        microphonese.style.height = '253px'
        setTimeout(()=>{ microphonese.innerHTML = '<div class="m"><h2>LOUDSPEAKERS</h2> <p>·Acoustic system BELL Top 600W x 2</p><p>·Acoustic system BELL Mid 600W x 2</p> <p>·Acoustic system BELL Sub 1000W x 2</p> ·Front monitor Yamaha SM12V 300w x 2<p> ·Backside monitor Dynacord 500W x 2</p></div>'}, 300)
        setTimeout(()=>{document.querySelector('.m').style.opacity = 1}, 350)
    }
    amplifi.style.height = '67px'
    amplifi.innerText = 'AMPLIFIER'
    fo.style.height = '67px'
    fo.innerText = 'FOH'
    backlin.style.height = '67px'
    backlin.innerText = 'BACKLINE'
    loudspear.style.height = '67px'
    loudspear.innerText = 'LOUDSPEAKER'
    djj.style.height = '67px'
    djj.innerText = 'DJ EQIUPMENT'
    r += 1
    if(r == 10){
        microphonese.removeEventListener('click', microphones)
    }
}
microphonese.addEventListener('click', microphones)
let y = 0
function d(){
    if (djj.style.height == '253px'){
        djj.style.height = '67px'
        djj.innerText = 'DJ EQIUPMENT'
    } else{
        djj.style.height = '253px'
        setTimeout(()=>{ djj.innerHTML = '<div class="d"><h2>LOUDSPEAKERS</h2> <p>·Acoustic system BELL Top 600W x 2</p><p>·Acoustic system BELL Mid 600W x 2</p> <p>·Acoustic system BELL Sub 1000W x 2</p> ·Front monitor Yamaha SM12V 300w x 2<p> ·Backside monitor Dynacord 500W x 2</p></div>'}, 300)
        setTimeout(()=>{document.querySelector('.d').style.opacity = 1}, 350)
    }
    amplifi.style.height = '67px'
    amplifi.innerText = 'AMPLIFIER'
    fo.style.height = '67px'
    fo.innerText = 'FOH'
    backlin.style.height = '67px'
    backlin.innerText = 'BACKLINE'
    microphonese.style.height = '67px'
    microphonese.innerText = 'MICROPHONE SET'
    loudspear.style.height = '67px'
    loudspear.innerText = 'LOUDSPEAKER'
    y += 1
    if(y == 10){
        djj.removeEventListener('click', d)
    }
}
djj.addEventListener('click', d)