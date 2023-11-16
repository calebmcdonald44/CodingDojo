var allLikes = [9, 12, 9];
function increaseLikes(element, idx) {
    var likeText = document.querySelector(element);
    newLike = allLikes[idx] + 1;
    allLikes[idx] += 1;
    likeText.innerText = newLike;
}