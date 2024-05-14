var quotesArr = 
[
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    "If you can't explain it to a six year old, you don't understand it yourself.", 
    "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
    "Logic will get you from A to Z; imagination will get you everywhere.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.", "Anyone who has never made a mistake has never tried anything new.",
    "I speak to everyone in the same way, whether he is the garbage man or the president of the university.",
    "When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity.", 
    "Never memorize something that you can look up.", "A clever person solves a problem. A wise person avoids it.", 
    "Science without religion is lame, religion without science is blind.", "Reality is merely an illusion, albeit a very persistent one.", 
    "If we knew what it was we were doing, it would not be called research, would it?"
 ];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotesArr.length));
    document.getElementById('quote').innerHTML = quotesArr[randomNumber];
}

