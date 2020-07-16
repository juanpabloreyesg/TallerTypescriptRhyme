import { ap } from './data.js';
var aprendizTbody = document.getElementById('aprendiz');
mostrarDatosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyElemento = document.createElement("tbody");
    tbodyElemento.innerHTML = "\n    <tr>\n    <img src=\"./" + aprendiz.avatar + "\" height=\"100\" alt=\"Avatar\">\n    </tr>\n    <tr>\n    <td>Nombres:</td>\n    <td>" + aprendiz.nombres + "</td>\n    </tr>\n    <tr>\n    <td>Apellidos:</td>\n    <td>" + aprendiz.apellidos + "</td>\n    </tr>\n    <tr>\n    <td>Nivel Educativo:</td>\n    <td>" + aprendiz.nivelEducativo + "</td>\n    </tr>\n    <tr>\n    <td>Edad:</td>\n    <td>" + aprendiz.edad + "</td>\n    </tr>";
    aprendizTbody.appendChild(tbodyElemento);
}
