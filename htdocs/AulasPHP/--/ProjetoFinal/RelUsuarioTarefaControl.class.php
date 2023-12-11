<?php

class RelUsuarioTarefaControl {
    private $conexao;
    private $tarefa;
    private $usuario;

    //private $id;

    function __construct($conexao) {
        $this->conexao = $conexao;
        $tarefa = new Tarefa();
        $usuario = new Usuario();
    }

    public function listar() {
        $sql = "SELECT * FROM relusuariotarefa";
        $result = $this->conexao->query($sql);

        $usuarios = array();

        $controlUsuario = new UsuarioControl($this->conexao);
        $controlTarefa = new TarefaControl($this->conexao);        

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                //$usuarios[] = $row;
                $idUsuario = $row["idUsuario"];
                $idTarefa = $row["idTarefa"];

                $controlUsuario->buscarPorId($idUsuario);
                $controlTarefa->buscarPorId($idTarefa);       
                

                print_r($controlUsuario->buscarPorId($idUsuario));
                print_r($controlTarefa->buscarPorId($idTarefa));
                echo "<hr>";
                
            }
        }

       // return $usuarios;
    }


    public function cadastrar($usuario, $tarefa) {   

        $sql = "INSERT INTO `relusuariotarefa` (`idUsuario`, `idTarefa`) VALUES ('".$usuario->getId()."', '".$tarefa->getId()."');";
                
       /* $sql = "INSERT INTO `tarefas` (`id`, `titulo`, `descricao`, `data`) VALUES (NULL, '".$obj->getTitulo()."', '".$obj->getDescricao()."', NOW());";*/

        $result = $this->conexao->query($sql);

        if ($result) {
            echo "Relacao cadastrada com sucesso!";
        } else {
            echo "Erro ao cadastrar relacao";
        }

        //print_r($result);


    }


    public function deletar($usuario, $tarefa) {      
        $retorno = false;
          
        $sql = "DELETE FROM relusuariotarefa WHERE idUsuario = '".$usuario->getId()."' AND idTarefa = '".$tarefa->getId()."'";

      // echo $sql;

        $result = $this->conexao->query($sql);

        if ($result) {
            $retorno = true;
          //  echo "Objeto excluído com sucesso!";
        } 


        return $retorno;
        //print_r($result);
    }


    public function atualizar($usuario, $tarefa_antiga, $tarefa_nova) {        

        $sql = "UPDATE `relusuariotarefa` SET `idUsuario`='".$usuario->getId()."',`idTarefa`='".$tarefa_nova->getId()."' WHERE idUsuario = '".$usuario->getId()."' AND idTarefa = '".$tarefa_antiga->getId()."'";
        /*
        $sql = "UPDATE `tarefas` SET `titulo` = '".$obj->getTitulo()."', `descricao` = '".$obj->getDescricao()."', `data` = NOW() WHERE id = ". $obj->getId();
*/
       

        $result = $this->conexao->query($sql);

        if ($result) {
            echo "Objeto atualizado com sucesso!";
        } else {
            echo "Erro ao atualizar o objeto.";
        }

        //print_r($result);


    }    


    /*
    


    public function atualizar($obj) {        

        $sql = "UPDATE `tarefas` SET `titulo` = '".$obj->getTitulo()."', `descricao` = '".$obj->getDescricao()."', `data` = NOW() WHERE id = ". $obj->getId();

       

        $result = $this->conexao->query($sql);

        if ($result) {
            echo "Objeto atualizado com sucesso!";
        } else {
            echo "Erro ao atualizar o objeto.";
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
*/
}

?>