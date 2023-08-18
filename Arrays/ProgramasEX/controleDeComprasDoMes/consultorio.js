var pacientes = []; // declara vetor global
//referência aos elementos html
var inPaciente = document.getElementById("inPaciente");
var btAdicionar = document.getElementById("btAdicionar");
var btUrgencia = document.getElementById("btUrgencia");
var btAtender = document.getElementById("btAtender");

var outAtendimento = document.getElementById("outAtendimento");
var outLista = document.getElementById("outLista");

btAdicionar.addEventListener("click", adcionarPacientes);
btUrgencia.addEventListener("click", urgencia);
btAtender.addEventListener("click", atenderPaciente);

function adcionarPacientes() {
    var nome = inPaciente.value
    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }
    pacientes.push(nome); // adiciona o nome no final do vetor
    var lista = ""; // string para concatenar pacientes

    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
        //lista = lista + ...pacientes[i]...;
    }
    // altera o conteúdo da tag outLista
    outLista.textContent = lista;
    // limpa campo e posiciona cursor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}
function urgencia() {
    var nome = inPaciente.value
    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }
    pacientes.unshift(nome); // adiciona o nome no início do vetor
    var lista = ""; // string para concatenar pacientes

    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
        //lista = lista + ...pacientes[i]...;
    }
    // altera o conteúdo da tag outLista
    outLista.textContent = lista;
    // limpa campo e posiciona cursor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}
function atenderPaciente() {
    //verifica se vetor pacientes está vazio
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera");
        inPaciente.focus();
        return;
    }
    // remove paciente do início da fila (e obtém nome)
    var atender = pacientes.shift();
    // exibe nome do paciente em atendimento
    outAtendimento.textContent = atender;
    // string para concatenar pacientes
    var lista = "";
    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }
    // altera o conteúdo da tag outLista
    outLista.textContent = lista
}

 