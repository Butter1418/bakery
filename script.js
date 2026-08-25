const menu=document.querySelector('.menu');const nav=document.querySelector('nav');
if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));
function sendForm(e){e.preventDefault();const n=document.getElementById('form-note');n.textContent='ขอบคุณ! เราได้รับข้อความแล้ว 🍪';e.target.reset();return false}
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.style.opacity=1;x.target.style.transform='translateY(0)'}}),{threshold:.12});
document.querySelectorAll('.food-card,.project,.steps>div,.intro,.quote').forEach(x=>{x.style.opacity=0;x.style.transform='translateY(20px)';x.style.transition='opacity .6s ease, transform .6s ease';io.observe(x)});
