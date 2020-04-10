class carousel{
/**
 * @param {HTMLElement} element
 * @param {object} options
 * @param {object} options.slidesToscroll nombre d'element a faire defiler
 * @param {object} options.slidesVisible nombre d'element visible dans slide
 */
 
    constructor (element,option ={}){
 this.element = element
 this.options = Object.assign({},{
    slidesToscroll:1,
    slidesVisible:1 
 },options)
debugger
    }
}

document.addEventListener('DOMContentLoaded', function() {
new carousel(document.querySelector('#carousel'),{
slidesToscroll:1,
slidesVisible:1
})
})