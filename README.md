# Regla Virtual

Guía visual horizontal para facilitar la lectura de filas, tablas y listados en páginas web. Se activa desde un favorito del navegador (*bookmarklet*) y se mueve verticalmente con el mouse.

La regla es una franja azul translúcida con bordes, marcas y números de referencia. Permanece fija respecto de la ventana mientras se desplaza el contenido de la página. Las marcas son referencias visuales, sin unidades de medida calibradas.

## Instalación

1. Abrir [`regla.bookmarklet.txt`](regla.bookmarklet.txt) y pulsar **Raw** para ver el contenido sin formato.
2. Copiar la línea completa, incluido el comienzo `javascript:`.
3. Crear un favorito en el navegador con el nombre **Regla Virtual**.
4. Editar ese favorito y pegar la línea copiada en el campo **URL** o **Dirección**. Guardar los cambios.

No requiere instalar extensiones, paquetes ni aplicaciones adicionales.

## Uso

| Acción | Resultado |
| --- | --- |
| Pulsar el favorito en una página web | Muestra la regla |
| Hacer clic sobre la regla | Activa el movimiento |
| Mover el mouse hacia arriba o abajo | La regla sigue la posición vertical del puntero |
| Hacer otro clic sobre la regla | Fija la posición y la guarda para ese sitio |
| Pulsar nuevamente el favorito | Retira la regla y borra la posición guardada |

No hace falta mantener presionado el botón del mouse para moverla. Al recargar o cambiar de página hay que pulsar el favorito para volver a mostrarla.

La posición se guarda en el almacenamiento local del navegador para el sitio actual. Si se recarga la página sin retirar la regla mediante el favorito, la siguiente activación recupera esa posición. Retirarla con el favorito reinicia la posición: la próxima vez aparece a mitad de la ventana.

## Archivos

| Archivo | Contenido |
| --- | --- |
| `regla.js` | Código JavaScript legible |
| `regla.bookmarklet.txt` | Favorito listo para copiar, en una sola línea |
| `README.md` | Instalación, uso y configuración |

## Configuración

Las opciones visuales están en `regla.js`:

- `r.style.width`: ancho de la regla; valor inicial `99%`.
- `r.style.height`: altura de la franja; valor inicial `60px`.
- `r.style.background`: color y transparencia.
- `r.style.backdropFilter`: desenfoque del contenido situado detrás de la franja.
- `numMarks`: cantidad de intervalos; valor inicial `20`.

Si se cambia la altura de la franja, ajustar también los valores `30` y `60` del controlador de movimiento: representan la mitad de la altura y la altura total. Después de modificar el código, regenerar el bookmarklet y actualizar la dirección del favorito instalado.

## Compatibilidad y datos

Está orientada a navegadores de escritorio con JavaScript, almacenamiento local y mouse. Las páginas internas del navegador y algunos sitios restringen la ejecución de bookmarklets. El efecto de desenfoque depende del soporte de `backdrop-filter`.

El código añade una capa visual a la página actual y guarda únicamente su posición vertical en la clave local `virtual-ruler`. No envía datos a servidores ni utiliza bibliotecas externas.
