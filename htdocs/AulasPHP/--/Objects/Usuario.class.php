<?php

 class Usuario{
    public $nome;
    public $email;
    private $senha;

    function setSenha ($senhaPassada){
        $this->senha = $senhaPassada;
    }

    function getSenha(){
        return md5($this->senha);
    }

    function toString(){
        echo "nome: " . $this->nome . " senha: " . $this->getSenha();
    }
}


?>
