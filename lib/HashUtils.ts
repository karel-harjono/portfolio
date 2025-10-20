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
   * 1 YKOE
   * 2 CUUS
   * 3 EMGM
   * 4 GAGO
   * 5 KSAY
   * 6 MYWE
   * 7 SSCQ
   * 8 UIYM
   * 9 WIGK
   * 10 YUAI
   * 11 GAMM
   * 12 KYGU
   * 13 MOWO
   * 14 QASA
   * 15 EEMU
   * 16 SMYS
   * 17 CMGW
   * 18 QWIQ
   * 19 AWCC
   * 20 WGGW
   * 21 QUSY
   * 22 WIKU
   * 23 EOKI
   * 24 CWQA
   * 25 OWWO
   * 26 CISI
   * 27 YCQI
   * 28 QCEG
   * 29 UWWA
   * 30 EECY
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
