# Piedra, Papel o Tijeras (PPT)

App en React Native (Expo) para jugar Piedra, Papel o Tijeras contra la computadora, usando el patrón MVC.

## Cómo correrla

```bash
npm install
npx expo start
```

Escaneá el QR con la app **Expo Go** en tu celular, o corré `npx expo start --web` para abrirla en el navegador.

## Estructura (MVC)

- **Model**:
  - `src/models/vo/Choice.js`: value object de una elección (PIEDRA/PAPEL/TIJERAS) y a cuál le gana.
  - `src/models/vo/RoundResult.js`: value object del resultado de una ronda (quién ganó).
  - `src/models/managers/GameManager.js`: orquesta una jugada (elección random de la PC, marcador).
- **View** — `src/views/`: componentes visuales (header, marcador, botones, resultado).
- **Controller** — `App.js` + `src/hooks/useGame.js`: el hook conecta Model y View; `App.js` solo lo consume.

## Tests

```bash
npm test
npm test -- --coverage   # incluye el % de cobertura
```

Suite con Jest (`jest-expo` + `@testing-library/react-native`), un archivo `*.test.js` por cada pieza del modelo y del hook:

- `src/models/vo/Choice.test.js` — valida `Choice` (valores inválidos, `random()`, `beats()`/`equals()`).
- `src/models/vo/RoundResult.test.js` — resuelve empate, victoria del jugador y victoria de la computadora.
- `src/models/managers/GameManager.test.js` — suma de puntos, empate sin puntos, acumulación del marcador.
- `src/hooks/useGame.test.js` — estado inicial del hook y actualización tras `handleSelect`.

## Casos de prueba de sistema

`scripts/capture-system-tests.js` corre la app real (build web de Expo) con Playwright headless y genera en `assets/pruebas-sistema/` las capturas de los casos de prueba de sistema

```bash
npx expo export --platform web
npx serve dist -l 5555 &
sleep 2
node scripts/capture-system-tests.js
```

El `sleep 2` es necesario para darle tiempo al servidor estático a levantar el puerto 5555 antes de que el script intente conectarse.
