const toggle=document.getElementById('twoLineToggle');
    const panel=document.getElementById('navPanel');
    toggle.addEventListener('click',(e)=>{e.stopPropagation();panel.classList.toggle('open');});
    document.addEventListener('click',(e)=>{if(!panel.contains(e.target)&&!toggle.contains(e.target)){panel.classList.remove('open');}});
    document.querySelectorAll('.panel .links a').forEach(link=>link.addEventListener('click',()=>{setTimeout(()=>panel.classList.remove('open'),150);}));

    document.querySelectorAll('.theme-swatch').forEach(btn=>{
      btn.addEventListener('click',()=>{
        let t=btn.getAttribute('data-theme');
switch(t){
  case 'red':
    document.documentElement.style.setProperty('--accent','#e11d48');
    document.documentElement.style.setProperty('--shadow','0 0 20px rgba(225,29,72,0.9)');
    document.body.style.background='linear-gradient(135deg,#2b0212,#3b0b1a)';
    break;
  case 'green':
    document.documentElement.style.setProperty('--accent','#10b981');
    document.documentElement.style.setProperty('--shadow','0 0 20px rgba(16,185,129,0.9)');
    document.body.style.background='linear-gradient(135deg,#062015,#06321c)';
    break;
  case 'black':
    document.documentElement.style.setProperty('--accent','#9ca3af');
    document.documentElement.style.setProperty('--shadow','0 0 20px rgba(156,163,175,0.9)');
    document.body.style.background='linear-gradient(135deg,#000000,#0b0b0b)';
    break;
  case 'gold':
    document.documentElement.style.setProperty('--accent','#FFD700');
    document.documentElement.style.setProperty('--shadow','0 0 20px rgba(255,215,0,0.9)');
    document.body.style.background='linear-gradient(135deg,#1a1a2e,#16213e)';
    break;
  case 'blue':
    document.documentElement.style.setProperty('--accent','#1E90FF');
    document.documentElement.style.setProperty('--shadow','0 0 20px rgba(30,144,255,0.9)');
    document.body.style.background='linear-gradient(135deg,#0f172a,#1e3a8a)';
    break;
  case 'purple':
    document.documentElement.style.setProperty('--accent','#A855F7');
    document.documentElement.style.setProperty('--shadow','0 0 20px rgba(168,85,247,0.9)');
    document.body.style.background='linear-gradient(135deg,#3b0764,#6d28d9)';
    break;
  case 'teal':
    document.documentElement.style.setProperty('--accent','#14B8A6');
    document.documentElement.style.setProperty('--shadow','0 0 20px rgba(20,184,166,0.9)');
    document.body.style.background='linear-gradient(135deg,#042f2e,#134e4a)';
    break;
  case 'rosegold':
    document.documentElement.style.setProperty('--accent','#FFB6C1');
    document.documentElement.style.setProperty('--shadow','0 0 20px rgba(255,182,193,0.9)');
    document.body.style.background='linear-gradient(135deg,#3b0a0a,#b76e79)';
    break;
}
      });
    });