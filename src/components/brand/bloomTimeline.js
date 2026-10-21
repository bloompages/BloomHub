/*
 * Linha do tempo do desenho da flor (igual ao final do reels da BloomHub):
 * o miolo aparece, cada pétala é contornada em sentido horário, a bolinha
 * da ponta "estoura" e, no modo automático, a flor se apaga e redesenha.
 * Usada pela flor SVG (BloomLogo) e pela flor 3D (Flower3D). Tempos em segundos.
 */

export const CYCLE = 10;
export const ERASE = { start: 8.2, dur: 0.7 };

export const centerStep = { start: 0, dur: 0.4 };

export const petalStep = (index) => ({ start: 0.35 + index * 0.38, dur: 0.75 });

export const stemStep = (index) => ({
  start: petalStep(index).start + 0.6,
  dur: 0.18,
});

export const dotStep = (index) => ({
  start: petalStep(index).start + 0.72,
  dur: 0.35,
});

const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

/** Progresso (0 a 1) de um passo no instante `t` do ciclo automático. */
export function progressAt(t, { start, dur }) {
  const time = ((t % CYCLE) + CYCLE) % CYCLE;
  const eraseEnd = ERASE.start + ERASE.dur;

  if (time < start) return 0;
  if (time < start + dur) return easeInOut((time - start) / dur);
  if (time < ERASE.start) return 1;
  if (time < eraseEnd) return 1 - easeInOut((time - ERASE.start) / ERASE.dur);
  return 0;
}

/** Escala da bolinha: cresce além do tamanho ("estoura") e assenta em 1. */
export function popAt(t, { start, dur }) {
  const time = ((t % CYCLE) + CYCLE) % CYCLE;
  const peak = start + dur * 0.6;
  const end = start + dur;

  if (time < start) return 0;
  if (time < peak) return 1.35 * easeInOut((time - start) / (peak - start));
  if (time < end) return 1.35 - 0.35 * easeInOut((time - peak) / (end - peak));
  if (time < ERASE.start) return 1;
  if (time < ERASE.start + ERASE.dur) {
    return 1 - easeInOut((time - ERASE.start) / ERASE.dur);
  }
  return 0;
}

/** Keyframes do framer-motion para um traço (pathLength) em loop. */
export function strokeKeyframes({ start, dur }) {
  return {
    values: [0, 0, 1, 1, 0, 0],
    times: [0, start, start + dur, ERASE.start, ERASE.start + ERASE.dur, CYCLE].map(
      (seconds) => seconds / CYCLE,
    ),
  };
}

/** Keyframes do framer-motion para uma bolinha (scale) em loop. */
export function popKeyframes({ start, dur }) {
  return {
    values: [0, 0, 1.35, 1, 1, 0, 0],
    times: [
      0,
      start,
      start + dur * 0.6,
      start + dur,
      ERASE.start,
      ERASE.start + ERASE.dur,
      CYCLE,
    ].map((seconds) => seconds / CYCLE),
  };
}
