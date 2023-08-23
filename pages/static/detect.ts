export default class detect {
  containsArabicCharacters(text: string): boolean {
    // Regular expression to match Arabic characters
    const arabicRegex = /[\u0600-\u06FF]/;
    return arabicRegex.test(text);
  }

  containsEnglishCharacters(text: string): boolean {
    // Regular expression to match English characters
    const englishRegex = /[a-zA-Z]/;
    return englishRegex.test(text);
  }
}
