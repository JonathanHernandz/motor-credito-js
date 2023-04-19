
const minMasc = [
    {A:100, B:1000, C: 400, D:400},
    {A:400, B:600, C: 200, D:300},
    {A:900, B:1000, C: 200, D:500},
    {A:100, B:1000, C: 1000, D:900},
    {A:600, B:1000, C: 600, D:1000}
    ];

const maxMasc = [
    {A:4900, B:4700, C: 5000, D:4400},
    {A:4700, B:4400, C: 4700, D:4700},
    {A:4600, B:5000, C: 5000, D:4300},
    {A:4600, B:4400, C: 4200, D:4900},
    {A:4500, B:4900, C: 4600, D:4300}
]

const minFem = [
    {A:800, B:800, C: 200, D:500},
    {A:800, B:700, C: 900, D:1000},
    {A:800, B:100, C: 700, D:600},
    {A:600, B:600, C: 800, D:400},
    {A:200, B:700, C: 100, D:700}
    ];

const maxFem = [
    {A:4000, B:4700, C: 4600, D:5000},
    {A:4200, B:4200, C: 4900, D:4900},
    {A:4100, B:4500, C: 4600, D:4700},
    {A:4200, B:4300, C: 4700, D:5000},
    {A:4500, B:4400, C: 4000, D:4300}
]

const getFecha = (fechaPrimerEmpleo) =>{
    const fecha = new Date(fechaPrimerEmpleo.split('/').reverse().join('-'));
    // obtener la fecha actual
    const fechaActual = new Date();
    // calcular la diferencia en meses
    const meses = (fechaActual.getFullYear() - fecha.getFullYear()) * 12 + (fechaActual.getMonth() - fecha.getMonth());
    // console.log(meses);
    return meses
}
    
    
const calculoMotor = (tipoNomina,fechaPrimerEmpleo, genero) => {
    let resultado = {montoMinimo: 0,montoMaximo: 0, recomendacionLinea: 0}
    const meses = getFecha(fechaPrimerEmpleo)
    let p1,p2;

    //Femenino
    if(genero === 'f'){
        if(meses>=0&&meses<24){
            resultado.montoMinimo = minFem[0][tipoNomina]
            resultado.montoMaximo = maxFem[0][tipoNomina]
            console.log(resultado.montoMinimo)
        }
        if(meses === 25 ){
            resultado.montoMinimo = minFem[1][tipoNomina]
            resultado.montoMaximo = maxFem[1][tipoNomina]
        }
        if(meses === 26 ){
            resultado.montoMinimo = minFem[2][tipoNomina]
            resultado.montoMaximo = maxFem[2][tipoNomina]
        }
        if(meses === 27 ){
            resultado.montoMinimo = minFem[2][tipoNomina]
            resultado.montoMaximo = maxFem[2][tipoNomina]
        }
        if(meses >= 28 ){
            resultado.montoMinimo = minFem[4][tipoNomina]
            resultado.montoMaximo = maxFem[4][tipoNomina]
        }
    }

    //Masculino
    if(genero === 'm'){
        if(meses >= 0 && meses < 26){
            resultado.montoMinimo = minMasc[0][tipoNomina]
            resultado.montoMaximo = maxMasc[0][tipoNomina]
        }
        if(meses === 27 ){
            resultado.montoMinimo = minMasc[1][tipoNomina]
            resultado.montoMaximo = maxMasc[1][tipoNomina]
        }
        if(meses === 28 ){
            resultado.montoMinimo = minMasc[2][tipoNomina]
            resultado.montoMaximo = maxMasc[2][tipoNomina]
        }
        if(meses === 29 ){
            resultado.montoMinimo = minMasc[3][tipoNomina]
            resultado.montoMaximo = maxMasc[3][tipoNomina]
        }
        if(meses >= 30 ){
            resultado.montoMinimo = minMasc[4][tipoNomina]
            resultado.montoMaximo = maxMasc[4][tipoNomina]
        }
    }

    p1 = resultado.montoMinimo + Math.sqrt(resultado.montoMaximo - resultado.montoMinimo)
    p2 = resultado.montoMinimo + 0.0175 * (resultado.montoMaximo - resultado.montoMinimo)
    resultado.recomendacionLinea = Math.max(p1,p2)
    console.log(`El resultado de p1 es ${p1}`)
    console.log(`El resultado de p2 es ${p2}`)
    console.log(`Meses: ${meses}`)
    return resultado
}


let  tipoNomina='D',  fechaPrimerEmpleo='15/01/2019', genero = 'm'
//Utilizar en caso de pedir desde navegador
// const tipoNomina = prompt("ingresa el tipo de nomina (A, B, C, D):")
// const fecha = prompt("Ingresa la fecha en formato dd/mm/yyyy:")
// const genero = prompt("Ingresa el genero 'f' Femenino, 'm' Masculino:")

const {montoMaximo, montoMinimo, recomendacionLinea} = calculoMotor(tipoNomina, fechaPrimerEmpleo, genero);
console.log(`El valor de montoMinimo: ${montoMinimo}, montoMaximo: ${montoMaximo}, recomendacionLinea: ${recomendacionLinea}`)
