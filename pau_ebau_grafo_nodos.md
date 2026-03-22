# Grafo de conocimiento — Matemáticas PAU/EBAU (Ciencias)
## Fase 1: Definición completa de nodos y dependencias

**Total de nodos:** 150  
**Bloques temáticos:** 5  
**Nodos sin prerrequisitos (puntos de entrada):** 28  
**Umbral de maestría:** 90 % por nodo  

---

## Convenciones del documento

Cada nodo sigue el siguiente formato:

```
### ID — Nombre del nodo
- **Bloque:** Nombre del bloque temático
- **Prerrequisitos:** [lista de IDs] | ninguno
- **Desbloquea:** [lista de IDs] | nodo terminal
- **Descripción:** Breve descripción del contenido atómico
```

Los **prerrequisitos** son los nodos que deben estar dominados (≥ 90 %) antes de poder acceder a este nodo. Las **dependencias cruzadas** entre bloques se indican explícitamente.

---

## Bloque POL — Álgebra Elemental
> 24 nodos | Color de referencia: `#D85A30`

### POL01 — Números reales y propiedades
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** ninguno *(nodo de entrada)*
- **Desbloquea:** POL02, POL03, POL04, POL11, POL15, POL21, POL22, POL23, ALG01, GEO01, ANL01, EST01
- **Descripción:** Estructura de los números reales (N, Z, Q, R). Propiedades de las operaciones (conmutativa, asociativa, distributiva). Valor absoluto. Orden en la recta real.

### POL02 — Potencias y radicales
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL01
- **Desbloquea:** POL13, POL19
- **Descripción:** Propiedades de las potencias de exponente entero y fraccionario. Operaciones con radicales: simplificación, racionalización, suma y producto.

### POL03 — Operaciones con fracciones algebraicas
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL01
- **Desbloquea:** POL09
- **Descripción:** Fracciones numéricas como caso particular. Simplificación, suma, resta, multiplicación y división de fracciones algebraicas sencillas (sin factorización previa).

### POL04 — Polinomios: suma y producto
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL01
- **Desbloquea:** POL05, POL11, POL24, ALG18, ANL03
- **Descripción:** Definición de polinomio. Grado, coeficientes, término independiente. Suma, resta y multiplicación de polinomios. Productos notables.

### POL05 — División de polinomios y regla de Ruffini
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL04
- **Desbloquea:** POL06, POL07
- **Descripción:** Algoritmo de la división euclídea de polinomios. Regla de Ruffini para divisores de la forma (x − a). Cociente y resto.

### POL06 — Factorización de polinomios
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL04, POL05
- **Desbloquea:** POL07, POL08, POL09, ANL07
- **Descripción:** Extracción de factor común. Factorización por agrupación. Uso de productos notables inversos. Descomposición completa en factores irreducibles.

### POL07 — Teorema del resto y del factor
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL05, POL06
- **Desbloquea:** POL08
- **Descripción:** Enunciado y demostración del teorema del resto. Teorema del factor: condición para que (x − a) divida a p(x). Aplicaciones para encontrar raíces.

### POL08 — Raíces de polinomios
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL06, POL07
- **Desbloquea:** *(contribuye a ANL08 indirectamente vía POL06)*
- **Descripción:** Relación entre raíces y factores. Multiplicidad de raíces. Número de raíces de un polinomio según su grado. Raíces racionales candidatas.

### POL09 — Fracciones algebraicas: simplificación
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL06, POL03
- **Desbloquea:** POL10, ANL35
- **Descripción:** Condición de igualdad de fracciones algebraicas. Simplificación mediante factorización del numerador y denominador. Dominio de definición.

### POL10 — Fracciones algebraicas: operaciones
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL09
- **Desbloquea:** *(nodo terminal del bloque POL en esta rama)*
- **Descripción:** Mínimo común múltiplo de polinomios. Suma, resta, multiplicación y división de fracciones algebraicas. Simplificación del resultado final.

### POL11 — Ecuaciones de 2º grado
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL04
- **Desbloquea:** POL12, POL13, POL14, POL20, ALG17, GEO27
- **Descripción:** Resolución por factorización, por completar el cuadrado y mediante la fórmula general. Discriminante. Ecuaciones incompletas. Relaciones entre raíces y coeficientes (Vieta).

### POL12 — Ecuaciones bicuadradas y reducibles
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL11
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Ecuaciones bicuadradas (cambio u = x²). Ecuaciones reducibles a cuadráticas mediante sustitución. Comprobación de soluciones.

### POL13 — Ecuaciones con radicales
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL02, POL11
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Aislamiento y elevación al cuadrado. Soluciones extrañas y comprobación obligatoria. Ecuaciones con dos radicales.

### POL14 — Inecuaciones de 1er y 2º grado
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL11
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Resolución de inecuaciones lineales y cuadráticas. Estudio del signo del polinomio de 2º grado. Expresión de la solución en notación de intervalo.

### POL15 — Números complejos: forma binómica
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL01
- **Desbloquea:** POL16
- **Descripción:** Definición de la unidad imaginaria i. Forma binómica a + bi. Parte real e imaginaria. Representación en el plano de Gauss. Conjugado y módulo.

### POL16 — Operaciones con números complejos
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL15
- **Desbloquea:** POL17
- **Descripción:** Suma, resta, multiplicación y división en forma binómica. División mediante multiplicación por el conjugado.

