
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

    public darCursosCertificados():number{
        let total_cursos_ap = 0;
        for (let index = 0; index < this.cursos.length; index++)
        {
            if(this._cursos[index].certificado){
                total_cursos_ap += 1;
            }
                  
        }
        return total_cursos_ap;
    }

    public darPromedioAprobados():number{
        let total_nota = 0;
        let total_cursos_ap = 0;
        for (let index = 0; index < this.cursos.length; index++)
        {
            if(this._cursos[index].calificacion > 75){
                total_nota += this._cursos[index].calificacion;
                total_cursos_ap += 1;
            }
                        
        }
        if(total_cursos_ap > 0)
            return 0;
        else
            return total_nota/total_cursos_ap;
    }

}