class Animal{
     constructor (nome) {
          this.nome = nome;

     }

     fazerSom(){
         console.log(this.nome, "Fez um som")

     }

}

class Cachorro extends Animal{

    fazerSom(){
        console.log(this.nome,"Latiu")
    }
}


class Gato extends Animal{
    fazerSom(){
        console.log(this.nome, "Miou");
    }
}

const rex = new Cachorro ("Rex");
const felix = new Gato("Felix");

const animais = [rex, felix];
animais.forEach(animal =>{
    animal.fazerSom();
})