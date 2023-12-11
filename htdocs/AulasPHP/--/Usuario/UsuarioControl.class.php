<?php

class UsuarioControl {
    private $db;
    private $usuario;

    //private $id;

    function __construct($conexao) {
        $this->db = $conexao;
        $usuario = new Usuario();
    }

    public function listarUsuarios() {
        $sql = "SELECT * FROM usuarios";
        $result = $this->db->query($sql);

        $usuarios = array();

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $usuarios[] = $row;
            }
        }

        return $usuarios;
    }
    public function buscarPorId($id)
    {
        $sql = "SELECT * FROM usuarios WHERE id = $id";
        $result = $this->query($sql);

        if ($result->num_rows > 0) {
            return $result->fetch_assoc();
        } else {
            return null;
        }
    }

}

?>