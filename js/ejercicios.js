//Calculadora de Edad
function calcularEdad(fechaNacimiento) 
{
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}

function mostrarEdad() 
{
    const nombre = prompt("Por favor, ingresa tu nombre:");
    const fechaNacimiento = prompt("Por favor, ingresa tu fecha de nacimiento (Año-Mes-Día):");
    const edad = calcularEdad(fechaNacimiento);

    console.log(`Hola ${nombre}, tienes ${edad} años`);
    mostrarEdad();
}


//Tirando Fruta
function TirandoFruta()
{
    const frutas = ['manzana', 'banana', 'pera', 'naranja', 'uva', 'durazno', 'mango', 'cereza', 'kiwi', 'sandía'];
    console.log("Lista de frutas disponibles:");
    frutas.forEach((fruta, index) => 
    {
        console.log(`${index + 1}. ${fruta}`);
    });
    
    const frutaBuscada = prompt("Por favor, ingresa el nombre de una fruta:").toLowerCase();
    
    if (frutas.includes(frutaBuscada)) {
        console.log(`Sí, tenemos ${frutaBuscada}!`);
    } 
    else 
    {
        console.log(`No, no tenemos ${frutaBuscada}!`)
    }
}

function Comparaciones()
{
//Comparaciones
//A
console.log(10 == '10');
//B
console.log(10 === '10');
//C
console.log(typeof 10.6);
//D
console.log(true === 1);
}
Comparaciones();

//Yo Objeto
function MostrarCiudad()
{
    const ciudad = {
        nombre: "Buenos Aires",
        fechaFundacion: "1536-02-02",
        poblacion: 2890000,
        extension: "203 km²"
    };

    for (let clave in ciudad) {
        console.log(`Clave: ${clave}, Valor: ${ciudad[clave]}`);
    }
}
MostrarCiudad();

//Doble de Elementos
function duplicarElementos(array) 
{
    const arrayDuplicado = array.map(numero => numero * 2);
    return arrayDoblado;
}

const numeros = [1, 2, 3, 4, 5];
const numerosDuplicados = duplicarElementos(numeros);

console.log("Array original:", numeros);
console.log("Array con elementos duplicados:", numerosDuplicados);

duplicarElementos();

//Triangulo Izquierda a Derecha
function dibujarTrianguloIzquierdaaDerecha(filas) 
{
    for (let i = 1; i <= filas; i++) {
        console.log('*'.repeat(i));
    }
}
dibujarTrianguloIzquierdaade(5);

//Triangulo Invertido
function dibujarTrianguloInvertido(filas) 
{
    for (let i = filas; i > 0; i--) {
        console.log('*'.repeat(i));
    }
}
dibujarTrianguloInvertido(5);

//Nombres con 'A'
function mostrarNombresConA() 
{
    const nombresIngresados = prompt("Por favor, ingresa una lista de nombres separados por comas:");
    const nombresArray = nombresIngresados.split(',').map(nombre => nombre.trim());

    const nombresConA = nombresArray.filter(nombre => nombre.charAt(0).toLowerCase() === 'a');
    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerHTML = `<p>Nombres que comienzan con "A": ${nombresConA.join(', ')}</p>`;
}
mostrarNombresConA();

//Reemplazar Palabras
function reemplazarPalabras() 
{
    const texto = prompt("Por favor, ingresa una cadena de texto:");
    const palabraAReemplazar = prompt("Ingresa la palabra que deseas reemplazar:");

    const palabraReemplazo = prompt("Ingresa la palabra de reemplazo:");
    const textoReemplazado = texto.split(palabraAReemplazar).join(palabraReemplazo);
    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerHTML = `<p>Texto resultante: ${textoReemplazado}</p>`;
}
reemplazarPalabras();

//Cortar Texto
function cortarTexto() 
{
    const texto = prompt("Ingresa una cadena de texto:");
    if(texto != null)
    {
        const numero = prompt("Ingresa el número de caracteres que deseas cortar:");
        const numeroCaracteres = Number(numero);

        if (!numeroCaracteres || numeroCaracteres <= 0) {
            alert("Por favor, ingresa un número válido mayor que 0.");
            return;
        }
    }
    const textoCortado = texto.substring(0, numeroCaracteres);
    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerHTML = `<p>Texto cortado: ${textoCortado}</p>`;
}
cortarTexto();

//String con Separador
function StringConSeparador() 
{
    const elementosIngresados = prompt("Ingresa una lista de elementos separados por comas:");
    const elementosArray = elementosIngresados.split(',').map(elemento => elemento.trim());
    
    const resultadoString = elementosArray.join(' - ');

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>String resultante: ${resultadoString}</p>`;
}
StringConSeparador();

//Calculadora de Recaudación
function calcularRecaudacion() 
{
    const pedidosIngresados = prompt("Ingresa una lista de pedidos ('nombre:total'), separados por comas:");
    const pedidosArray = pedidosIngresados.split(',');

    let totalRecaudado = 0;
    for (let pedido of pedidosArray) {
        const [nombre, total] = pedido.split(':');
        totalRecaudado += parseFloat(total);
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>Recaudación total: $${totalRecaudado.toFixed(2)}</p>`;
}
calcularRecaudacion();
