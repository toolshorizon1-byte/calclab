
function fmt(n){return n.toLocaleString(undefined,{maximumFractionDigits:2})}
function money(n){return '$'+fmt(Math.round(n*100)/100)}
function v(id){return parseFloat(document.getElementById(id).value)||0}
function out(id,h){document.getElementById(id).innerHTML=h}
function loan(){let p=v('p'),r=v('r')/100/12,n=v('n');let m=r>0?p*r/(1-Math.pow(1+r,-n)):p/n;out('res','<strong>Monthly payment:</strong> '+money(m)+'<br><strong>Total interest:</strong> '+money(m*n-p));}
function growth(){let p=v('p'),c=v('c'),r=v('r')/100,y=v('y');let b=p;for(let i=0;i<y;i++){b=b*(1+r)+c*12;}out('res','<strong>Projected balance:</strong> '+money(b)+'<br><span>Assumes a steady return — an illustration, not a forecast.</span>');}
function bmi(){let w=v('w'),h=v('h')/100;let b=w/(h*h);let cat=b<18.5?'Underweight range':b<25?'Healthy range':b<30?'Overweight range':'Obesity range';out('res','<strong>Your BMI:</strong> '+fmt(b)+' — '+cat+'<br><span>BMI is a screening index, not a diagnosis.</span>');}
function gpa(){let g=document.getElementById('grades').value.toUpperCase().split(/[^A-F]+/).filter(Boolean);let map={A:4,B:3,C:2,D:1,F:0};let s=0,ok=0;g.forEach(x=>{if(x in map){s+=map[x];ok++;}});out('res',ok?'<strong>GPA:</strong> '+fmt(s/ok)+' from '+ok+' grades':'Enter letter grades such as A B A C.');}
function pct(){let a=v('a'),b=v('b');out('res','<strong>'+fmt(a)+'% of '+fmt(b)+' is '+fmt(a/100*b)+'</strong><br>'+fmt(b)+' increased by '+fmt(a)+'% = '+fmt(b*(1+a/100))+'<br>'+fmt(b)+' decreased by '+fmt(a)+'% = '+fmt(b*(1-a/100)));}
function fuel(){let d=v('d'),e=v('e'),pr=v('pr');let f=d/e;out('res','<strong>Fuel needed:</strong> '+fmt(f)+' gallons<br><strong>Trip fuel cost:</strong> '+money(f*pr));}
