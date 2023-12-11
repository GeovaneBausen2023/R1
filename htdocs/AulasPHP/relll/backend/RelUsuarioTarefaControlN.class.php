<?php

class RelUsuarioTarefaControlN {
    private $conexao;
    private $tarefas;
    private $usuario;

    //private $id;

    function __construct($conexao) {
        $this->conexao = $conexao;
        $tarefas = array(); //Tarefas
        $usuario = new Usuario();
    }


    public function listarTarefas($usuario) {

        //SELECT * FROM `relusuariotarefa` WHERE `idUsuario` = 1

        $sql = "SELECT * FROM `relusuariotarefa` WHERE `idUsuario` = '".$usuario->getId()."'";
        $result = $this->conexao->query($sql);

        $tarefas = array();
      
        $controlTarefa = new TarefaControl($this->conexao);        

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                //$usuarios[] = $row;
               // $idUsuario = $row["idUsuario"];
                $idTarefa = $row["idTarefa"];
                
                $tarefas[] = $controlTarefa->buscarPorId($idTarefa);                                 
                
            }
        }

        return $tarefas;


    }

    

    function pesquisarTarefaCaseSensitive($usuario, $procura) {    
        $tarefas = $this->listarTarefas($usuario);

        $encontradas = array();
        foreach($tarefas as $tarefa) {
            //echo "<hr>";
        // print_r($tarefa->getTitulo());
            
            if(strpos(strtoupper($tarefa->getTitulo()), strtoupper($procura)) != "") {
                //echo 'Achei: '. $tarefa->getTitulo();
                $encontradas[] = $tarefa;
            }/*
            else 
                echo 'Nao achei '. $tarefa->getTitulo();
            */
        }

        return $encontradas;
    }

    function pesquisarTarefa($usuario, $procura) {    
        $tarefas = $this->listarTarefas($usuario);

        $encontradas = array();
        foreach($tarefas as $tarefa) {
            //echo "<hr>";
        // print_r($tarefa->getTitulo());
            
            if(strpos($tarefa->getTitulo(), $procura) != "") {
                //echo 'Achei: '. $tarefa->getTitulo();
                $encontradas[] = $tarefa;
            }/*
            else 
                echo 'Nao achei '. $tarefa->getTitulo();
            */
        }

        return $encontradas;
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

    public function deletarTarefas($usuario) {      
        $retorno = false;
          
        $sql = "DELETE FROM relusuariotarefa WHERE idUsuario = '".$usuario->getId()."'";

      // echo $sql;

        $result = $this->conexao->query($sql);

        if ($result) {
            $retorno = true;
          //  echo "Objeto excluído com sucesso!";
        } 


        return $retorno;
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