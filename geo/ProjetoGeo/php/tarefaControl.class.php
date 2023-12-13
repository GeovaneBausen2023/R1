<?php

class TarefaControl {
    private $conexao;//banco de dados
    private $tarefa;

    //private $id;
//Nova instância da classe Tarefa e a atribuida à propriedade $tarefa.
    function __construct($conexao) {
        $this->conexao = $conexao;
        $this->tarefa = new Tarefa();
    }
                //buscar tarefas no banco de dados e retorna um array associativo
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
                //Cria um novo objeto Tarefa para cada linha retornada pela consulta e os adiciona a um array.
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
                    //Este método aceita um parâmetro $filtro e executa uma consulta SQL para buscar cujo título ou descrição contém o filtro fornecido. Ele retorna um array de objetos Tarefa.
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



        //Este método aceita um objeto Tarefa como parâmetro e atualiza a tarefa correspondente no banco de dados.
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
                    //aceita um objeto Tarefa como parâmetro e exclui a tarefa correspondente do banco de dados.
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
                            //Este método aceita um objeto Tarefa como parâmetro e insere uma nova tarefa no banco de dados.
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
                                            //ID como parâmetro e busca a tarefa correspondente no banco de dados. Ele retorna um objeto Tarefa
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