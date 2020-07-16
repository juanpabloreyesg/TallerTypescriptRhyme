export class Curso{

   

    _nombre: string;
    horas: number;
    calificacion: number;
    certificado: boolean;
    anio: number;
    
    constructor(nombre: string, horas:number, calificacion:number, certificado:boolean, anio:number)
    {
        this._nombre = nombre;
        this.horas = horas;
        this.calificacion = calificacion;
        this.certificado = certificado;
        this.anio = anio;
        
    }

    get nombre():string{
        return this._nombre;
    }

    

}