### POL17 — Forma polar y exponencial de complejos
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL16
- **Desbloquea:** POL18
- **Descripción:** Argumento de un número complejo. Conversión entre forma binómica y polar (módulo y argumento). Forma trigonométrica y exponencial (fórmula de Euler).

### POL18 — Potencias y raíces de números complejos
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL17
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Fórmula de De Moivre para potencias. Cálculo de las n raíces enésimas de un número complejo. Representación de las raíces como vértices de un polígono regular.

### POL19 — Logaritmos: definición y propiedades
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL02
- **Desbloquea:** POL20, ANL09, ANL18
- **Descripción:** Definición de logaritmo como exponente. Propiedades operativas (suma, resta, potencia). Logaritmo natural y decimal. Cambio de base.

### POL20 — Ecuaciones logarítmicas y exponenciales
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL19, POL11
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Resolución de ecuaciones exponenciales por igualación de bases o logaritmación. Ecuaciones logarítmicas: propiedades y dominio de validez.

### POL21 — Progresiones aritméticas
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL01
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Definición y razón de una progresión aritmética. Término general. Suma de los n primeros términos.

### POL22 — Progresiones geométricas
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL01
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Definición y razón de una progresión geométrica. Término general. Suma de los n primeros términos. Suma de la serie geométrica convergente.

### POL23 — Combinatoria: permutaciones y combinaciones
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL01
- **Desbloquea:** POL24, EST14, EST22
- **Descripción:** Principio de multiplicación. Factorial. Permutaciones (con y sin repetición). Combinaciones. Variaciones. Aplicaciones al conteo.

### POL24 — Binomio de Newton
- **Bloque:** Álgebra Elemental
- **Prerrequisitos:** POL23, POL04
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Coeficientes binomiales y triángulo de Pascal. Fórmula del binomio de Newton. Término general del desarrollo. Aplicaciones al cálculo de potencias.

---

## Bloque ALG — Álgebra Lineal
> 21 nodos | Color de referencia: `#7F77DD`

### ALG01 — Concepto de matriz y tipos
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ninguno *(nodo de entrada)*
- **Desbloquea:** ALG02, ALG05, ALG18
- **Descripción:** Definición de matriz m×n. Elementos, filas, columnas. Tipos: cuadrada, fila, columna, nula, identidad, diagonal, triangular, simétrica.

### ALG02 — Operaciones con matrices: suma y producto escalar
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG01
- **Desbloquea:** ALG03, ALG04
- **Descripción:** Suma y diferencia de matrices (condición de dimensión). Producto de una matriz por un escalar. Propiedades de ambas operaciones.

### ALG03 — Producto de matrices
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG02
- **Desbloquea:** ALG10
- **Descripción:** Condición de dimensión para el producto. Algoritmo de cálculo. Propiedades: asociativa, distributiva, no conmutativa. Potencias de matrices cuadradas.

### ALG04 — Matriz transpuesta y matrices especiales
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG02
- **Desbloquea:** *(contribuye a ALG11 vía conocimiento previo)*
- **Descripción:** Transposición de una matriz. Propiedades de la traspuesta. Matrices simétricas y antisimétricas. Matrices ortogonales (introducción).

### ALG05 — Determinante de orden 2
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG01
- **Desbloquea:** ALG06
- **Descripción:** Definición y cálculo del determinante de una matriz 2×2. Interpretación geométrica (área del paralelogramo). Propiedades básicas.

### ALG06 — Determinante de orden 3: regla de Sarrus
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG05
- **Desbloquea:** ALG07, ALG08, ALG15, GEO06
- **Descripción:** Cálculo del determinante 3×3 mediante la regla de Sarrus. Interpretación geométrica (volumen del paralelepípedo).

### ALG07 — Desarrollo por adjuntos (cofactores)
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG06
- **Desbloquea:** ALG09, ALG11
- **Descripción:** Menor complementario y cofactor de un elemento. Desarrollo del determinante por una fila o columna. Matriz de cofactores y matriz adjunta.

### ALG08 — Propiedades de los determinantes
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG06
- **Desbloquea:** ALG09
- **Descripción:** Propiedades: determinante de la traspuesta, intercambio de filas/columnas, factor común, aditividad, determinante con fila/columna nula o proporcional. Determinante del producto.

### ALG09 — Rango de una matriz
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG07, ALG08
- **Desbloquea:** ALG10, ALG13
- **Descripción:** Definición de rango mediante determinantes (menores no nulos). Cálculo por el método de Gauss (escalonamiento). Propiedades del rango.

### ALG10 — Matriz inversa: método de Gauss-Jordan
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG03, ALG09
- **Desbloquea:** ALG11
- **Descripción:** Condición de invertibilidad (rango máximo / det ≠ 0). Ampliación de la matriz con la identidad y escalonamiento. Comprobación A·A⁻¹ = I.

### ALG11 — Matriz inversa: método de la matriz adjunta
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG07, ALG10
- **Desbloquea:** *(nodo terminal del bloque en esta rama)*
- **Descripción:** Fórmula A⁻¹ = adj(A)ᵀ / det(A). Cálculo de la inversa mediante la matriz de cofactores. Comparación con el método de Gauss.

### ALG12 — Sistemas de ecuaciones lineales: conceptos
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** POL01
- **Desbloquea:** ALG13
- **Descripción:** Definición de sistema lineal m×n. Solución, compatibilidad, indeterminación. Representación matricial Ax = b. Sistemas equivalentes.

