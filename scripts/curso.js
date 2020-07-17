var Curso = /** @class */ (function () {
    function Curso(nombre, horas, calificacion, certificado, anio) {
        this._nombre = nombre;
        this._horas = horas;
        this._calificacion = calificacion;
        this._certificado = certificado;
        this._anio = anio;
    }
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "horas", {
        get: function () {
            return this._horas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "calificacion", {
        get: function () {
            return this._calificacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "certificado", {
        get: function () {
            return this._certificado;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "anio", {
        get: function () {
            return this._anio;
        },
        enumerable: false,
        configurable: true
    });
    return Curso;
}());
export { Curso };
