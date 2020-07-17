
import { Curso } from './curso.js';
import { Aprendiz, NivelEducativo } from './aprendiz.js';


let cursos = [ new Curso( "Prácticas esenciales para el agilismo", 20, 90, true, 2019),
new Curso( "Ingeniería de software para la web", 15, 99, true, 2018),
new Curso( "Pruebas automatizadas", 25, 50, false, 2020),
new Curso( "Principios de diseño y arquitectura", 30, 75, true, 2020)]

export const ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, "Colombia", NivelEducativo.POSGRADO, cursos);