### ALG13 — Clasificación de sistemas (Rouché-Frobenius)
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG09, ALG12
- **Desbloquea:** ALG14, ALG15, ALG16, ALG17, GEO12, GEO13, GEO14
- **Descripción:** Teorema de Rouché-Frobenius: rango de A vs rango de la ampliada. Sistemas compatible determinado, compatible indeterminado e incompatible.

### ALG14 — Resolución por el método de Gauss
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG13
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Operaciones elementales sobre filas. Escalonamiento de la matriz ampliada. Resolución por sustitución regresiva. Sistemas con infinitas soluciones: parametrización.

### ALG15 — Resolución por la regla de Cramer
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG06, ALG13
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Condición de aplicabilidad (sistema cuadrado y det A ≠ 0). Fórmula de Cramer. Interpretación geométrica para 2×2 y 3×3.

### ALG16 — Sistemas homogéneos
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG13
- **Desbloquea:** *(contribuye a ALG19)*
- **Descripción:** Definición (b = 0). Solución trivial siempre existente. Condición para soluciones no triviales (det A = 0). Relación con la dependencia lineal.

### ALG17 — Discusión paramétrica de sistemas
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG13, POL11
- **Desbloquea:** GEO15
- **Descripción:** Análisis de la compatibilidad de un sistema según el valor de un parámetro real. Cálculo del rango en función del parámetro. Distinción de casos.

### ALG18 — Espacios vectoriales: axiomas
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG01
- **Desbloquea:** ALG19, ALG21
- **Descripción:** Definición abstracta de espacio vectorial. Los ocho axiomas. Ejemplos: Rⁿ, polinomios, matrices. Vector nulo y opuesto.

### ALG19 — Dependencia e independencia lineal
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG18
- **Desbloquea:** ALG20
- **Descripción:** Combinación lineal de vectores. Definición de dependencia e independencia lineal. Criterio mediante determinantes y rango. Sistema generador.

### ALG20 — Base y dimensión de un espacio vectorial
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG19
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Definición de base (sistema libre y generador). Dimensión del espacio. Coordenadas de un vector respecto de una base. Cambio de base.

### ALG21 — Subespacio vectorial
- **Bloque:** Álgebra Lineal
- **Prerrequisitos:** ALG18
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Definición y criterio de subespacio (cerrado bajo suma y producto escalar). Subespacio generado por un conjunto. Intersección y suma de subespacios.

---

## Bloque GEO — Geometría Analítica
> 30 nodos | Color de referencia: `#1D9E75`

### GEO01 — Vectores en el plano: componentes y módulo
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** POL01 *(nodo de entrada efectivo)*
- **Desbloquea:** GEO02
- **Descripción:** Vector como par ordenado. Componentes cartesianas. Módulo de un vector. Vector unitario. Representación gráfica.

### GEO02 — Operaciones con vectores: suma y producto escalar por número
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO01
- **Desbloquea:** GEO03, GEO05
- **Descripción:** Suma y diferencia de vectores (regla del paralelogramo y componente a componente). Producto de un vector por un escalar. Combinación lineal de vectores.

### GEO03 — Producto escalar: definición y cálculo
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO02
- **Desbloquea:** GEO04
- **Descripción:** Definición geométrica (u·v = |u||v|cosθ) y algebraica (suma de productos de componentes). Propiedades. Norma al cuadrado de un vector.

### GEO04 — Ángulo entre vectores y ortogonalidad
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO03
- **Desbloquea:** GEO21, GEO22, GEO23
- **Descripción:** Cálculo del ángulo entre dos vectores a partir del producto escalar. Condición de ortogonalidad (u·v = 0). Proyección ortogonal de un vector sobre otro.

### GEO05 — Vectores en el espacio R³
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO02
- **Desbloquea:** GEO06, GEO08, GEO10
- **Descripción:** Extensión al espacio tridimensional. Base canónica {i, j, k}. Módulo en R³. Todas las operaciones del plano extendidas a R³.

### GEO06 — Producto vectorial
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO05, ALG06 *(dependencia cruzada con Álgebra Lineal)*
- **Desbloquea:** GEO07, GEO10, GEO16
- **Descripción:** Definición mediante el desarrollo del determinante formal. Propiedades: anticonmutativo, bilineal, ortogonalidad con los factores. Módulo (área del paralelogramo).

### GEO07 — Producto mixto y volumen del paralelepípedo
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO06
- **Desbloquea:** GEO18
- **Descripción:** Definición del producto mixto [u, v, w]. Cálculo como determinante 3×3. Interpretación geométrica (volumen). Coplanaridad (producto mixto = 0).

### GEO08 — Ecuación vectorial de la recta en R³
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO05
- **Desbloquea:** GEO09
- **Descripción:** Recta como posición de un punto más múltiplo de un vector director. Ecuación vectorial P = P₀ + t·d. Determinación de la recta dados dos puntos.

### GEO09 — Ecuaciones paramétrica y continua de la recta
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO08
- **Desbloquea:** GEO12, GEO13, GEO16, GEO21, GEO22, GEO25
- **Descripción:** Desarrollo de la ecuación vectorial: ecuaciones paramétricas. Eliminación del parámetro: ecuación continua (o simétrica). Paso de una forma a otra.

### GEO10 — Ecuación del plano: forma vectorial y normal
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO05, GEO06
- **Desbloquea:** GEO11
- **Descripción:** Plano como conjunto de puntos de la forma P = P₀ + s·u + t·v. Vector normal al plano como producto vectorial de dos vectores directores.

