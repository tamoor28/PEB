# Logo Tamoor

Versión del logo de PEB aprobada el 18-10-2026 y guardada aquí para poder recuperarla idéntica. Fue el logo de la web en el commit `d345e94` («Logo P·E·β de trazo fino con acento naranja»).

**Para volver a ponerlo en la web:** copia `logo.svg` y `favicon.svg` en `public/`, y `Logo.jsx` en `src/components/`. En `src/styles.css`, `.logo` lleva `--logo-accent: #e8501f` y `.footer .logo` lleva `--logo-accent: var(--accent)`.

## Cómo es

- Las letras **P**, **E** y **β** van en una línea, dentro de un bloque negro, cada una en su módulo.
- Las letras son monolínea de trazo fino y constante. La B se dibuja como la beta griega (β): esquina superior izquierda redondeada y palo que baja por debajo de la línea.
- La P y la E son blancas. La β y las dos líneas de módulo son naranjas.

## Medidas exactas

| Elemento | Valor |
| --- | --- |
| Lienzo | 100 × 40 |
| Bloque | `#151515` |
| P y E | trazo `#ffffff`, grosor 2.2, uniones en inglete |
| β | trazo `#e8501f`, grosor 2.2 |
| Líneas de módulo | `M33.33 9V33M66.67 9V33`, trazo `#e8501f`, grosor 0.7 |
| Altura de las letras | de y = 11 a y = 27; la β baja hasta y = 33.5 |
| Versión invertida (pie de página) | bloque `#ffffff`, P y E `#151515`, naranja `#d9411e` |
| Favicon | lienzo 48 × 48, bloque `#151515`, grosor 2.4, sin líneas de módulo |

Trazados de las letras (lienzo 100 × 40):

```text
P y E: M12.17 27V11H16.77A4 4 0 0 1 16.77 19H12.17M54.6 11H46V27H54.6M46 19H53.2
β:     M78.6 33.5V15A4 4 0 0 1 82.6 11H83A3.8 3.8 0 0 1 83 18.6H81.2M81.2 18.6H83.6A4.2 4.2 0 0 1 83.6 27H78.6
```

## Archivos

| Archivo | Uso |
| --- | --- |
| `logo.svg` | Logo sobre bloque negro |
| `logo-inverso.svg` | Logo sobre bloque blanco (para fondos oscuros) |
| `favicon.svg` | Versión cuadrada |
| `Logo.jsx` | Componente de React tal como estaba en la web |
