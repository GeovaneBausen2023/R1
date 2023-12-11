<?php
class Tarefa {
    //private $db;
    private $id;
    private $titulo;
    private $descricao;
    private $datahora;

    //function __construct($conexao, $nome = "", $email = "", $senha = "", ) {
    function __construct($titulo = "", $descricao = "", $datahora = "") {
        
        $this->titulo = $titulo;
        $this->descricao = $descricao;
        $this->datahora= $datahora;

        echo "Estamos construindo o objeto:: Tarefa"; /*
        $this->status = 'inativo';
*/
        //$this->db = $conexao; //new Database("localhost", "root", "", "crud_usuarios");          
    }

    function getTitulo() {
        return $this->titulo;
    }

    function setTitulo($titulo) {
        return $this->titulo = $titulo;
    }

    function getDescricao() {
        return $this->descricao;
    }

    function setDescricao($descricao) {
        return $this->descricao = $descricao;
    }

    function getData() {
        return $this->datahora;
    }

    function setData($datahora) {
        return $this->datahora = $datahora;
    }


    //---
    function getId() {
        return $this->id;
    }

    function setId($id) {
        return $this->id = $id;
    }

//--

    function toString() {
        return "Titulo: ". $this->getTitulo() . " Descricao: ". $this->getDescricao() . "  Data Hora: " . $this->getData();
    }

    function toPrint() {
        echo $this->toString();
    }

    

   
}


?>