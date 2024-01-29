const textarea=document.querySelector("textarea");
const p=document.getElementById("punc");
const ch=document.getElementById("Character");
const w=document.getElementById("words");
const spaces=document.getElementById("sp");
 function countWords(str) {
   str = str.replace(/(^\s*)|(\s*$)/gi,"");
   str = str.replace(/[ ]{2,}/gi," ");
  str = str.replace(/\n /,"\n");
   return str.split(' ').length;
 }
const regex=/[a-zA-Z0-9]/g;
const reg2=/[!,\;\.-?]/g;
const reg3=/\s/g;
textarea.addEventListener("keyup",e=>{
    let scHeight=e.target.scrollHeight;
    // textarea.style.height="auto";
    let s=String(e.target.value);
    const numOfChars = s.split(regex).length-1;
    const punc=s.split(reg2).length-1;
    const space=s.split(reg3).length-1;
    ch.innerHTML=numOfChars;
w.innerHTML=countWords(s);
p.innerHTML=punc;
spaces.innerHTML=space;
    textarea.style.height=`${scHeight}px`;
})
