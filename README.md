# pruebas-tecnicas

Prueba de Selección Desarrollo
Nombre : ____________________________________
Disponibilidad : ____________________________________
Teléfono : ____________________________________

DESARROLLO DE PROBLEMAS

1. Mensaje Oculto
Enunciado : Algunos textos contienen mensajes ocultos. En el contexto de este problema, el mensaje
oculto está compuesto de la primera letra de cada palabra en el texto, en el orden en que aparecen.
Dado un String text, compuesto sólo por letras minúsculas y espacios, retorne el mensaje oculto. Una
palabra es la secuencia máxima de letras consecutivas. Pueden haber varios espacios entre dos palabras.
También, text puede contener solo espacios.
Método:
String getMessage(String text)
Ejemplos:
a. text = "compete online design event rating"
Retorna: "coder"
b. text = " c o d e r "
Retorna: "coder"
c. text = " "
Retorna: ""



2. Encriptación
Enunciado : En este ejercicio no te diremos qué hacer, en base a los ejemplos presentados deberás
decirnos que hace la función “encriptar” e implementar el código de dicha función.
Método:
String encriptar(String texto)
Ejemplos:
a . texto = “atención”
Retorna: “ateció”
b . texto = “contable”
Retorna: “contable”
c . texto = “casa”
Retorna: cs


3. Línea de Números
Enunciado : Se da un String line conteniendo una lista de enteros, separados por uno o más espacios.
Dado un int givenNumber, retornar el menor entero en line que sea estrictamente mayor que givenNumber.
Retornar -1 si no existe tal número en line.
Método:
int getLeast(String line, int givenNumber)
Ejemplos:
a . line = "1 2 3 4 5", givenNumber = 2
Retorna: 3
3 es el número más pequeño estrictamente mayor que 2.
b . line = "120 450 780", givenNumber = 1000
Retorna: -1
No hay números estrictamente mayores que 1000.
c . line = " 45 253 645 400 676 567 ", givenNumber = 1
Retorna: 45
2
d . line = " 45 253 645 400 676 567 ", givenNumber = 400
Retorna: 567
e . line = " 568 769 436 432 457 563 567 311 34 3 2 9", givenNumber = 460
Retorna: 563


4. Percentil
Enunciado: Dado un int[] x y un percentil p (entre 0 y 100, inclusive), encontrar el menor elemento y en x tal
que al menos p por ciento de los elementos en x son menores o iguales que y.
Método:
int fractile(int[] x, int p)
Ejemplos:
a . x = {-3, -5, 2, 1}, p = 50
Retorna: y = -3
50 por ciento de los elementos en x son menores o iguales que -3: -5 y -3.
b . x = {7, 9, 2, 10, 6}, p = 50
Retorna: y = 2
60 por ciento de los elementos en x son menores o iguales que 2, y 40 por ciento son menores o iguales
que 6. Por lo menos 50% de los elementos deben ser menores o iguales que la respuesta, por lo que la
respuesta es 2.
c . x = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, p = 39
Retorna: y = 4
4 da 40%, y 3 da 30%, que no es suficiente, por lo tanto 4 es la respuesta.
d . x = {1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 7, 9, 5, 43, 124, 94}, p = 0
Retorna: y = 1
El menor de los elementos de x es 1, y da 5%.
e . x = {1}, p = 100
Retorna: y = 1
1 es el único elemento de x, por lo que no hay opción alguna.
3
4