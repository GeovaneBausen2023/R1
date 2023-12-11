<?php

class UsuarioControl {
    private $conexao;
    private $usuario;

    //private $id;

    function __construct($conexao) {
        $this->conexao = $conexao;
        $usuario = new Usuario();
    }

    public function listar() {
        $sql = "SELECT * FROM usuarios";
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
        $sql = "SELECT * FROM usuarios";
        $result = $this->conexao->query($sql);

        $usuarios = array();

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                
                //($nome = "", $email = "", $senha = "")
                //$usuarios[] = $row;
                $usuario = new Usuario($row["login"], $row["email"], $row["senha"]);
                $usuario->setId($row["id"]);
                $usuarios[] = $usuario;
            }
        }

        return $usuarios;
    }



    public function atualizar($obj) {        

        $sql = "UPDATE usuarios SET nome='".$obj->getNome()."', email='".$obj->getEmail()."', senha='".$obj->getSenha()."' WHERE id='".$obj->getId()."'";

        $result = $this->conexao->query($sql);

        if ($result) {
            echo "Objeto atualizado com sucesso!";
        } else {
            echo "Erro ao atualizar o objeto.";
        }

        //print_r($result);


    }

    public function deletar($obj) {        
        $sql = "DELETE FROM usuarios WHERE id='".$obj->getId()."'";

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
        $sql = "INSERT INTO usuarios (login, email, senha)
        VALUES ('".$obj->getNome()."', '".$obj->getEmail()."', '".$obj->getSenha()."')";

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
        $sql = "SELECT * FROM usuarios WHERE id = $id";
        $result = $this->conexao->query($sql);

        if ($result->num_rows > 0) {
            //$nome = "", $email = "", $senha = ""

            $row = $result->fetch_assoc();

            $usuario = new Usuario($row["login"], $row["email"], $row["senha"]);

           // print_r($row);

            $usuario->setId($row["id"]);

            return $usuario;
            //return $result->fetch_assoc();
        } else {
            echo "Nao encontrou o id: ". $id;
            return null;
        }
    }

}

?>