### GEO11 — Ecuación implícita (general) del plano
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO10
- **Desbloquea:** GEO13, GEO14, GEO17, GEO19, GEO22, GEO23, GEO24, GEO26
- **Descripción:** Deducción de la ecuación ax + by + cz + d = 0 a partir del vector normal y un punto. Determinación del plano dados tres puntos o punto y dos vectores.

### GEO12 — Posición relativa de dos rectas
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO09, ALG13
- **Desbloquea:** GEO18, GEO25
- **Descripción:** Clasificación: secantes, paralelas, coincidentes, que se cruzan. Criterio mediante rangos de la matriz de direcciones y ampliada. Punto de intersección si secantes.

### GEO13 — Posición relativa de recta y plano
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO09, GEO11, ALG13
- **Desbloquea:** GEO19, GEO24, GEO25, GEO26
- **Descripción:** Clasificación: paralelos, contenida, secante (un punto). Sustitución de paramétricas en la implícita o análisis de rangos. Punto de corte si secante.

### GEO14 — Posición relativa de dos planos
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO11, ALG13
- **Desbloquea:** GEO15, GEO20
- **Descripción:** Clasificación: paralelos, coincidentes, secantes (recta de intersección). Criterio mediante proporcionalidad de normales y estudio del sistema 2×3.

### GEO15 — Posición relativa de tres planos
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO14, ALG17
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Sistema 3×3 asociado a tres planos. Clasificación de todas las configuraciones posibles según rangos. Discusión paramétrica si los planos dependen de un parámetro.

### GEO16 — Distancia de un punto a una recta en R³
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO06, GEO09
- **Desbloquea:** GEO18, GEO25
- **Descripción:** Fórmula mediante producto vectorial: d = |PP₀ × d| / |d|. Pie de la perpendicular como alternativa.

### GEO17 — Distancia de un punto a un plano
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO11
- **Desbloquea:** GEO19, GEO20, GEO24
- **Descripción:** Fórmula d = |ax₀ + by₀ + cz₀ + d| / √(a²+b²+c²). Pie de la perpendicular desde el punto al plano.

### GEO18 — Distancia entre rectas que se cruzan
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO07, GEO12
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Fórmula mediante producto mixto: d = |[P₁P₂, d₁, d₂]| / |d₁ × d₂|. Segmento común perpendicular.

### GEO19 — Distancia entre recta y plano paralelos
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO13, GEO17
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Reducción a distancia de un punto (de la recta) al plano. Verificación previa de paralelismo.

### GEO20 — Distancia entre planos paralelos
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO14, GEO17
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Reducción a distancia de un punto (de un plano) al otro plano. Condición de planos paralelos (normales proporcionales).

### GEO21 — Ángulo entre dos rectas
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO04, GEO09
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Ángulo agudo entre las direcciones de ambas rectas. Fórmula a partir del coseno del ángulo entre vectores directores. Caso de rectas perpendiculares.

### GEO22 — Ángulo entre recta y plano
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO04, GEO09, GEO11
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Ángulo como complemento del ángulo entre la dirección y la normal al plano. Fórmula mediante seno. Condición de perpendicularidad.

### GEO23 — Ángulo entre dos planos (diedro)
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO04, GEO11
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Ángulo entre los vectores normales de ambos planos. Fórmula mediante coseno. Planos perpendiculares y paralelos como casos límite.

### GEO24 — Punto simétrico respecto a un plano
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO17, GEO13
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Recta perpendicular al plano que pasa por el punto. Intersección con el plano (pie de la perpendicular). Cálculo del simétrico como doble del punto medio.

### GEO25 — Punto simétrico respecto a una recta
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO16, GEO12
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Plano perpendicular a la recta en el punto dado. Intersección con la recta (pie de la perpendicular). Cálculo del simétrico.

### GEO26 — Recta perpendicular a un plano
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO10, GEO13
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Dirección de la recta perpendicular como vector normal del plano. Determinación de la recta perpendicular por un punto dado. Pie de la perpendicular.

### GEO27 — Cónicas: circunferencia
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO01, POL11
- **Desbloquea:** GEO28, GEO29, GEO30
- **Descripción:** Ecuación canónica y general de la circunferencia. Determinación del centro y radio. Posición relativa de recta y circunferencia. Ecuación de la tangente.

### GEO28 — Cónicas: elipse
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO27
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Definición geométrica (suma de distancias). Ecuación canónica. Semiejes, focos, excentricidad. Relación a² = b² + c².

### GEO29 — Cónicas: hipérbola
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO27
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Definición geométrica (diferencia de distancias). Ecuación canónica. Semiejes, focos, excentricidad, asíntotas. Relación c² = a² + b².

### GEO30 — Cónicas: parábola
- **Bloque:** Geometría Analítica
- **Prerrequisitos:** GEO27
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Definición geométrica (equidistancia a foco y directriz). Ecuación canónica (eje horizontal y vertical). Vértice, foco, directriz, parámetro.

---

## Bloque ANL — Análisis Matemático
> 41 nodos | Color de referencia: `#378ADD`

### ANL01 — Sucesiones numéricas: definición y tipos
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** POL01 *(nodo de entrada efectivo)*
- **Desbloquea:** ANL02
- **Descripción:** Definición de sucesión. Término general. Sucesiones monótonas, acotadas, periódicas. Ejemplos clásicos (aritmética, geométrica, recurrentes).

### ANL02 — Límite de una sucesión
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL01
- **Desbloquea:** ANL03
- **Descripción:** Definición informal y formal de límite. Sucesiones convergentes y divergentes. Propiedades operativas del límite. Sucesiones de Cauchy (introducción).

