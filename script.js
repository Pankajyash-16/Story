/* ==================================================
   PANKAJ ❤️ PRIYANKA
   PREMIUM LOVE STORY WEBSITE
   SCRIPT.JS PART 1
================================================== */


/* ---------- LOADER ---------- */


window.addEventListener("load",()=>{


    const loader=document.getElementById("loader");


    setTimeout(()=>{

        if(loader){

            loader.style.opacity="0";

            setTimeout(()=>{

                loader.style.display="none";

            },1000);

        }

    },2000);


});



/* ---------- SCROLL PROGRESS ---------- */


window.addEventListener("scroll",()=>{


    const progress=document.getElementById("progressBar");


    if(progress){


        let scrollTop=document.documentElement.scrollTop;


        let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;


        let percentage=(scrollTop/height)*100;


        progress.style.width=percentage+"%";


    }


});



/* ---------- COMPLIMENT BUTTON ---------- */


const compliments=[

"Your smile is the most beautiful thing ❤️",

"You make ordinary moments special ✨",

"Keep smiling, because your smile is priceless 😊",

"Some people shine without trying... You are one of them 💜",

"Your happiness matters a lot ❤️"

];


const complimentBtn=document.getElementById("complimentBtn");


const complimentText=document.getElementById("complimentText");



if(complimentBtn){


complimentBtn.addEventListener("click",()=>{


let random=Math.floor(Math.random()*compliments.length);


complimentText.innerHTML=compliments[random];


});


}


/* ---------- SURPRISE BUTTON ---------- */


const surpriseBtn=document.getElementById("surpriseBtn");


const surpriseText=document.getElementById("surpriseText");



if(surpriseBtn){


surpriseBtn.addEventListener("click",()=>{


surpriseText.innerHTML=

"💖 You reached the end of this little journey. Thank you for being a beautiful memory. ❤️";


});


}
/* ==================================================
   SCRIPT.JS PART 2
   GAME + EFFECTS
================================================== */


/* ---------- HEART GAME ---------- */


let score=0;


const startGame=document.getElementById("startGame");

const gameArea=document.getElementById("game-area");

const scoreText=document.getElementById("score");



if(startGame){


startGame.addEventListener("click",()=>{


score=0;


scoreText.innerHTML=score;


gameArea.innerHTML="";


createHeart();


});


}



function createHeart(){


if(!gameArea) return;



const heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="absolute";


heart.style.fontSize="35px";


heart.style.cursor="pointer";


heart.style.left=Math.random()*80+"%";


heart.style.top=Math.random()*80+"%";



heart.addEventListener("click",()=>{


score++;


scoreText.innerHTML=score;


heart.remove();



if(score<10){


createHeart();


}

else{


gameArea.innerHTML="🎉 You collected all hearts ❤️";


}


});



gameArea.appendChild(heart);


}




/* ---------- PROPOSAL BUTTON ---------- */


const proposalBtn=document.getElementById("proposalBtn");


const proposalMessage=document.getElementById("proposalMessage");



if(proposalBtn){


proposalBtn.addEventListener("click",()=>{


proposalMessage.innerHTML=

"❤️ Thank you for reading my feelings. I hope this brings a smile to your face. ❤️";


createFloatingHearts();


});


}



/* ---------- CLICK HEART EFFECT ---------- */


document.addEventListener("click",(e)=>{


let heart=document.createElement("span");


heart.innerHTML="❤️";


heart.style.position="fixed";


heart.style.left=e.clientX+"px";


heart.style.top=e.clientY+"px";


heart.style.fontSize="25px";


heart.style.pointerEvents="none";


heart.style.animation="floatClick 1.5s ease forwards";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},1500);



});




/* ---------- FLOATING HEART CREATOR ---------- */


function createFloatingHearts(){


for(let i=0;i<20;i++){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";


heart.style.left=Math.random()*100+"vw";


heart.style.bottom="0";


heart.style.fontSize="30px";


heart.style.animation="floatUp 4s linear";


heart.style.zIndex="999";



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},4000);



}


}
/* ==================================================
   SCRIPT.JS PART 3
   EXTRA INTERACTIONS
================================================== */


/* ---------- SMOOTH SCROLL ---------- */


