import { Curso } from './curso.js';
import { Aprendiz, NivelEducativo } from './aprendiz.js';
var cursos = [new Curso("C1", 20, 90, true, 2019),
    new Curso("C2", 15, 99, true, 2018),
    new Curso("C3", 25, 50, false, 2020),
    new Curso("C4", 30, 75, true, 2020)];
export var ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, "Colombia", NivelEducativo.POSGRADO, cursos);