### ANL03 — Límite de una función: definición
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL02, POL04
- **Desbloquea:** ANL04, ANL05
- **Descripción:** Definición informal (aproximación) y formal (épsilon-delta). Límite en un punto y en el infinito. Unicidad del límite. Límites de funciones elementales.

### ANL04 — Álgebra de límites
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL03
- **Desbloquea:** ANL06, ANL07, ANL12
- **Descripción:** Propiedades operativas: límite de la suma, producto, cociente y composición. Límites de funciones polinómicas y racionales. Estrategias básicas de cálculo.

### ANL05 — Límites laterales
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL03
- **Desbloquea:** ANL10, ANL26
- **Descripción:** Límite por la izquierda y por la derecha. Condición de existencia del límite bilateral. Funciones con salto: valor absoluto, parte entera. Límites en puntos de discontinuidad.

### ANL06 — Límites en el infinito
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL04
- **Desbloquea:** ANL08, ANL26, ANL41
- **Descripción:** Comportamiento de funciones cuando x → ±∞. Límites de funciones racionales (comparación de grados). Órdenes de magnitud: polinomios, exponenciales, logaritmos.

### ANL07 — Indeterminación 0/0: factorización y racionalización
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL04, POL06
- **Desbloquea:** ANL29
- **Descripción:** Resolución de la indeterminación 0/0 mediante factorización polinómica. Técnica de racionalización para radicales. Límites trigonométricos fundamentales (sin x/x → 1).

### ANL08 — Indeterminación ∞/∞ y otras formas indeterminadas
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL06
- **Desbloquea:** ANL09
- **Descripción:** Resolución de ∞/∞ (divisor principal). Formas indeterminadas ∞ − ∞, 0·∞. Equivalentes infinitesimales como herramienta.

### ANL09 — Indeterminación 1^∞ y número e
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL08, POL19
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Definición del número e como límite de (1 + 1/n)ⁿ. Resolución de la indeterminación 1^∞ reduciendo al límite fundamental. Formas equivalentes.

### ANL10 — Continuidad: definición y tipos de discontinuidad
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL05
- **Desbloquea:** ANL11
- **Descripción:** Definición de continuidad en un punto (los tres requisitos). Discontinuidad evitable, de salto (primera especie) y de segunda especie. Identificación gráfica y analítica.

### ANL11 — Continuidad en un intervalo; teorema de Bolzano
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL10
- **Desbloquea:** ANL30
- **Descripción:** Continuidad en intervalos abiertos y cerrados. Teorema de Bolzano: enunciado, demostración intuitiva y aplicaciones (existencia de raíces). Teorema del valor intermedio.

### ANL12 — Derivada: definición como límite
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL04
- **Desbloquea:** ANL13, ANL14
- **Descripción:** Tasa de variación media e instantánea. Derivada como límite del cociente incremental. Derivabilidad implica continuidad (recíproco falso). Función derivada.

### ANL13 — Interpretación geométrica de la derivada
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL12
- **Desbloquea:** ANL21
- **Descripción:** Pendiente de la recta tangente. Recta tangente en un punto. Puntos de tangente horizontal (extremos candidatos). Interpretación cinemática (velocidad instantánea).

### ANL14 — Derivadas de funciones elementales
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL12
- **Desbloquea:** ANL15, ANL17, ANL18, ANL31
- **Descripción:** Tabla de derivadas: constante, potencia, exponencial, logaritmo, funciones trigonométricas básicas. Demostración de los casos más importantes.

### ANL15 — Reglas de derivación: suma, producto, cociente
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL14
- **Desbloquea:** ANL16, ANL19, ANL20, ANL21, ANL22, ANL29, ANL30, ANL32
- **Descripción:** Linealidad de la derivada. Regla del producto (Leibniz). Regla del cociente. Aplicaciones a combinaciones de funciones elementales.

### ANL16 — Regla de la cadena
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL15
- **Desbloquea:** ANL19, ANL33
- **Descripción:** Derivada de la composición f∘g. Regla de la cadena en notación de Leibniz y de Lagrange. Aplicaciones: derivada de funciones compuestas con cualquier función interior.

### ANL17 — Derivada de funciones trigonométricas
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL14
- **Desbloquea:** ANL36
- **Descripción:** Derivadas de sen(x), cos(x), tan(x), arcsen(x), arccos(x), arctan(x). Demostración a partir de la definición para seno y coseno.

### ANL18 — Derivada de funciones logarítmicas y exponenciales
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL14, POL19
- **Desbloquea:** *(consolida ANL16 para funciones trascendentes)*
- **Descripción:** Derivada de ln(x), logₐ(x), eˣ y aˣ. Técnica de logaritmación implícita para f(x)^g(x). Derivada logarítmica.

### ANL19 — Derivación implícita
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL16
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Diferenciación de ambos miembros de una ecuación implícita F(x, y) = 0. Obtención de dy/dx. Aplicación a cónicas y otras curvas.

### ANL20 — Derivadas de orden superior
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL15
- **Desbloquea:** ANL24, ANL25
- **Descripción:** Derivada segunda, tercera y de orden n. Notación de Leibniz y de Lagrange. Ejemplos: polinomios, exponenciales, funciones trigonométricas.

### ANL21 — Recta tangente y normal a una curva
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL13, ANL15
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Ecuación de la recta tangente en un punto usando la derivada. Recta normal como perpendicular a la tangente. Aplicaciones a problemas geométricos.

