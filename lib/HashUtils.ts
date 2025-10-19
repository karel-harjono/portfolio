/**
 * Small utility hash helpers for the project.
 *
 */
export default class HashUtils {
  /**
   * Generate deterministic 4-character alphanumeric ID from an number value.
   * Accepts number or string. The implementation keeps all math in 32-bit
   * unsigned integer space so results are deterministic across runs.
   *
   * Examples:
   *   HashUtils.hashOrderId(1) // -> e.g. "YKOE"
   *   HashUtils.hashOrderId(2) // -> e.g. "CUUS"
   */
  static hashId(order: number): string {
    let seed = (order * 2654435761) % 2 ** 32; // Knuth multiplicative hash
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let id = "";

    for (let i = 0; i < 4; i++) {
      seed = ((seed ^ (seed >> 13)) * 1274126177) % 2 ** 32;
      let index = seed % chars.length;
      id += chars[index];
    }

    return id;
  }
}
