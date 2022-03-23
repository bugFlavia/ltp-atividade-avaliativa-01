class Noticia{
    constructor(titulo, dataPublicacao, resumo, texto){
        this.titulo = titulo;
        this.dataPublicacao = dataPublicacao;
        this.resumo = resumo;
        this.texto = texto;
    }

    mostrarNoticia(){
        return this.titulo + "\n" + this.dataPublicacao + "\n" +  this.resumo + "\n" + this.texto
    }
}

let noticia = new Noticia("Divulgado resultado preliminar do Programa de Monitoria" , "Publicado: 22/03/2022 09h03" , "Foram ofertadas 136 vagas para estudantes dos dez campi atuarem como monitores neste primeiro semestre, com pagamento de auxílio" , "O Instituto Federal de Mato Grosso do Sul (IFMS) divulgou nessa segunda-feira, 21, o resultado preliminar do Programa de Auxílio Monitoria, que visa selecionar estudantes de cursos técnicos e graduação para atuarem como monitores. Foram ofertadas, para este primeiro semestre letivo, 136 vagas distribuídas nos campi Aquidauana, Campo Grande, Corumbá, Coxim, Dourados, Jardim, Naviraí, Nova Andradina, Ponta Porã e Três Lagoas. O resultado preliminar está publicado na Central de Seleção do IFMS, onde também é possível consultar o edital de abertura do processo seletivo. Nesta terça e quarta-feiras, 22 e 23, os não selecionados podem recorrer contra o resultado. O resultado final está previsto para o dia 28 de março.")
console.log(noticia.mostrarNoticia())