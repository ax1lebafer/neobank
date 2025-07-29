export const formatDivisionCode = (raw: string) => {
  const digits = raw.replace(/\D/g, '').slice(0, 6);
  if (digits.length <= 3) return digits;
  return `${digits.slice(0, 3)}-${digits.slice(3)}`;
};
