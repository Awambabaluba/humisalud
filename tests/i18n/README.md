# Pruebas i18n

Verifica que la versión ES (`/`) y EN (`/en`) no mezclan textos y que el
toggle de idioma navega al equivalente.

## Ejecutar

Con el dev server arriba en `localhost:8080`:

```bash
python3 tests/i18n/i18n.spec.py
```

Cubre:
- Marcadores ES no aparecen en `/en` (header, footer, hero, CTAs).
- Marcadores EN no aparecen en `/`.
- `<html lang>` cambia entre `es` y `en`.
- Toggle ES↔EN navega a la URL equivalente.
- Footer de `/en` libre de español.
