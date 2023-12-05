<?php
include './maquinas.php';
class Pessoa {
    protected $nome;
    protected $idade;
    protected $endereco;

    public function __construct($nome, $idade, $endereco) {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->endereco = $endereco;
    }

    public function toString() {
        return "Nome: " . $this->nome . ", Idade: " . $this->idade . ", Endereço: " . $this->endereco;
    }
}

class Usuario extends Pessoa {
    private $login;
    private $senha;
    private $maquinas;  // Adiciona o atributo maquinas

    public function __construct($nome, $idade, $endereco, $login, $senha, $maquinas = []) {
        parent::__construct($nome, $idade, $endereco);
        $this->login = $login;
        $this->senha = $senha;
        $this->maquinas = $maquinas;
    }

    public function toString() {
        $maquinasStr = "";
        foreach ($this->maquinas as $maquina) {
            $maquinasStr .= $maquina->toString() . "\n";
        }
        return parent::toString() . ", Login: " . $this->login . ", senha: " . $this->senha . ", Máquinas: \n" . $maquinasStr;
    }

    public function addMaquina($maquina) {
        $this->maquinas[] = $maquina;
    }
}

$pessoa = new Pessoa("João", 30, "Rua das Flores, 123");
echo $pessoa->toString();  // Deve imprimir "Nome: João, Idade: 30, Endereço: Rua das Flores, 123"

// Cria uma nova instância da classe Usuario
$usuario = new Usuario("Maria", 25, "Avenida Paulista, 1000", "maria", "senha123");
echo $usuario->toString();  // Deve imprimir "Nome: Maria, Idade: 25, Endereço: Avenida Paulista, 1000, Login: maria"

$maquina1 = new Maquina("Marca da Máquina 1", "Modelo da Máquina 1");
$maquina2 = new Maquina("Marca da Máquina 2", "Modelo da Máquina 2");

$usuario = new Usuario("Maria", 25, "Avenida Paulista, 1000", "maria", "senha123");
$usuario->addMaquina($maquina1);
$usuario->addMaquina($maquina2);

echo $usuario->toString();


?>

?>