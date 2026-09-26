/**
 * Corre la app (build web estático servido en APP_URL) con Chromium headless
 * y toma capturas de pantalla como evidencia de los casos de prueba de sistema
 * documentados en "Pruebas de software.md".
 *
 * Uso:
 *   npx expo export --platform web
 *   npx serve dist -l 5555 &
 *   node scripts/capture-system-tests.js
 */
const { chromium } = require('playwright');
const path = require('path');

const APP_URL = process.env.APP_URL || 'http://localhost:5555';
const OUT_DIR = path.join(__dirname, '..', 'assets', 'pruebas-sistema');

async function readState(page) {
  const player = await page.getByTestId('score-player').innerText();
  const computer = await page.getByTestId('score-computer').innerText();
  const result = await page.getByTestId('result-text').innerText();
  return { player: Number(player), computer: Number(computer), result };
}

async function shoot(page, name) {
  await page.screenshot({ path: path.join(OUT_DIR, name) });
  console.log(`captura: ${name}`);
}

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 420, height: 800 } });
  await page.goto(APP_URL);
  await page.getByTestId('score-player').waitFor();

  // CP-01: estado inicial
  const initial = await readState(page);
  console.log('CP-01 estado inicial:', initial);
  await shoot(page, 'cp-01-estado-inicial.png');

  // CP-02 / CP-03 / CP-04: forzar al menos una ocurrencia de cada resultado
  const seen = new Set();
  let rounds = 0;
  const shotFor = {
    JUGADOR: 'cp-02-jugador-gana.png',
    COMPUTADORA: 'cp-03-computadora-gana.png',
    EMPATE: 'cp-04-empate.png',
  };

  while (seen.size < 3 && rounds < 60) {
    await page.getByTestId('choice-PIEDRA').click();
    rounds += 1;
    const state = await readState(page);
    const outcome = state.result.replace('R: ', '');
    if (!seen.has(outcome) && shotFor[outcome]) {
      seen.add(outcome);
      console.log(`CP (${outcome}) en la ronda ${rounds}:`, state);
      await shoot(page, shotFor[outcome]);
    }
  }
  if (seen.size < 3) {
    console.warn('No se lograron ver los 3 resultados posibles en 60 rondas.');
  }

  // CP-05: acumulación de marcador tras varias rondas
  for (let i = 0; i < 5; i += 1) {
    await page.getByTestId('choice-PIEDRA').click();
    rounds += 1;
  }
  const accumulated = await readState(page);
  console.log(`CP-05 tras ${rounds} rondas:`, accumulated);
  await shoot(page, 'cp-05-marcador-acumulado.png');

  // CP-06: cambiar de elección resalta solo la nueva selección
  await page.getByTestId('choice-PAPEL').click();
  await shoot(page, 'cp-06a-selecciona-papel.png');
  await page.getByTestId('choice-TIJERAS').click();
  await shoot(page, 'cp-06b-selecciona-tijeras.png');

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
