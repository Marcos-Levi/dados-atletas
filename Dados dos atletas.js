class Atleta {
    constructor(nome, idade, peso, altura, notas) {
       this.nome = nome;
       this.idade = idade;
       this.peso = peso;
       this.altura = altura;
       this.notas = notas;
    }
 
    calculaCategoria() {
       this.categoria;
       if (this.idade >= 9 && this.idade <= 11) {
          this.categoria = "Infantil";
       }
       else if (this.idade >= 12 && this.idade <= 13) {
          this.categoria = "Juvenil";
       }
       else if (this.idade >= 14 && this.idade <= 15) {
          this.categoria = "Intermediário";
       }
       else if (this.idade >= 16 && this.idade <= 30) {
          this.categoria = "Adulto"
       }
    }
 
    calculaIMC() {
       this.imc = this.peso / (this.altura * this.altura) ; 
    }
 
    calculaMediaValida() {
        let soma = 0;
        this.notas.sort(function(a, b) {
           return a - b; 
        });
        this.notasModificadas = this.notas.slice(1, 4)
        this.notasModificadas.forEach(function(nota) {
            soma = soma + nota;
        });
        this.media =  soma / this.notasModificadas.length;
    }
 
    obtemNomeAtleta() {
       this.msgNome = "Nome: " + this.nome 
       console.log(this.msgNome); 
       return this.msgNome;
    }
 
    obtemIdadeAtleta() {
       this.msgIdade = "Idade: " + this.idade;
       console.log(this.msgIdade);
       return this.msgIdade;
    }
 
    obtemPesoAtleta() {
       this.msgPeso = "Peso: " + this.peso ;
       console.log(this.msgPeso); 
       return this.msgPeso; 
    }
 
    obtemAlturaAtleta() {
       this.msgAltura = "Altura: " + this.altura;
       console.log(this.msgAltura);
       return this.msgAltura;
    }
    obtemNotasAtletas() {
       this.msgNotas = "Notas: " + this.notas.join(","); 
       console.log(this.msgNotas); 
       return this.msgNotas; 
    }
 
    obtemCategoria() {
       this.msgCategoria = "Categoria: " + this.categoria;  
       console.log(this.msgCategoria); 
       return this.msgCategoria;
    }
 
    obtemImc() {
       this.msgImc = "IMC: " + this.imc; 
       console.log(this.msgImc);
       return this.msgImc; 
    }
 
    obtemMediaValida() {
       this.msgMedia = "Média Válida: " + this.media;
       this.msg = "Teste"
       console.log(this.msgMedia); 
       return this.msgMedia; 
    }
 }
 
 let atleta = new Atleta("Cesar Abascal",
     30, 80, 1.70,
     [10, 9.34, 8.42, 10, 7.88]);
 
 atleta.calculaCategoria();
 atleta.calculaIMC();
 atleta.calculaMediaValida();
 atleta.obtemNomeAtleta();
 atleta.obtemIdadeAtleta();
 atleta.obtemPesoAtleta();
 atleta.obtemAlturaAtleta();
 atleta.obtemNotasAtletas();
 atleta.obtemCategoria();
 atleta.obtemImc();
 atleta.obtemMediaValida();
 
 atleta = new Atleta("Marcos Levi",
   23, 54, 1.70,
   [10, 10, 8.90, 7.90, 10]);
 
 atleta.calculaCategoria();
 atleta.calculaIMC();
 atleta.calculaMediaValida();
 atleta.obtemNomeAtleta();
 atleta.obtemIdadeAtleta();
 atleta.obtemPesoAtleta();
 atleta.obtemAlturaAtleta();
 atleta.obtemNotasAtletas();
 atleta.obtemCategoria();
 atleta.obtemImc();

 atleta.obtemMediaValida(); 
