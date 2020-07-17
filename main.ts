import { Aprendiz } from './aprendiz.js'
import { Curso } from './curso.js'
import {NivelEducativo} from './aprendiz.js'

import {ap} from './data.js'

let aprendizTbody: HTMLElement = document.getElementById('aprendiz')!;
let cursosTbody: HTMLElement = document.getElementById('cursos')!;
let estadisticasTbody: HTMLElement = document.getElementById('estadisticas')!;

const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;

btnfilterByName.onclick = () => filtrarCursosPorNombre();

mostrarDatosAprendiz(ap);
mostrarCursosAprendiz(ap.cursos);
mostrarCursosCertificados();
mostrarPromedioCursosAprobados();

function mostrarDatosAprendiz(aprendiz: Aprendiz): void{
    let tbodyElemento = document.createElement("tbody");
    tbodyElemento.innerHTML = `
    <tr>
    <img src="./${aprendiz.avatar}" height="100" alt="Avatar">
    </tr>
    <tr>
    <td>Nombres:</td>
    <td>${aprendiz.nombres}</td>
    </tr>
    <tr>
    <td>Apellidos:</td>
    <td>${aprendiz.apellidos}</td>
    </tr>
    <tr>
    <td>Nivel Educativo:</td>
    <td>${aprendiz.nivelEducativo}</td>
    </tr>
    <tr>
    <td>Edad:</td>
    <td>${aprendiz.edad}</td>
    </tr>`
    aprendizTbody.appendChild(tbodyElemento); 

}

function mostrarCursosAprendiz(cursos: Curso[]): void{
    
    cursos.forEach((curso) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${curso.nombre}</td>
                               <td>${curso.horas}</td>
                               <td>${curso.calificacion}</td>
                               <td>${curso.certificado}</td>
                               <td>${curso.anio}</td>`;
        cursosTbody.appendChild(trElement);
      });
}

function filtrarCursosPorNombre(): void{
    let text = inputSearchBox.value;
    text = (text==null)?'':text;
    limpiarCursosEnTabla();
    let cursosFiltrados: Curso[] = buscarCursosPorNombre(text, ap.cursos);
    mostrarCursosAprendiz(cursosFiltrados);    
}

function buscarCursosPorNombre(nombre:string, cursos:Curso[]): Curso[]{
    return nombre == ''?cursos:cursos.filter(c => c.nombre.match(nombre));
}

function limpiarCursosEnTabla(): void{
    while (cursosTbody.hasChildNodes()) {
        if (cursosTbody.firstChild != null) {
            cursosTbody.removeChild(cursosTbody.firstChild);
    }
    }
}

function mostrarCursosCertificados(): void{
    let certificados = ap.darCursosCertificados();
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Cursos certificados:</b></td>
                            <td>${certificados}</td>`;
    estadisticasTbody.appendChild(trElement);
                
}

function mostrarPromedioCursosAprobados(): void{
    let promedio = ap.darPromedioAprobados();
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Promedio cursos aprobados:</b></td>
                            <td>${promedio}</td>`;
    estadisticasTbody.appendChild(trElement);
                
}
