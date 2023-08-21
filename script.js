// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

//me ordena de menor a mayor un array (a-z sin importar si tiene mayuscula o no)
function orden(lista)
{
  lista.sort((a,b)=>
  {
    a=a.toLowerCase();
    b=b.toLowerCase();
    if(a == b)  {return 0;}
    if(a < b)   {return -1;}
    if(a > b)   {return 1;}
  });
  return lista;
}
//me filtra un array, dejandome solo los que sean tipo string
function filtrar(listaAFiltrar)
{
  let filtro=[];
  listaAFiltrar.forEach((esString) =>
  {
    if(typeof esString==='string')
    {
      filtro.push(esString);
    }
  })
  return filtro;
}
//llamo a la primera funcion pasandole como parametro la lista ordenada de los string que fueron "filtrados"
document.addEventListener("DOMContentLoaded", (e) => {
  showList(orden(filtrar(strangeArray)));
});
