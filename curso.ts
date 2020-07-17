export class Curso{

   

    private _nombre: string;
    private _horas: number;
    private _calificacion: number;
    private _certificado: boolean;
    private _anio: number;
    
    constructor(nombre: string, horas:number, calificacion:number, certificado:boolean, anio:number)
    {
        this._nombre = nombre;
        this._horas = horas;
        this._calificacion = calificacion;
        this._certificado = certificado;
        this._anio = anio;
        
    }

    get nombre():string{
        return this._nombre;
    }

    get horas():number{
        return this._horas;
    }

    get calificacion():number{
        return this._calificacion;
    }

    get certificado():boolean{
        return this._certificado;
    }

    get anio():number{
        return this._anio;
    }

}