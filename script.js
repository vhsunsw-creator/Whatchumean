let currentPage = 1;

function showPage(n){
  document.getElementById(`page${currentPage}`).classList.remove("active");
  setTimeout(()=>{
    document.getElementById(`page${n}`).classList.add("active");
    currentPage=n;
    if(n===8) startTyping();
    if(n===11) initMovie();
  },300);
}

/* PAGE 8 TYPEWRITER */
const paragraph = `This is my first time and ik tujhe bhot proposal aaye h,

and mujhe bhe krte hue thoda sa dr lg rha tha  
ke mujhe bhe reject na kr de 😅  

but maine chance liya and it was a yes,  
and sach m mai itna khush kbhi nhi hua.

It wasn't the only fact that you are beautiful ,
It was something else, something sort of mysterious 
I don't have a name for it , but it was always kept me wanting you 🌌

but everytime I see you  
m automatically khush hojata hu.

Sorry mai tere sath es time pr nhi hua,  
but itni surety deta hu  
ke aage isse bhe zyada special krunga 😊  

hope karta hu tujhe ye sb pasand aaye,  
kyuki ismey sach m bhot mehnat lgi h 🧸`;

function startTyping(){
  const el=document.getElementById("typeText");
  el.innerText="";
  let i=0;
  function type(){
    if(i<paragraph.length){
      el.innerText+=paragraph.charAt(i);
      i++;
      setTimeout(type,35);
    }
  }
  type();
}

/* PAGE 9 GIFT */
document.getElementById("giftCover").onclick=()=>{
  document.getElementById("giftCover").style.display="none";
  document.getElementById("polaroid").style.display="block";
}

/* PAGE 11 MOVIE */
function initMovie(){
  const yes=document.getElementById("yesBtn");
  const no=document.getElementById("noBtn");
  let scale=1;

  setInterval(()=>{
    scale+=0.05;
    yes.style.transform=`scale(${scale})`;
  },700);

  no.onclick=()=>{
    no.style.left=Math.random()*80+"%";
    no.style.top=Math.random()*200+"px";
  };

  yes.onclick=()=>{yes.innerText="YAYYY 😍🍿";}
}