document.querySelectorAll("a[href^='#']").forEach(link=>{


link.addEventListener("click",function(e){


e.preventDefault();


let target=document.querySelector(this.getAttribute("href"));


if(target){


target.scrollIntoView({

behavior:"smooth"

});


}


});


});



/* ---------- TYPEWRITER EFFECT ---------- */


function typeWriter(element,text,speed=80){


let i=0;


element.innerHTML="";



function typing(){


if(i<text.length){


element.innerHTML += text.charAt(i);


i++;


setTimeout(typing,speed);


}


}



typing();


}



const heroTitle=document.querySelector(".hero h2");


if(heroTitle){


let original=heroTitle.innerHTML;


typeWriter(heroTitle,original,100);


}




/* ---------- RANDOM HEART BACKGROUND ---------- */


function createBackgroundHeart(){


let heart=document.createElement("div");


heart.innerHTML="💜";


heart.style.position="fixed";


heart.style.left=Math.random()*100+"vw";


heart.style.bottom="-20px";


heart.style.fontSize=(Math.random()*20+20)+"px";


heart.style.opacity=".7";


heart.style.pointerEvents="none";


heart.style.animation="floatUp 6s linear";



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},6000);


}



setInterval(createBackgroundHeart,2000);
/* ==================================================
   SCRIPT.JS PART 4
   SCROLL + PREMIUM EFFECTS
================================================== */


/* ---------- SCROLL REVEAL ---------- */


const revealItems = document.querySelectorAll(
".story-section, .memory-card, .letter-card, .proposal-card"
);



function revealOnScroll(){


revealItems.forEach(item=>{


let position=item.getBoundingClientRect().top;


let screenHeight=window.innerHeight;



if(position < screenHeight - 100){


item.style.opacity="1";

item.style.transform="translateY(0)";


}


});


}



revealItems.forEach(item=>{


item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition="1s ease";


});



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();




/* ---------- TOUCH HEART EFFECT ---------- */


document.addEventListener(
"touchstart",
(e)=>{


let touch=e.touches[0];


let heart=document.createElement("span");


heart.innerHTML="💖";


heart.style.position="fixed";


heart.style.left=touch.clientX+"px";


heart.style.top=touch.clientY+"px";


heart.style.fontSize="30px";


heart.style.pointerEvents="none";


heart.style.animation="floatClick 1.5s forwards";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},1500);



}

);




/* ---------- SPARKLE CREATOR ---------- */


function createSparkle(){


let sparkle=document.createElement("span");


sparkle.innerHTML="✨";


sparkle.style.position="fixed";


sparkle.style.left=Math.random()*100+"vw";


sparkle.style.top=Math.random()*100+"vh";


sparkle.style.fontSize="20px";


sparkle.style.pointerEvents="none";


sparkle.style.animation="fadeUp 3s forwards";



document.body.appendChild(sparkle);



setTimeout(()=>{


sparkle.remove();


},3000);



}



setInterval(createSparkle,1500);
/* ==================================================
   SCRIPT.JS PART 5
   FINAL FEATURES
================================================== */