### ANL22 — Monotonía: función creciente y decreciente
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL15
- **Desbloquea:** ANL23
- **Descripción:** Criterio de monotonía mediante el signo de f'. Determinación de intervalos de crecimiento y decrecimiento. Tabla de variación.

### ANL23 — Extremos relativos: criterio de la primera derivada
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL22
- **Desbloquea:** ANL24, ANL27, ANL28
- **Descripción:** Puntos críticos (f' = 0 o no existe). Criterio del cambio de signo de f'. Máximos y mínimos relativos. Extremos en los extremos del intervalo.

### ANL24 — Extremos relativos: criterio de la segunda derivada
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL20, ANL23
- **Desbloquea:** ANL28
- **Descripción:** Clasificación de puntos críticos mediante f''(x₀). Caso f''(x₀) = 0: indecisión y alternativas. Comparación con el criterio de la primera derivada.

### ANL25 — Concavidad, convexidad y puntos de inflexión
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL20
- **Desbloquea:** ANL27
- **Descripción:** Definición geométrica de concavidad y convexidad. Criterio mediante el signo de f''. Puntos de inflexión: condición necesaria (f'' = 0) y condición suficiente (cambio de signo de f'').

### ANL26 — Asíntotas verticales, horizontales y oblicuas
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL06, ANL05
- **Desbloquea:** ANL27
- **Descripción:** Asíntota vertical (límite infinito lateral). Asíntota horizontal (límite finito en ±∞). Asíntota oblicua: cálculo de m = lim f(x)/x y b = lim [f(x) − mx].

### ANL27 — Representación gráfica completa de funciones
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL23, ANL25, ANL26
- **Desbloquea:** ANL39
- **Descripción:** Protocolo completo: dominio, simetrías, periodicidad, discontinuidades, asíntotas, monotonía, extremos, concavidad e inflexiones. Esbozo final coherente.

### ANL28 — Optimización: problemas de máximos y mínimos
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL23, ANL24
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Modelización de problemas de optimización mediante una función objetivo. Determinación del dominio relevante. Localización y clasificación del extremo absoluto.

### ANL29 — Regla de L'Hôpital
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL07, ANL15
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Enunciado y condiciones de aplicación (0/0 y ∞/∞). Aplicación iterada. Reducción de otras indeterminaciones a 0/0 o ∞/∞.

### ANL30 — Teorema de Rolle y del valor medio
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL11, ANL15
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Enunciado e hipótesis del teorema de Rolle. Teorema del valor medio de Lagrange como generalización. Consecuencias y aplicaciones (acotación de funciones).

### ANL31 — Integral indefinida: concepto de primitiva
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL14
- **Desbloquea:** ANL32, ANL37
- **Descripción:** Definición de primitiva de una función. Familia de primitivas (constante de integración). Unicidad salvo constante. Relación entre derivación e integración.

### ANL32 — Integrales inmediatas
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL31, ANL15
- **Desbloquea:** ANL33, ANL34, ANL35, ANL36
- **Descripción:** Tabla de integrales inmediatas (inversas de las derivadas elementales). Linealidad de la integral. Estrategia de descomposición en sumas.

### ANL33 — Integración por sustitución (cambio de variable)
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL32, ANL16
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Principio del cambio de variable. Identificación de la sustitución apropiada. Cambio de la diferencial y los límites (en la integral definida). Casos típicos.

### ANL34 — Integración por partes
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL32, ANL15
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Fórmula ∫u dv = uv − ∫v du. Criterio ILATE para la elección de u. Aplicación iterada. Integrales cíclicas.

### ANL35 — Integración de funciones racionales
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL32, POL09
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** División previa si grado numerador ≥ denominador. Descomposición en fracciones simples (factores lineales y cuadráticos irreducibles). Integración de cada fracción.

### ANL36 — Integración de funciones trigonométricas
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL32, ANL17
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Integrales de potencias de seno y coseno. Sustitución universal t = tan(x/2). Reducción mediante identidades trigonométricas.

### ANL37 — Integral definida: definición de Riemann
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL31
- **Desbloquea:** ANL38, ANL41, EST24
- **Descripción:** Partición de un intervalo. Sumas de Riemann (inferior y superior). Definición de la integral definida como límite. Interpretación como área con signo.

### ANL38 — Teorema fundamental del cálculo
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL37
- **Desbloquea:** ANL39
- **Descripción:** Primera parte: la función integral es primitiva del integrando. Segunda parte (regla de Barrow): ∫ₐᵇ f(x)dx = F(b) − F(a). Aplicaciones al cálculo de integrales definidas.

### ANL39 — Cálculo de áreas entre curvas
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL38, ANL27
- **Desbloquea:** ANL40
- **Descripción:** Área bajo una curva y sobre el eje x. Área entre dos curvas (intersección y orden). Casos con cambio de orden. Área de recintos complejos por suma.

### ANL40 — Volumen de sólidos de revolución
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL39
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Método de los discos/arandelas: V = π∫[f(x)]²dx. Rotación alrededor del eje x y del eje y. Cálculo de volúmenes de sólidos generados por recintos entre curvas.

### ANL41 — Integrales impropias
- **Bloque:** Análisis Matemático
- **Prerrequisitos:** ANL37, ANL06
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Integrales con límites infinitos (∫ₐ^∞). Integrales de funciones con discontinuidades en el intervalo. Convergencia y divergencia. Criterios de comparación.

---

## Bloque EST — Estadística y Probabilidad
> 30 nodos | Color de referencia: `#BA7517`

### EST01 — Variable estadística: tipos y conceptos
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** ninguno *(nodo de entrada)*
- **Desbloquea:** EST02, EST07
- **Descripción:** Población y muestra. Variable cualitativa y cuantitativa (discreta y continua). Dato, frecuencia. Concepto de distribución de frecuencias.

### EST02 — Tablas de frecuencias
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST01
- **Desbloquea:** EST03, EST07
- **Descripción:** Frecuencia absoluta, relativa y acumulada. Construcción de tablas para datos agrupados y no agrupados. Marca de clase. Histograma y polígono de frecuencias.

### EST03 — Medidas de centralización: media, mediana, moda
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST02
- **Desbloquea:** EST04, EST05
- **Descripción:** Media aritmética (datos simples y agrupados). Mediana: procedimiento para datos agrupados. Moda y clase modal. Propiedades y comparación entre ellas.

### EST04 — Medidas de dispersión: varianza y desviación típica
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST03
- **Desbloquea:** EST08, EST21
- **Descripción:** Rango y recorrido intercuartílico. Varianza (fórmula de König). Desviación típica. Coeficiente de variación. Datos agrupados en intervalos.

### EST05 — Medidas de posición: cuartiles y percentiles
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST03
- **Desbloquea:** EST06
- **Descripción:** Cuartiles Q1, Q2, Q3: cálculo para datos simples y agrupados. Percentiles. Recorrido intercuartílico. Datos atípicos.

### EST06 — Diagramas de caja (box plot)
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST05
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Construcción e interpretación del diagrama de caja. Identificación de la mediana, cuartiles y bigotes. Representación de valores atípicos. Comparación entre distribuciones.

### EST07 — Estadística bidimensional: tabla de contingencia
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST02
- **Desbloquea:** EST08
- **Descripción:** Variable bidimensional (X, Y). Tabla de frecuencias bidimensional. Distribuciones marginales y condicionadas. Nube de puntos (diagrama de dispersión).

### EST08 — Covarianza y correlación lineal
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST04, EST07
- **Desbloquea:** EST09, EST10
- **Descripción:** Covarianza: definición e interpretación del signo. Coeficiente de correlación de Pearson (introducción). Relación entre covarianza, dispersiones y correlación.

### EST09 — Recta de regresión
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST08
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Recta de regresión de Y sobre X y de X sobre Y. Mínimos cuadrados. Coeficientes a y b. Predicción e interpolación. Limitaciones de la extrapolación.

### EST10 — Coeficiente de correlación de Pearson
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST08
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Fórmula completa de r. Interpretación: [-1, 1], signo y magnitud. Correlación perfecta, nula y negativa. Distinción entre correlación y causalidad.

### EST11 — Experimento aleatorio y espacio muestral
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** ninguno *(nodo de entrada)*
- **Desbloquea:** EST12, EST19
- **Descripción:** Experimento aleatorio. Espacio muestral (finito, infinito numerable, continuo). Suceso elemental, suceso compuesto. Operaciones con sucesos (unión, intersección, complementario).

### EST12 — Definición clásica y frecuencial de probabilidad
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST11
- **Desbloquea:** EST13
- **Descripción:** Definición clásica de Laplace (equiprobabilidad). Definición frecuencial (límite de frecuencia relativa). Limitaciones de cada definición.

### EST13 — Probabilidad: axiomas y propiedades
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST12
- **Desbloquea:** EST14, EST15
- **Descripción:** Axiomas de Kolmogórov. Propiedades deducidas: P(∅) = 0, P(Aᶜ) = 1 − P(A), P(A∪B) = P(A) + P(B) − P(A∩B). Probabilidad de la unión de sucesos incompatibles.

### EST14 — Regla de Laplace
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST12, POL23 *(dependencia cruzada con Álgebra Elemental)*
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Aplicación de la regla de Laplace en problemas de conteo. Combinación con permutaciones y combinaciones. Problemas de urnas, cartas, dados.

### EST15 — Probabilidad condicionada
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST13
- **Desbloquea:** EST16, EST17
- **Descripción:** Definición P(A|B) = P(A∩B)/P(B). Regla de la multiplicación: P(A∩B) = P(B)·P(A|B). Tablas de doble entrada y diagramas en árbol.

### EST16 — Independencia de sucesos
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST15
- **Desbloquea:** *(contribuye a EST22)*
- **Descripción:** Definición de sucesos independientes: P(A∩B) = P(A)·P(B). Equivalencia con P(A|B) = P(A). Independencia mutua de varios sucesos.

### EST17 — Teorema de la probabilidad total
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST15
- **Desbloquea:** EST18
- **Descripción:** Sistema completo de sucesos (partición del espacio muestral). Enunciado y demostración del teorema. Aplicaciones con diagrama en árbol.

### EST18 — Teorema de Bayes
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST17
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Enunciado del teorema de Bayes. Probabilidad a posteriori. Aplicaciones: diagnóstico (falsos positivos/negativos), pruebas de calidad. Interpretación de los resultados.

### EST19 — Variable aleatoria discreta
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST11
- **Desbloquea:** EST20
- **Descripción:** Definición de variable aleatoria discreta. Función de probabilidad (o masa de probabilidad). Condiciones de una distribución de probabilidad válida.

### EST20 — Función de masa de probabilidad y función de distribución acumulada
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST19
- **Desbloquea:** EST21
- **Descripción:** Tabla de distribución de probabilidad. Función de distribución F(x) = P(X ≤ x). Propiedades de F: no decreciente, continua por la derecha, límites en ±∞.

### EST21 — Esperanza y varianza de variable aleatoria discreta
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST20, EST04
- **Desbloquea:** EST22, EST23
- **Descripción:** Esperanza (valor esperado) E(X) = Σxᵢ·pᵢ. Varianza Var(X) = E(X²) − [E(X)]². Desviación típica. Propiedades de E y Var ante transformaciones lineales.

### EST22 — Distribución binomial B(n, p)
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST21, POL23
- **Desbloquea:** EST29
- **Descripción:** Experimento de Bernoulli. Distribución binomial: condiciones (n ensayos independientes, p constante). Función de masa P(X = k) = C(n,k)·pᵏ·(1-p)^(n-k). Media y varianza.

### EST23 — Distribución de Poisson
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST21
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Distribución de Poisson como límite de la binomial. Parámetro λ. Función de masa. Media y varianza (ambas iguales a λ). Aplicaciones a fenómenos de recuento.

### EST24 — Variable aleatoria continua y función de densidad
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST19, ANL37 *(dependencia cruzada con Análisis)*
- **Desbloquea:** EST25
- **Descripción:** Variable aleatoria continua: P(X = x) = 0. Función de densidad f(x): condiciones (f ≥ 0, integral = 1). Cálculo de probabilidades como integral. Función de distribución acumulada.

### EST25 — Esperanza y varianza de variable continua
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST24, EST21
- **Desbloquea:** EST26
- **Descripción:** E(X) = ∫x·f(x)dx. Var(X) = E(X²) − [E(X)]². Cálculo en distribuciones continuas simples. Propiedades de linealidad de la esperanza.

### EST26 — Distribución normal N(μ, σ): características
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST25
- **Desbloquea:** EST27
- **Descripción:** Función de densidad de la distribución normal (campana de Gauss). Parámetros μ y σ. Propiedades: simetría, unimodal, regla 68-95-99.7. Normal estándar N(0,1).

### EST27 — Tipificación y tabla de la normal estándar
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST26
- **Desbloquea:** EST28
- **Descripción:** Transformación Z = (X − μ)/σ. Uso de la tabla de la distribución normal estándar (Φ). Lectura directa e inversa de la tabla. Cálculo de cuantiles.

### EST28 — Cálculo de probabilidades con la distribución normal
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST27
- **Desbloquea:** EST29, EST30
- **Descripción:** Cálculo de P(X < a), P(X > a), P(a < X < b) mediante tipificación. Simetría de la normal estándar. Determinación de intervalos dada una probabilidad.

### EST29 — Aproximación de la binomial a la normal
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST22, EST28
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Condiciones de la aproximación (n grande, np y n(1-p) ≥ 5). Corrección de continuidad. Proceso de tipificación y uso de la tabla normal.

### EST30 — Intervalos de confianza para la media
- **Bloque:** Estadística y Probabilidad
- **Prerrequisitos:** EST28, ANL01
- **Desbloquea:** *(nodo terminal)*
- **Descripción:** Concepto de intervalo de confianza. Nivel de confianza y nivel de significación. IC para la media con σ conocida (normal). Error máximo admisible y tamaño muestral mínimo.

---

## Resumen de dependencias cruzadas entre bloques

| Nodo destino | Requiere nodo de otro bloque | Motivo |
|---|---|---|
| GEO06 | ALG06 | El producto vectorial se calcula como un determinante 3×3 |
| GEO12, GEO13, GEO14, GEO15 | ALG13 | La posición relativa se analiza mediante teoría de sistemas |
| GEO15 | ALG17 | Requiere discusión paramétrica de sistemas |
| GEO27 | POL11 | La ecuación de la circunferencia lleva a una ecuación de 2º grado |
| ANL03 | POL04 | Los límites se calculan sobre funciones polinómicas |
| ANL07 | POL06 | La resolución de 0/0 requiere factorización de polinomios |
| ANL09 | POL19 | La indeterminación 1^∞ usa logaritmos |
| ANL18 | POL19 | Las derivadas logarítmicas usan propiedades de logaritmos |
| ANL35 | POL09 | La integración de racionales usa fracciones algebraicas |
| EST14 | POL23 | La regla de Laplace usa combinatoria para el conteo |
| EST22 | POL23 | La binomial usa combinaciones C(n,k) |
| EST24 | ANL37 | La probabilidad de variable continua requiere la integral de Riemann |

---

## Nodos de entrada (sin prerrequisitos) — 8 nodos raíz

| ID | Nombre | Bloque |
|---|---|---|
| POL01 | Números reales y propiedades | Álgebra Elemental |
| ALG01 | Concepto de matriz y tipos | Álgebra Lineal |
| EST01 | Variable estadística: tipos y conceptos | Estadística y Probabilidad |
| EST11 | Experimento aleatorio y espacio muestral | Estadística y Probabilidad |

Los siguientes nodos son de entrada efectiva (su único prerrequisito es POL01, que es el nodo raíz más básico):

| ID | Nombre | Bloque |
|---|---|---|
| GEO01 | Vectores en el plano | Geometría Analítica |
| ANL01 | Sucesiones numéricas | Análisis Matemático |
| ALG12 | Sistemas de ecuaciones lineales | Álgebra Lineal |
| ALG18 | Espacios vectoriales: axiomas | Álgebra Lineal |

---

*Documento generado como entregable de la Fase 1 del sistema de Mastery Learning PAU/EBAU.*  
*Versión 1.0 — lista para usarse como base del grafo dirigido de la Fase 2.*
