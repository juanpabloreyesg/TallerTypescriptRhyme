export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "Universitario";
    NivelEducativo["POSGRADO"] = "Posgrado";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apellidos, avatar, edad, pais, nivelEducativo, cursos) {
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._avatar = avatar;
        this._edad = edad;
        this._pais = pais;
        this._nivelEducativo = nivelEducativo;
        this._cursos = cursos;
    }
    Object.defineProperty(Aprendiz.prototype, "nombres", {
        get: function () {
            return this._nombres;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aprendiz.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aprendiz.prototype, "avatar", {
        get: function () {
            return this._avatar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aprendiz.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aprendiz.prototype, "pais", {
        get: function () {
            return this._pais;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aprendiz.prototype, "nivelEducativo", {
        get: function () {
            return this._nivelEducativo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aprendiz.prototype, "cursos", {
        get: function () {
            return this._cursos;
        },
        enumerable: false,
        configurable: true
    });
    Aprendiz.prototype.darCursosCertificados = function () {
        var total_cursos_ap = 0;
        for (var index = 0; index < this.cursos.length; index++) {
            if (this._cursos[index].certificado) {
                total_cursos_ap += 1;
            }
        }
        return total_cursos_ap;
    };
    Aprendiz.prototype.darPromedioAprobados = function () {
        var total_nota = 0;
        var total_cursos_ap = 0;
        for (var index = 0; index < this.cursos.length; index++) {
            if (this._cursos[index].calificacion > 75) {
                total_nota += this._cursos[index].calificacion;
                total_cursos_ap += 1;
            }
        }
        if (total_cursos_ap > 0)
            return 0;
        else
            return total_nota / total_cursos_ap;
    };
    return Aprendiz;
}());
export { Aprendiz };
