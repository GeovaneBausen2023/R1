<?php
class Usuario {
    private $nome;
    private $senha;
    private $email;

    public function __construct($nome, $senha, $email) {
        $this->nome = $nome;
        $this->senha = $senha;
        $this->email = $email;
    }

    // Métodos Get
    public function getNome() {
        return $this->nome;
    }

    public function getSenha() {
        return $this->senha;
    }

    public function getEmail() {
        return $this->email;
    }

    // Métodos Set
    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function setSenha($senha) {
        $this->senha = $senha;
    }

    public function setEmail($email) {
        $this->email = $email;
    }
}

// Cria um array para armazenar os objetos Usuario
$usuarios = array();

// Cria alguns usuários
$usuario1 = new Usuario("João", "senha123", "joao@email.com");
$usuario2 = new Usuario("Maria", "senha456", "maria@email.com");

// Adiciona os usuários ao array
$usuarios[] = $usuario1;
$usuarios[] = $usuario2;

// Agora você pode acessar os usuários do array
foreach ($usuarios as $usuario) {
    echo "Nome: " . $usuario->getNome();
    echo "Senha: " . $usuario->getSenha();
    echo "Email: " . $usuario->getEmail();
}
?>
