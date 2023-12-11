<!DOCTYPE html>
<html>
<head>
    <title>Adicionar Máquina</title>
</head>
<body>
    <h1>Adicionar Máquina</h1>
    <form action="adicionar_maquina.php" method="post">
        <label for="tipo">Tipo de Máquina:</label><br>
        <select id="tipo" name="tipo">
            <option value="notebook">Notebook</option>
            <option value="desktop">Desktop</option>
        </select><br>
        <label for="fabricante">Fabricante:</label><br>
        <input type="text" id="fabricante" name="fabricante"><br>
        <label for="processador">Processador:</label><br>
        <input type="text" id="processador" name="processador"><br>
        <input type="submit" value="Adicionar Máquina">
    </form>
</body>
</html>
