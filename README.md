# Verificador de Isogramas

![Version](https://img.shields.io/badge/Versión-1.0-blue)
![Status](https://img.shields.io/badge/Estado-Activo-brightgreen)
![License](https://img.shields.io/badge/Licencia-CC0--1.0-orange)

## ¿Qué es esto?

Se trata de una herramienta interactiva mediante línea de comandos que hice.
Este programita comprueba si la palabra que introduzcas es un **isograma**. 
Publicado con propósitos educativos y prácticos. 

## ¿Qué significa isograma?

Un isograma es una frase o palabra donde no hay letras duplicadas.

* **Sí son isogramas**: "murciélago", "centrifugado", "supervivencia"
* **No son isogramas**: "casa" (se repite la 'a'), "perro" (se repite la 'r')

## Características del script

* Ignora mayúsculas/minúsculas
* Ignora acentos (toma 'á', 'à', 'ä', 'â' como 'a')
* Quita espacios iniciales y finales
* Identifica y rechaza palabras con espacios intermedios
* Muestra la razón específica por la que una palabra no es un isograma

## Uso

Si de algo te sirve y quieres usarlo, puedes:

1. Descarga este repositorio
2. Ejecutar el archivo con Node.js:

```bash
node Programita detector de isogramas.js
```

Ó 

1. Crear archivo con terminacion ".js"
2. Copia y pega el código
3. Ejecuta el archivo con Node.js

```bash
node nombre del archivo.js
```

## Tecnologías utilizadas

* JavaScript
* Node.js (módulo readline)

## Licencia

Repositorio bajo la licencia [Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/). 

Esto implica que tienes la libertad de copiar, alterar, difundir y ejecutar el trabajo, incluso para propósitos comerciales, todo sin requerir autorización.

---

*Proyecto con fines educativos y de práctica.*
