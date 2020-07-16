var Curso = /** @class */ (function () {
    function Curso(nombre, horas, calificacion, certificado, anio) {
        this._nombre = nombre;
        this.horas = horas;
        this.calificacion = calificacion;
        this.certificado = certificado;
        this.anio = anio;
    }
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Curso;
}());
export { Curso };
