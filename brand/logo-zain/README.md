# Logo Zain

Versión del logo de PEB aprobada el 18-10-2026 y guardada aquí para poder recuperarla idéntica. Fue el logo de la web en el commit `29826aa` («Épsilon del logo en naranja»). Queda como **logo definitivo** si no se elige otra prueba.

**Para volver a ponerlo en la web:** copia `logo.svg` y `favicon.svg` en `public/`, y `Logo.jsx` en `src/components/`. En `src/styles.css`, `.logo` lleva `--logo-accent: #e8501f` y `.footer .logo` lleva `--logo-accent: var(--accent)`.

## Cómo es

- Las letras **P**, **ε** y **B** van en una línea, dentro de un bloque negro, cada una en su módulo.
- Las letras son monolínea de trazo fino y constante. La E se dibuja como la épsilon griega (ε): dos semicírculos abiertos a la derecha, con terminales rectos.
- La P y la B son blancas. La ε y las dos líneas de módulo son naranjas.

## Medidas exactas

| Elemento | Valor |
| --- | --- |
| Lienzo | 100 × 40 |
| Bloque | `#151515` |
| P y B | trazo `#ffffff`, grosor 2.2, uniones en inglete |
| ε | trazo `#e8501f`, grosor 2.2 |
| Líneas de módulo | `M33.33 8V32M66.67 8V32`, trazo `#e8501f`, grosor 0.7 |
| Altura de las letras | de y = 12 a y = 28 (centradas en el bloque) |
| Versión invertida (pie de página) | bloque `#ffffff`, P y B `#151515`, naranja `#d9411e` |
| Favicon | lienzo 48 × 48, bloque `#151515`, grosor 2.4, sin líneas de módulo |

Trazados de las letras (lienzo 100 × 40):

```text
P y B: M12.17 28V12H16.77A4 4 0 0 1 16.77 20H12.17M78.5 19.6H83.5A4.2 4.2 0 0 1 83.5 28H78.5V12H82.9A3.8 3.8 0 0 1 82.9 19.6H78.5
ε:     M54.4 12H49.8A3.8 3.8 0 0 0 49.8 19.6H50.2A4.2 4.2 0 0 0 50.2 28H54.8
```

## Archivos

| Archivo | Uso |
| --- | --- |
| `logo.svg` | Logo sobre bloque negro |
| `logo-inverso.svg` | Logo sobre bloque blanco (para fondos oscuros) |
| `favicon.svg` | Versión cuadrada |
| `Logo.jsx` | Componente de React tal como estaba en la web |
