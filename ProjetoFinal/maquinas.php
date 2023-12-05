<?php
class Maquina {
    protected $fabricante;
    protected $processador;
    

    public function __construct($fabricante, $processador) {
        $this->fabricante = $fabricante;
        $this->processador = $processador;
    }

    public function toString() {
        return "Fabricante: " . $this->fabricante . ", Processador: " . $this->processador;
    }
}
        //subclasse
        class Notebook extends Maquina {
            protected $tamanhoDaTela;
            protected $peso;
            protected $duracaoDaBateria;
            protected $possuiTecladoIluminado;
        
            public function __construct($fabricante, $processador, $tamanhoDaTela, $peso, $duracaoDaBateria, $possuiTecladoIluminado) {
                parent::__construct($fabricante, $processador);
                $this->tamanhoDaTela = $tamanhoDaTela;
                $this->peso = $peso;
                $this->duracaoDaBateria = $duracaoDaBateria;
                $this->possuiTecladoIluminado = $possuiTecladoIluminado;
            }
        
            public function toString() {
                return parent::toString() . ", Tamanho da Tela: " . $this->tamanhoDaTela . ", Peso: " . $this->peso . ", Duração da Bateria: " . $this->duracaoDaBateria . ", Possui Teclado Iluminado: " . $this->possuiTecladoIluminado. "<br>";
            }
        }
        

class Desktop extends Maquina {
    protected $tipoDeGabinete;
    protected $possuiMonitor;
    protected $tipoDeRefrigeracao;
    protected $fonteDeAlimentacao;

    public function __construct($fabricante, $processador, $tipoDeGabinete, $possuiMonitor, $tipoDeRefrigeracao, $fonteDeAlimentacao) {
        parent::__construct($fabricante, $processador);//chamando o constructor da super classe
        $this->tipoDeGabinete = $tipoDeGabinete;
        $this->possuiMonitor = $possuiMonitor;
        $this->tipoDeRefrigeracao = $tipoDeRefrigeracao;
        $this->fonteDeAlimentacao = $fonteDeAlimentacao;
    }

    public function toString() {
        return parent::toString() . ", Tipo de Gabinete: " . $this->tipoDeGabinete . ", Possui Monitor: " . $this->possuiMonitor . ", Tipo de Refrigeração: " . $this->tipoDeRefrigeracao . ", Fonte de Alimentação: " . $this->fonteDeAlimentacao. "<br>";
    }
}
$notebook = new Notebook("Dell", "Intel", "15.6 polegadas", "2 kg", "6 horas", true);
echo $notebook->toString();


$desktop = new Desktop("HP", "AMD", "Torre", true, "Ar", "500W");
echo $desktop->toString();

?>
