export const reverseNumber = (number) => 1 / number;

export const replaceComma = (number) => number.replace(',', '.');

export const replaceDot = (number) => String(number).replace('.', ',');

export const getZeroForDate = (date) => String(date).length === 1 ? '0' : '';

export const formateDateToDefault = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${date.getFullYear()}-${getZeroForDate(month)}${date.getMonth() + 1}-${getZeroForDate(day)}${day}`
}

export const formateDate = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${date.getDate()}.${getZeroForDate(month)}${date.getMonth() + 1}.${getZeroForDate(day)}${day}`
}
