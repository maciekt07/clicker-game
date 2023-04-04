interface NumberFormatter {
  (num: number, decimalPlaces?: number): string;
}
/**
 * Formats a number as a string with a specified number of decimal places.
 *
 * @param {number} num The number to format.
 * @param {number} [decimalPlaces=1] The number of decimal places to include in the formatted string. Defaults to 1.
 * @returns {string} The formatted number as a string.
 */
export const formatNumber: NumberFormatter = (num, decimalPlaces = 1) => {
  const roundedNum = num.toFixed(decimalPlaces);
  const numString = roundedNum.toString();
  const numArray = numString.split(".");
  const integerPart = numArray[0];
  const decimalPart = numArray[1] ? `.${numArray[1]}` : "";
  let formattedNum = "";
  for (let i = integerPart.length - 1; i >= 0; i--) {
    const digit = integerPart[i];
    if ((integerPart.length - i) % 3 === 0 && i !== 0) {
      formattedNum = ` ${digit}${formattedNum}`;
    } else {
      formattedNum = `${digit}${formattedNum}`;
    }
  }

  return `${formattedNum}${decimalPart}`;
};
/**
 * Formats a number using compact notation.
 *
 * @param {number} num The number to format.
 * @returns {string} The formatted number as a string.
 */
export const compactFormat = (num: number) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(num);
};
