
export const  padTo2Digits = (num: string) => {
  return num.toString().padStart(2, '0');
}

export const formatDate = (date: any) => {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

export function currencyMask(value: string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  const formatAmount = value.replace(/[^\d\,.]/g, "").replace(",", ".")
  value = `R$ ${value.replace(/(?=(\d{3})+(\D))\B/g, ".")}`;

  return {value, formatAmount};
}