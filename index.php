<?php
include('lrd_includes/lrd_conexion.php');
lrd_conectar();

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Juego</title>
    <link rel="stylesheet" href="lrd_estilos/estilos.css">
</head>

<body>
    <header id="lrd_header">
        <p>Mi juego de piedra papel o tijera</p>
    </header>
    <div class="lrd_contenedor">
        <div class="lrd_jugador">
            <h2>Jugador</h2>
            <img src="lrd_imagenes/lrd_jugador.png" alt="Jugador" id="lrd_jugador_eleccion" class="lrd_jugadorfoto">
        </div>
        <div class="lrd_computadora">
            <h2>Computadora</h2>
            <img src="lrd_imagenes/lrd_computadora.png" alt="Computadora" id="lrd_computadora_eleccion"
                class="lrd_computadorafoto">
        </div>
        <div class="lrd_opciones">
            <button id="lrd_piedra"><img src="lrd_imagenes/lrd_piedra.png" alt="piedra" class="lrd_piedrafoto"></button>
            <button id="lrd_papel"><img src="lrd_imagenes/lrd_papel.png" alt="papel" class="lrd_papelfoto"></button>
            <button id="lrd_tijera"><img src="lrd_imagenes/lrd_tijera.png" alt="tijera" class="lrd_tijerafoto"></button>
        </div>
        <div class="lrd_resultado">
            <h2 id="lrd_texto_resultado">Elige una opción</h2>
        </div>
        <ul id="lrd_reglas">
            <?php
            $sql = "SELECT * FROM regla1";
            $sql = mysqli_query($con, $sql);
            if (mysqli_num_rows($sql) != 0) {
                while ($r = mysqli_fetch_array($sql)) {
                    ?>
                    <li>
                        <?php echo $r['desc']; ?>
                    </li>
                
                    <?php

                }
            }

?>
           
        </ul>
    </div>
    <script defer src="lrd_components/lrd_app.js"></script>
</body>

</html>