

class Pieza {
    constructor(nombre){
        this.nombre=nombre; 
        this.codigo=genCodigo(); 
        this.fecha=new Date().toLocaleString();
    }

    genCodigo(){
        let codigo = "";
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
        for(let i = 0; i<10; i++){
            codigo += Math.floor(Math.random() * 10); //Numero entre 0 y 9
        }

        codigo += caracteres.charAt(Math.floor(Math.random()*25)); //Numero aleatroio que decide el caracter asignado(25 caracteres)

        return codigo;
    }
}     

class PiezaElectrica extends Pieza {
    constructor(nombre, potencia, voltaje){
        super(nombre, codigo, fecha);
        this.potencia = potencia;
        this.voltaje = voltaje;
    }

}

class PiezaMecanica extends Pieza {
    constructor(nombre, material){
        super(nombre, codigo, fecha);
        this.material = material;
    }
    
}