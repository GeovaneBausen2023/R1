var vetTarefas = [];
var inTarefa = document.getElementById("inTarefa");
var btAdicionarTarefa = document.getElementById("btAdicionarTarefa");
var btUrgencia = document.getElementById("btUrgencia");
var btAtender = document.getElementById("btAtender");
var outAtendimento = document.getElementById("outAtendimento");
var outLista = document.getElementById("outLista");

btAdicionarTarefa.addEventListener("click", adicionarTarefa);
btUrgencia.addEventListener("click", urgencia);
btAtender.addEventListener("click", atenderPaciente);

function adicionarTarefa() {
    var descricaoTarefa = inTarefa.value;
    if (descricaoTarefa == "") {
        alert("Informe a descrição da tarefa");
        inTarefa.focus();
        return;
    }
    vetTarefas.push(descricaoTarefa);
    updateLista();
}

function urgencia() {
    var descricaoTarefa = inTarefa.value;
    if (descricaoTarefa =="") {
        alert("Informe a descrição da tarefa");
        inTarefa.focus();
        return;
    }
    vetTarefas.unshift(descricaoTarefa);
    updateLista();
}

function atenderPaciente() {
    if (vetTarefas.length === 0) {
        alert("Não há tarefas na lista");
        return;
    }
    var tarefa = vetTarefas.shift();
    outAtendimento.textContent = tarefa;
    updateLista();
}

function updateLista() {
    var lista = "";
    for (var i = 0; i < vetTarefas.length; i++) {
        lista += (i + 1) + ". " + vetTarefas[i] + "<br>";
    }
    outLista.innerHTML = lista;
    inTarefa.value = "";
    inTarefa.focus();
}
