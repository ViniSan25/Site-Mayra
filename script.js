function simularINSS(){

    const nome = document.getElementById("nomeSimulacao").value;
    const responsavel = document.getElementById("responsavel").value;
    const destinacao = document.getElementById("destinacao").value;
    const tipo = document.getElementById("tipoObra").value;
    const area = parseFloat(document.getElementById("areaConstruida").value);

    const uf = document.getElementById("uf").value;
    const padrao = document.getElementById("padrao").value;
    const inicio = document.getElementById("dataInicio").value;
    const fim = document.getElementById("dataFim").value;
    const notas = document.getElementById("notas").value;
    const concreto = document.getElementById("concreto").value;

    if(
        !nome ||
        !responsavel ||
        !destinacao ||
        !tipo ||
        !area ||
        !uf ||
        !padrao ||
        !inicio ||
        !fim ||
        !notas ||
        !concreto
    ){
        alert("Preencha todos os campos.");
        return;
    }

    let valorM2 = 1800;

    if(padrao === "normal") valorM2 = 2500;
    if(padrao === "alto") valorM2 = 4000;

    const custoObra = area * valorM2;

    let baseMaoObra = custoObra * 0.40;

    let inss = baseMaoObra * 0.20;

    if(notas === "sim"){
        inss *= 0.90;
    }

    if(concreto === "sim"){
        inss *= 0.95;
    }

    const resultado = document.getElementById("resultado");

    resultado.style.display = "block";

    resultado.innerHTML = `
        <h2>Resultado da Simulação</h2>

        <p><strong>Simulação:</strong> ${nome}</p>
        <p><strong>Responsável:</strong> ${responsavel}</p>
        <p><strong>Destinação:</strong> ${destinacao}</p>
        <p><strong>Tipo da Obra:</strong> ${tipo}</p>
        <p><strong>UF:</strong> ${uf}</p>
        <p><strong>Área:</strong> ${area} m²</p>

        <hr style="margin:20px 0">

        <p><strong>Custo estimado da obra:</strong></p>

        <h2>
        R$ ${custoObra.toLocaleString('pt-BR',{
            minimumFractionDigits:2
        })}
        </h2>

        <p style="margin-top:20px;">
            <strong>INSS estimado a recolher:</strong>
        </p>

        <div class="valor-inss">
            R$ ${inss.toLocaleString('pt-BR',{
                minimumFractionDigits:2
            })}
        </div>

        <p style="margin-top:20px;color:#666;">
            Valor estimado para análise preliminar.
        </p>
    `;
}