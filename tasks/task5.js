function wordSearch(word, text) {
    const searchRegex = new RegExp(word, 'i');

    return searchRegex.test(text);
};

module.exports = {
    wordSearch
}