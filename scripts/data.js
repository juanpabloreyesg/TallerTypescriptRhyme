import { Curso } from './curso.js';
import { Aprendiz, NivelEducativo } from './aprendiz.js';
var cursos = [new Curso("Ingeniería de SW web", 20, 90, true, 2019),
    new Curso("Principios de diseño y arquitectura", 15, 99, true, 2018),
    new Curso("Prácticas esenciales para el agilismo", 25, 50, false, 2020),
    new Curso("Pruebas automatizadas", 30, 75, true, 2020)];
export var ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, "Colombia", NivelEducativo.POSGRADO, cursos);
