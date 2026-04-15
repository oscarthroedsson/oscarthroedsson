export function randomNumber(min, max) {
  const range = max - min + 1;
  const maxUint32 = 4294967295; // Det största värdet en 32-bitars integer kan ha
  const limit = maxUint32 - (maxUint32 % range);

  let randomNumber;
  do {
    // Skapa en array med ett 32-bitars osignerat heltal
    const buffer = new Uint32Array(1);
    window.crypto.getRandomValues(buffer);
    randomNumber = buffer[0];
  } while (randomNumber >= limit); // Förhindrar "modulo bias" för perfekt jämn fördelning

  return min + (randomNumber % range);
}
