export default function healthStatus(character) {
  let result = 'not defined';
  if (character.health < 15) {
    result = 'critical';
  } else if (character.health >= 15 && character.health <= 50) {
    result = 'wounded';
  } else if (character.health > 50) {
    result = 'healthy';
  }
  return result;
}
