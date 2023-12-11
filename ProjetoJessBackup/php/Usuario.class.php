<?php
class Usuario {
    //private $db;
    private $id;
    private $status;
    private $nome;
    private $email;
    private $senha;

    //function __construct($conexao, $nome = "", $email = "", $senha = "", ) {
    function __construct($nome = "", $email = "", $senha = "") {
        
        $this->nome = $nome;
        $this->email = $email;
        $this->senha= $senha;

      /*  echo "Estamos construindo o objeto:: Usuario";
        $this->status = 'inativo';
*/
        //$this->db = $conexao; //new Database("localhost", "root", "", "crud_usuarios");          
    }

    function getEmail() {
        return $this->email;
    }

    function getNome() {
        return $this->nome;
    }

    function setNome($nome) {
        return $this->nome = $nome;
    }

    function getStatus() {
        return $this->status;
    }

//---
function getId() {
    return $this->id;
}

function setId($id) {
    return $this->id = $id;
}

//--

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
     /*   return "Nome: ". $this->nome . " Email: ". $this->email . "  Senha: " . $this->getSenha();*/

        return "Nome: ". $this->nome . " Email: ". $this->email;
    }

    function toPrint() {
        echo $this->toString();
    }

    

   
}


?>