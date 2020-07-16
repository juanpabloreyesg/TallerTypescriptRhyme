
import { Curso } from './curso.js'

export enum NivelEducativo {
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSGRADO = "Posgrado"
}


export class Aprendiz{

   

    private _nombres: string;
    private _apellidos: string;
    private _avatar: string;
    private _edad: number;
    private _pais: string;
    private _nivelEducativo: NivelEducativo;
    private _cursos: Curso[];

    constructor(nombres: string, apellidos:string, avatar:string, edad:number, pais:string, nivelEducativo:NivelEducativo, cursos:Curso[])
    {
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._avatar = avatar;
        this._edad = edad;
        this._pais = pais;
        this._nivelEducativo = nivelEducativo;
        this._cursos = cursos;
    }

    get nombres() :string{
        return this._nombres;
    }

    get apellidos() :string{
        return this._apellidos;
    }

    get avatar() :string{
        return this._avatar;
    }

    get edad(): number{
        return this._edad;
    }
    
    get pais(): string{
        return this._pais;
    }

    get nivelEducativo(): NivelEducativo{
        return this._nivelEducativo;
    }

    get cursos(): Curso[]{
        return this._cursos;
    }

}