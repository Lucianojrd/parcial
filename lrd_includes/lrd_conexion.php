//el proyecto esta sin uso por lo que esta de baja momentaneamente
<?php
function lrd_conectar()
{
    global $con;
    $con = mysqli_connect("localhost", "id21454904_lrd", "...", "id21454904_lrd_parcial");
    if (mysqli_connect_errno()) {
        printf("Falló la conexión: %s\n", mysqli_connect_error());
        exit();
    } else {
        $con->set_charset("utf8");
        $ret = true;
    }
    return $ret;
}
function lrd_desconectar()
{
    global $con;
    mysqli_close($con);
}
?>
