<?php
class Usuario {
    //private $db;
    private $status;
    public $nome;
    public $email;
    private $senha;

    //function __construct($conexao, $nome = "", $email = "", $senha = "", ) {
        function __construct($nome = "", $email = "", $senha = "", ) {
        
        $this->nome = $nome;
        $this->email = $email;
        $this->senha= $senha;

        echo "Estamos construindo o objeto:: Usuario";
        $this->status = 'inativo';

        //$this->db = $conexao; //new Database("localhost", "root", "", "crud_usuarios");          
    }

    function getStatus() {
        return $this->status;
    }

    function setSenha($senha_passada) {
        $this->senha = $senha_passada;
    }

    function getSenha() {
        $password = "";
        if($this->senha != "")
            $password = md5($this->senha);
        
        return $password;
    }

    function toString() {
        return "Nome: ". $this->nome . " Email: ". $this->email . "  Senha: " . $this->getSenha();
    }

    function toPrint() {
        echo $this->toString();
    }

    

    
}


?>