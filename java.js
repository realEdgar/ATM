class Billete
{
  constructor(valor, cantidad)
  {
    this.imagen = new Image();
    this.valor = valor;
    this.cantidad = cantidad;
    this.imagen.src = imagenes[this.valor];
  }
}
function contar() {
  total = 0;
  for(let tot of caja) {
    total += tot.valor * tot.cantidad;
    cuenta.innerHTML = total;
  }  
}

const imagenes = [];
imagenes["50"] = "./images/dolar50.jpg";
imagenes["20"] = "./images/dolar20.jpg";
imagenes["10"] = "./images/dolar10.jpg";


const x = document.getElementById("valor");
const pulsador = document.getElementById("boton");
const resultado = document.getElementById("resultado");
const cuenta = document.getElementById("cuenta");
const reset = document.getElementById("reset");

reset.addEventListener('click', () => {
  x.value = null
})

let caja = [];
caja.push(new Billete(50,10));
caja.push(new Billete(20,10));
caja.push(new Billete(10,10));
let entregado = [];
let div = 0;
let papeles = 0;
contar()

console.log(caja);
pulsador.addEventListener("click", addValor);

function addValor() {
  let dinero = parseInt(x.value);
  setTimeout(()=>{
    x.value = null
  },1000)

    if(dinero > 800){
      alert(`No puedes retirar esa cantidad, el limite es 800 Dolares`)
    }
    else if(total >= dinero) {
      for(let b of caja) {
        if(dinero > 0) {
          div = Math.floor(dinero/b.valor);
          if(div > b.cantidad) {
            papeles = b.cantidad;
          }else{
            papeles = div;
          }
          b.cantidad -= papeles;
          for(let i = 0; i < papeles; i++) {
            entregado.push(new Billete(b.valor, 1));
          }
          setTimeout(()=>{
            return  entregado = [];
          }, 3000)
          dinero -= (b.valor * papeles);
        }
      }
      if(dinero == 0) {           
          for(let entrega of entregado) {
            resultado.innerHTML += `<img src=${entrega.imagen.src} width="100" height="40" style="margin: 5px"/>`;
          }
          if(resultado.innerHTML){
            setTimeout(()=>{
              return resultado.innerHTML = [];
            }, 5000)
          }
          contar()
      } else {
        alert('No tengo los billetes necesarios')
      }
    } else{
      alert('No hay dinero suficiente');
  }
  console.log(entregado);
}



const buttonOne = document.getElementById('one');
const buttontwo = document.getElementById('two');
const buttonThree = document.getElementById('three');
const buttonFour = document.getElementById('four');
const buttonFive = document.getElementById('five');
const buttonSix = document.getElementById('six');
const buttonSeven = document.getElementById('seven');
const buttonEight = document.getElementById('eight');
const buttonNine = document.getElementById('nine');
const buttonZero = document.getElementById('zero');

buttonOne.addEventListener('click', ()=> x.value += '1')
buttontwo.addEventListener('click', ()=> x.value += '2')
buttonThree.addEventListener('click', ()=> x.value += '3')
buttonFour.addEventListener('click', ()=> x.value += '4')
buttonFive.addEventListener('click', ()=> x.value += '5')
buttonSix.addEventListener('click', ()=> x.value += '6')
buttonSeven.addEventListener('click', ()=> x.value += '7')
buttonEight.addEventListener('click', ()=> x.value += '8')
buttonNine.addEventListener('click', ()=> x.value += '9')
buttonZero.addEventListener('click', ()=> x.value += '0')


