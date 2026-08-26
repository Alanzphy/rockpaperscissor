# Piedra, Papel o Tijeras (PPT)

App en React Native (Expo) para jugar Piedra, Papel o Tijeras contra la computadora, usando el patrón MVC.

## Cómo correrla

```bash
npm install
npx expo start
```

Escaneá el QR con la app **Expo Go** en tu celular.

## Estructura (MVC)

- **Model** — `src/models/GameModel.js`: lógica del juego (jugada random de la PC, quién gana, marcador).
- **View** — `src/views/`: componentes visuales (header, marcador, botones, resultado).
- **Controller** — `App.js`: conecta Model y View.
