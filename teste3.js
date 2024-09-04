/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; */
const {faturamentoMensal} = require('./teste3.json');


function getDiastrabalhados(){
    const diasTrabalhados = faturamentoMensal.filter((item) => item.diaUtil === true);
    
    return diasTrabalhados;
}

function getMenorFaturamento(){
    
    let menorFaturamento = getDiastrabalhados();

    menorFaturamento.sort((a,b) => Number(a.faturamento) - Number(b.faturamento));
    
    menorFaturamento = menorFaturamento[0];

    console.log(`O menor faturamento foi de R$ ${Number(menorFaturamento.faturamento).toFixed(2)} no dia ${menorFaturamento.dia}`);
}

function getMaiorFaturamento(){
    
    let maiorFaturamento = getDiastrabalhados();

    maiorFaturamento.sort((a,b) => Number(b.faturamento) - Number(a.faturamento));

    maiorFaturamento = maiorFaturamento[0];
    
    console.log(`O maior faturamento foi de R$ ${Number(maiorFaturamento.faturamento).toFixed(2)} no dia ${maiorFaturamento.dia}`);
}

function getDiasAcimaDaMedia(){
    const diasTrabalhados = getDiastrabalhados();
    const quantDiasTrabalhados = diasTrabalhados.length;
    const somaDoFaturamentoMensal = diasTrabalhados.reduce((acc, dia) => Number(acc) + Number(dia.faturamento),0 );
    
    const media = (somaDoFaturamentoMensal/quantDiasTrabalhados).toFixed(2);

    const diasAcimaDamedia = diasTrabalhados.filter((dia) => Number(dia.faturamento) > media);

    console.log(`O faturamento ficou acima da média mensal (${media}) nos seguintes dias: `);
    diasAcimaDamedia.forEach((item) => console.log(`dia ${item.dia}, Faturamento ${item.faturamento}`));

}

getMenorFaturamento();
getMaiorFaturamento();
getDiasAcimaDaMedia();