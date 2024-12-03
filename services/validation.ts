export function validateText(text: string) {
  const trimmedText = text.trim();

  if (trimmedText.length === 0) {
    return false;
  }

  return true;
}
