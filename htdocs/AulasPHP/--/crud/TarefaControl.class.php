<?php

class TarefaControl {
    private $conexao;
    private $tarefa;

    //private $id;

    function __construct($conexao) {
        $this->conexao = $conexao;
        $conexao = new Tarefa();
    }

    public function listar() {
        $sql = "SELECT * FROM tarefas";
        $result = $this->conexao->query($sql);

        $usuarios = array();

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $usuarios[] = $row;
            }
        }

        return $usuarios;
    }


    public function atualizar($obj) {        

        $sql = "UPDATE `tarefas` SET `titulo` = '".$obj->getTitulo()."', `descricao` = '".$obj->getDescricao()."', `data` = NOW() WHERE id = ". $obj->getId();

        /*$sql = "UPDATE tarefas SET nome='".$obj->getNome()."', email='".$obj->getEmail()."', senha='".$obj->getSenha()."' WHERE id='".$obj->getId()."'";*/

        $result = $this->conexao->query($sql);

        if ($result) {
            echo "Objeto atualizado com sucesso!";
        } else {
            echo "Erro ao atualizar o objeto.";
        }

        //print_r($result);


    }

    public function deletar($obj) {        
        $sql = "DELETE FROM tarefas WHERE id='".$obj->getId()."'";

       // echo $sql;

        $result = $this->conexao->query($sql);

        if ($result) {
            echo "Objeto excluído com sucesso!";
        } else {
            echo "Erro ao excluir o objeto.";
        }

        //print_r($result);


    }

    public function cadastrar($obj) {   
                
        $sql = "INSERT INTO `tarefas` (`id`, `titulo`, `descricao`, `data`) VALUES (NULL, '".$obj->getTitulo()."', '".$obj->getDescricao()."', NOW());";

        $result = $this->conexao->query($sql);

        if ($result) {
            echo "Objeto cadastrado com sucesso!";
        } else {
            echo "Erro ao cadastrar objeto: ";
        }

        //print_r($result);


    }

    public function buscarPorId($id)
    {
        $sql = "SELECT * FROM tarefas WHERE id = $id";
        $result = $this->conexao->query($sql);

        if ($result->num_rows > 0) {
            //$nome = "", $email = "", $senha = ""

            $row = $result->fetch_assoc();

            $obj = new Tarefa($row["titulo"], $row["descricao"], $row["data"]);
            $obj->setId($row["id"]);

          //  print_r($row);

        
            return $obj;
        } else {
            echo "Nao encontrou o id: ". $id;
            return null;
        }
    }

}

?>