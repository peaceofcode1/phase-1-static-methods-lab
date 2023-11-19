class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');
    return words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    }).join(' ');
  }
}

// Test cases
console.log(Formatter.capitalize('hello')); // Output: 'Hello'
console.log(Formatter.sanitize('hello#world')); // Output: 'helloworld'
console.log(Formatter.titleize('the lord of the rings')); // Output: 'The Lord of the Rings'
