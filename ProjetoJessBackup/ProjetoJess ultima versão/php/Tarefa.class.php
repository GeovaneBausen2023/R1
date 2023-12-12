<?php
class Tarefa {
    //private $db;
    private $id;
    private $titulo;
    private $descricao;
    private $datahora;
    
    function __construct($titulo = "", $descricao = "", $datahora = "") {
        $this->titulo = $titulo;
        $this->descricao = $descricao;
        if($datahora == "") {
            $datahora = date('Y-m-d H:i:s');
        }
        $this->datahora= $datahora;
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

    function getDataHora() {
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


    function toString() {
   
        return "Titulo: ". $this->titulo . " Descricao: ". $this->descricao. " Data e hora: ". $this->datahora;
    }

    function toPrint() {
        echo $this->toString();
    }

    

   
}


?>