import { Aprendiz } from './aprendiz.js'
import {NivelEducativo} from './aprendiz.js'
import {ap} from './data.js'

let aprendizTbody: HTMLElement = document.getElementById('aprendiz')!;
let cursosTbody: HTMLElement = document.getElementById('cursos')!;

mostrarDatosAprendiz(ap);
mostrarCursosAprendiz(ap);

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

function mostrarCursosAprendiz(aprendiz: Aprendiz): void{
    let cursos = aprendiz.cursos;
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