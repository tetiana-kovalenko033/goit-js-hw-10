import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as p}from"./assets/vendor-BbbuE1sJ.js";const e=document.querySelector("[data-start]"),s=document.querySelector("#datetime-picker"),y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let i,c;e.disabled=!0;const k={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){i=t[0],i<=new Date?(p.warning({title:"",timeout:2e4,message:"Please choose a date in the future",messageSize:"30px",messageLineHeight:"1.5",theme:"dark",position:"topRight",backgroundColor:"red"}),e.disabled=!0):e.disabled=!1}};f(s,k);function q(){e.disabled=!0,s.disabled=!0,c=setInterval(()=>{const t=Date.now(),n=i-t;if(n<=0){clearInterval(c),s.disabled=!1,e.disabled=!0,u(0,0,0,0);return}const{days:o,hours:a,minutes:d,seconds:r}=C(n);u(o,a,d,r)},1e3)}e.addEventListener("click",q);function C(t){const r=String(Math.floor(t/864e5)).padStart(2,"0"),l=String(Math.floor(t%864e5/36e5)).padStart(2,"0"),m=String(Math.floor(t%864e5%36e5/6e4)).padStart(2,"0"),h=String(Math.floor(t%864e5%36e5%6e4/1e3)).padStart(2,"0");return{days:r,hours:l,minutes:m,seconds:h}}function u(t,n,o,a){y.textContent=t,S.textContent=n,g.textContent=o,b.textContent=a}
//# sourceMappingURL=1-timer.js.map