/* ---------- SCROLL TO TOP ---------- */

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topButton";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
width:55px;
height:55px;
border:none;
border-radius:50%;
font-size:22px;
display:none;
z-index:9999;
cursor:pointer;
background:linear-gradient(135deg,#ff4ecd,#7b61ff);
color:white;
box-shadow:0 10px 25px rgba(0,0,0,.25);
`;

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/* ---------- TYPING EFFECT FOR SURPRISE ---------- */

const surpriseMessage =

"Priyanka ❤️ Thank you for reading everything. I hope this little website brought at least one smile to your face.";

function typeSurprise(){

    if(!surpriseText) return;

    surpriseText.innerHTML = "";

    let i = 0;

    function write(){

        if(i < surpriseMessage.length){

            surpriseText.innerHTML += surpriseMessage.charAt(i);

            i++;

            setTimeout(write,40);

        }

    }

    write();

}

if(surpriseBtn){

    surpriseBtn.addEventListener("click",typeSurprise);

}



/* ---------- EXTRA HEART BURST ---------- */

function heartBurst(){

    for(let i=0;i<30;i++){

        let heart=document.createElement("span");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top=Math.random()*100+"vh";

        heart.style.fontSize=(20+Math.random()*20)+"px";

        heart.style.pointerEvents="none";

        heart.style.animation="floatClick 2s forwards";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },2000);

    }

}

if(proposalBtn){

    proposalBtn.addEventListener("click",heartBurst);

}



console.log("❤️ Pankaj & Priyanka Website Loaded Successfully ❤️");
/* ==================================================
   SCRIPT.JS PART 6
   FINAL PREMIUM FEATURES
================================================== */


/* ---------- ACTIVE NAV LINK ---------- */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


/* ---------- WELCOME MESSAGE ---------- */

setTimeout(()=>{

    console.log("❤️ Welcome Priyanka ❤️");

},1000);



/* ---------- PROPOSAL SUCCESS EFFECT ---------- */

if(proposalBtn){

proposalBtn.addEventListener("click",()=>{

proposalBtn.disabled=true;

proposalBtn.innerHTML="❤️ Thank You ❤️";

});

}



/* ---------- RANDOM GLOW EFFECT ---------- */

function randomGlow(){

const cards=document.querySelectorAll(

".memory-card,.proposal-card,.letter-card,.story-glass"

);

cards.forEach(card=>{

card.style.transition="0.5s";

});

}

randomGlow();



/* ---------- PERFORMANCE ---------- */

window.addEventListener("load",()=>{

document.body.style.visibility="visible";

});



console.log("Premium Website Ready ❤️");
/* ===========================
   FLYING EMOJIS
===========================*/

const emojis=[
"❤️","💖","💕","💜",
"🤍","✨","🌸","💗",
"🥰","😍","🤗","💘","💝","💖","💫","🌟"
];

function createEmoji(){

const emoji=document.createElement("div");

emoji.className="emoji";

emoji.innerHTML=
emojis[Math.floor(Math.random()*emojis.length)];

emoji.style.left=Math.random()*100+"vw";

emoji.style.fontSize=
(20+Math.random()*25)+"px";

emoji.style.animationDuration=
(6+Math.random()*5)+"s";

document.querySelector(".emoji-container").appendChild(emoji);

setTimeout(()=>{

emoji.remove();

},11000);

}

setInterval(createEmoji,350);
/* ===========================
   FALLING ROSE PETALS
=========================== */

const roses = ["🌹","🌺","🌸","💐","🌻","🌼","🌷","🥀","🪻"];

function createRose(){

    const rose = document.createElement("div");

    rose.className = "rose";

    rose.innerHTML =
        roses[Math.floor(Math.random()*roses.length)];

    rose.style.left =
        Math.random()*100 + "vw";

    rose.style.fontSize =
        (18 + Math.random()*20) + "px";

    rose.style.animationDuration =
        (6 + Math.random()*6) + "s";

    document.querySelector(".rose-container")
        .appendChild(rose);

    setTimeout(()=>{
        rose.remove();
    },12000);

}

setInterval(createRose,400);
/*==================================
      3D PARTICLE UNIVERSE
==================================*/

function createParticle(){

const particle=document.createElement("div");

particle.className="particle";

const size=Math.random()*8+3;

particle.style.width=size+"px";

particle.style.height=size+"px";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=

(6+Math.random()*8)+"s";

particle.style.background=

["#ffffff",

"#ff4ecd",

"#6c63ff",

"#00d4ff",

"#ffd6f7"][Math.floor(Math.random()*5)];

document

.getElementById("particles")

.appendChild(particle);

setTimeout(()=>{

particle.remove();

},14000);

}

setInterval(createParticle,120);
/*==============================
     3D BUTTERFLIES
==============================*/

function createButterfly(){

const butterfly=document.createElement("div");

butterfly.className="butterfly";

butterfly.innerHTML="🦋";

butterfly.style.left=Math.random()*100+"vw";

butterfly.style.animationDuration=

(8+Math.random()*6)+"s";

document

.getElementById("butterflies")

.appendChild(butterfly);

setTimeout(()=>{

butterfly.remove();

},15000);

}

setInterval(createButterfly,1800);
/*=========================================
        SHOOTING STARS
=========================================*/

function createStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=Math.random()*40+"vh";

    star.style.left=(60+Math.random()*40)+"vw";

    star.style.animationDuration=
    (2+Math.random()*2)+"s";

    document
    .getElementById("shooting-stars")
    .appendChild(star);

    setTimeout(()=>{

        star.remove();

    },4000);

}

setInterval(createStar,3500);
/*=========================================
      PERFORMANCE MODE
=========================================*/

const isMobile =
/Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);

const LOW_MODE = isMobile;

const SETTINGS = {

    emojiDelay : LOW_MODE ? 900 : 350,

    roseDelay : LOW_MODE ? 1000 : 400,

    particleDelay : LOW_MODE ? 350 : 120,

    butterflyDelay : LOW_MODE ? 4500 : 1800,

    shootingDelay : LOW_MODE ? 9000 : 3500

};

console.log("Performance Mode :",LOW_MODE ? "Mobile":"Desktop");
/*=========================================
        PROPOSAL PREMIUM EFFECT
=========================================*/

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const proposalResult = document.getElementById("proposalResult");

/* YES Button */

if(yesBtn){

yesBtn.addEventListener("click",()=>{

proposalResult.innerHTML=`

<div class="success-box">

<h2>💖 Thank You 💖</h2>

<p>

You just made my heart smile...

🌹❤️

</p>

</div>

`;

heartExplosion();

});

}

/* NO Button */

if(noBtn){

noBtn.addEventListener("mouseover",()=>{

const x=Math.random()*250-125;

const y=Math.random()*120-60;

noBtn.style.transform=`translate(${x}px,${y}px)`;

});

}

/* Heart Explosion */

function heartExplosion(){

for(let i=0;i<40;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=(window.innerWidth/2)+"px";

heart.style.top=(window.innerHeight/2)+"px";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

heart.style.transition="2s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.left=(Math.random()*window.innerWidth)+"px";

heart.style.top=(Math.random()*window.innerHeight)+"px";

heart.style.opacity="0";

heart.style.transform="scale(2) rotate(720deg)";

},50);

setTimeout(()=>{

heart.remove();

},2200);

}

}
/*=========================================
        ROSE PETALS RAIN
=========================================*/

function startRoseRain(){

const emojis=["🌹","🌸","🌺","💖"];

for(let i=0;i<35;i++){

setTimeout(()=>{

const rose=document.createElement("div");

rose.className="rose";

rose.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

rose.style.left=Math.random()*100+"vw";

rose.style.fontSize=(20+Math.random()*25)+"px";

rose.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(rose);

setTimeout(()=>{

rose.remove();

},8000);

},i*150);

}

}

if(yesBtn){

yesBtn.addEventListener("click",()=>{

startRoseRain();

});

}
/*=========================================
        CONFETTI BLAST
=========================================*/

function createConfetti(){

const colors=[
"#ff4fa3",
"#7b2ff7",
"#ffd700",
"#4facfe",
"#ffffff"
];

for(let i=0;i<120;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.background=colors[Math.floor(Math.random()*colors.length)];

confetti.style.animationDuration=(3+Math.random()*3)+"s";

confetti.style.transform=`rotate(${Math.random()*360}deg)`;

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},6000);

}

}

if(yesBtn){

yesBtn.addEventListener("click",()=>{

createConfetti();

});

}
/*=========================================
      FLOATING HEARTS BACKGROUND
=========================================*/

function createFloatingHeart(){

const heart=document.createElement("div");

heart.className="floating-heart";

const hearts=["❤️","💖","💕","💗","💝"];

heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(6+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},11000);

}

setInterval(createFloatingHeart,500);
/*=========================================
      MOUSE HEART TRAIL
=========================================*/

document.addEventListener("mousemove",(e)=>{

const heart=document.createElement("div");

heart.className="mouse-heart";

const emojis=["❤️","💖","💕","✨","💗"];

heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.fontSize=(10+Math.random()*15)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1000);

});
/*=========================================
        FINAL LOVE SCREEN
=========================================*/

const loveScreen=document.getElementById("loveScreen");

if(yesBtn){

yesBtn.addEventListener("click",()=>{

setTimeout(()=>{

loveScreen.classList.add("show");

/* 4 second baad automatically hide */

setTimeout(()=>{

loveScreen.classList.remove("show");

},4000);

},2500);

});

}