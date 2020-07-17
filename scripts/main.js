import { ap } from './data.js';
var aprendizTbody = document.getElementById('aprendiz');
var cursosTbody = document.getElementById('cursos');
mostrarDatosAprendiz(ap);
mostrarCursosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyElemento = document.createElement("tbody");
    tbodyElemento.innerHTML = "\n    <tr>\n    <img src=\"./" + aprendiz.avatar + "\" height=\"100\" alt=\"Avatar\">\n    </tr>\n    <tr>\n    <td>Nombres:</td>\n    <td>" + aprendiz.nombres + "</td>\n    </tr>\n    <tr>\n    <td>Apellidos:</td>\n    <td>" + aprendiz.apellidos + "</td>\n    </tr>\n    <tr>\n    <td>Nivel Educativo:</td>\n    <td>" + aprendiz.nivelEducativo + "</td>\n    </tr>\n    <tr>\n    <td>Edad:</td>\n    <td>" + aprendiz.edad + "</td>\n    </tr>";
    aprendizTbody.appendChild(tbodyElemento);
}
function mostrarCursosAprendiz(aprendiz) {
    var cursos = aprendiz.cursos;
    cursos.forEach(function (curso) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + curso.nombre + "</td>\n                               <td>" + curso.horas + "</td>\n                               <td>" + curso.calificacion + "</td>\n                               <td>" + curso.certificado + "</td>\n                               <td>" + curso.anio + "</td>";
        cursosTbody.appendChild(trElement);
    });
}
