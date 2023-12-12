<?php

class TarefaControl {
    private $conexao;
    private $tarefa;

    //private $id;

    function __construct($conexao) {
        $this->conexao = $conexao;
        $this->tarefa = new Tarefa();
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

    public function listarObj() {
        $sql = "SELECT * FROM tarefas";
        $result = $this->conexao->query($sql);

        $tarefas = array();

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
              
                $tarefa = new Tarefa($row["titulo"], $row["descricao"], $row["datahora"]);
                $tarefa->setId($row["id"]);
                $tarefas[] = $tarefa;
            }
        }

        return $tarefas;
    }

    public function pesquisar($filtro) {
        $sql = "SELECT * FROM tarefas WHERE titulo LIKE '%$filtro%' || descricao LIKE '%$filtro%' ";
        $result = $this->conexao->query($sql);

        $tarefas = array();

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                
                $tarefa = new Tarefa($row["titulo"], $row["descricao"], $row["datahora"]);
                $tarefa->setId($row["id"]);
                $tarefas[] = $tarefa;
            }
        }

        return $tarefas;
    }




    public function atualizar($obj) {        

        $sql = "UPDATE tarefas SET titulo='".$obj->getTitulo()."', descricao='".$obj->getDescricao()."', datahora='".$obj->getDataHora()."' WHERE id='".$obj->getId()."'";

        $result = $this->conexao->query($sql);

        if ($result) {
            return true;
           // echo "Objeto atualizado com sucesso!";
        } else {
            return false;
           // echo "Erro ao atualizar o objeto.";
        }

        //print_r($result);


    }

    public function deletar($obj) {        
        $sql = "DELETE FROM tarefas WHERE id='".$obj->getId()."'";

       // echo $sql;

        $result = $this->conexao->query($sql);

        if ($result) {
            return true;
            //echo "Objeto excluído com sucesso!";
        } else {
            return false;
            //echo "Erro ao excluir o objeto.";
        }

        //print_r($result);


    }

    public function cadastrar($obj) {        
        $sql = "INSERT INTO tarefas (titulo, descricao, datahora)
        VALUES ('".$obj->getTitulo()."',
         '".$obj->getDescricao()."', 
         '".$obj->getDataHora()."')";

        $result = $this->conexao->query($sql);

        if ($result) {
            //echo "Objeto cadastrado com sucesso!";
            return true;
        } else {
            //echo "Erro ao cadastrar objeto: ";
            return false;
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

            $tarefa = new Tarefa($row["titulo"], $row["descricao"], $row["datahora"]);

           // print_r($row);

            $tarefa->setId($row["id"]);

            return $tarefa;
            //return $result->fetch_assoc();
        } else {
          //  echo "Nao encontrou o id: ". $id;
            return null;
        }
    }

}

?>