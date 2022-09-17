var out;
    
function add(n){
  if (out == null)
    out = n;
  else out = out.concat(n);
  document.getElementById("display").innerHTML= out;
};

function del(){
  if(out){
    out = out.slice(0,-1);
    if(!out)
      return "0";
    return out;
  }
  return "0";
};

document.getElementById("ac-btn").addEventListener('click', function handleClick(){
  document.getElementById('display').innerText = "0";
  out = null;
});

document.getElementById("equal-btn").addEventListener('click', function handleClick(){
  try {
    document.getElementById('display').innerText = out + '\n= ' + eval(out);
  } catch (error) {
    document.getElementById('display').innerText = "Syntax Error";
  }
  out = null;
});
