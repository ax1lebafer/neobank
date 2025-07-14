export const REGULAR_ONLY_LETTER = /^[A-Za-zА-Яа-яЁё]+$/;

export const digitsNumberReg = (digits: number): RegExp => {
  return new RegExp(`^\\d{${digits}}$`);
};
