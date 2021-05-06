function say(text) {
    return (newText) => `${text}${newText}`; 
}

module.exports = {
    say
}