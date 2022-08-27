
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