const likeAnim = (function() {
    let anim = (className) => {
        let likeButtons = document.getElementsByClassName('js-likeButton');
        let likeButtonsArray = [].slice.call(likeButtons);
        likeButtonsArray.map((item) => item.onclick = () => {
            let like = item.querySelectorAll('.js-like');
            let classes = like[0].classList;
            classes.toggle(className);
        })
    }
    
    return {
        anim: function(className) {
            anim(className);
        }
    }
})();

module.exports = likeAnim;