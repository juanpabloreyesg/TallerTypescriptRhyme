import { ap } from './data.js';
var aprendizTbody = document.getElementById('aprendiz');
var cursosTbody = document.getElementById('cursos');
var estadisticasTbody = document.getElementById('estadisticas');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
btnfilterByName.onclick = function () { return filtrarCursosPorNombre(); };
mostrarDatosAprendiz(ap);
mostrarCursosAprendiz(ap.cursos);
mostrarCursosCertificados();
mostrarPromedioCursosAprobados();
function mostrarDatosAprendiz(aprendiz) {
    var tbodyElemento = document.createElement("tbody");
    tbodyElemento.innerHTML = "\n    <tr>\n    <img src=\"./" + aprendiz.avatar + "\" height=\"100\" alt=\"Avatar\">\n    </tr>\n    <tr>\n    <td>Nombres:</td>\n    <td>" + aprendiz.nombres + "</td>\n    </tr>\n    <tr>\n    <td>Apellidos:</td>\n    <td>" + aprendiz.apellidos + "</td>\n    </tr>\n    <tr>\n    <td>Nivel Educativo:</td>\n    <td>" + aprendiz.nivelEducativo + "</td>\n    </tr>\n    <tr>\n    <td>Edad:</td>\n    <td>" + aprendiz.edad + "</td>\n    </tr>";
    aprendizTbody.appendChild(tbodyElemento);
}
function mostrarCursosAprendiz(cursos) {
    cursos.forEach(function (curso) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + curso.nombre + "</td>\n                               <td>" + curso.horas + "</td>\n                               <td>" + curso.calificacion + "</td>\n                               <td>" + curso.certificado + "</td>\n                               <td>" + curso.anio + "</td>";
        cursosTbody.appendChild(trElement);
    });
}
function filtrarCursosPorNombre() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    limpiarCursosEnTabla();
    var cursosFiltrados = buscarCursosPorNombre(text, ap.cursos);
    mostrarCursosAprendiz(cursosFiltrados);
}
function buscarCursosPorNombre(nombre, cursos) {
    return nombre == '' ? cursos : cursos.filter(function (c) { return c.nombre.match(nombre); });
}
function limpiarCursosEnTabla() {
    while (cursosTbody.hasChildNodes()) {
        if (cursosTbody.firstChild != null) {
            cursosTbody.removeChild(cursosTbody.firstChild);
        }
    }
}
function mostrarCursosCertificados() {
    var certificados = ap.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certificados:</b></td>\n                            <td>" + certificados + "</td>";
    estadisticasTbody.appendChild(trElement);
}
function mostrarPromedioCursosAprobados() {
    var promedio = ap.darPromedioAprobados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Promedio cursos aprobados:</b></td>\n                            <td>" + promedio + "</td>";
    estadisticasTbody.appendChild(trElement);
}
