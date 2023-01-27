
document.getElementById('boton_datos_personales').addEventListener('click', function(){
    document.getElementById('detalle_lista_datos_personales').style.display = 'block';
    document.getElementById('detalle_lista_datos_educacion').style.display = 'none';
    document.getElementById('detalle_lista_datos_laborales').style.display = 'none';
    document.getElementById('detalle_lista_referencias').style.display = 'none';
    }
)

document.getElementById('boton_educacion').addEventListener('click', function(){
    document.getElementById('detalle_lista_datos_educacion').style.display = 'block';
    document.getElementById('detalle_lista_datos_laborales').style.display = 'none';
    document.getElementById('detalle_lista_referencias').style.display = 'none';
    document.getElementById('detalle_lista_datos_personales').style.display = 'none';
    }
)

document.getElementById('boton_experciencia').addEventListener('click', function(){
    document.getElementById('detalle_lista_datos_laborales').style.display = 'block';
    document.getElementById('detalle_lista_referencias').style.display = 'none';
    document.getElementById('detalle_lista_datos_personales').style.display = 'none';
    document.getElementById('detalle_lista_datos_educacion').style.display = 'none';
    }
)

document.getElementById('boton_referencia').addEventListener('click', function(){
    document.getElementById('detalle_lista_referencias').style.display = 'block';
    document.getElementById('detalle_lista_datos_personales').style.display = 'none';
    document.getElementById('detalle_lista_datos_educacion').style.display = 'none';
    document.getElementById('detalle_lista_datos_laborales').style.display = 'none';
    }
)
