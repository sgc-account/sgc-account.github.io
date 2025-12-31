document.addEventListener('DOMContentLoaded',function(){
    const selectorItems = document.querySelectorAll('.selector-item')
    const selectorItems1 = document.querySelectorAll('.selector-item1')

    const sidebars = document.querySelectorAll('.sidebar')
    const target = document.getElementById('container')
    
    document.getElementById('HTML').classList.add('active')
    document.getElementById('aside').classList.add('active')
    document.getElementById('HTML+').classList.add('active')

    selectorItems.forEach(i => {
        i.addEventListener('click',function(){
            selectorItems.forEach(i => {i.classList.remove('active')})
            this.classList.add('active');

            sidebars.forEach(i => {i.classList.remove('active')})
            document.getElementById('aside').classList.add('active')

            const id = this.getAttribute('id')
            document.getElementById(`${id}+`).classList.add('active')

            target.scrollIntoView({ behavior: 'smooth', block:'start'})
        })
    })

    selectorItems1.forEach(i => {
        i.addEventListener('click',function(){
            selectorItems1.forEach(i => {i.classList.remove('active')})
            this.classList.add('active');
        })
    })

    document.getElementById('button').addEventListener('click',function(){
        target.scrollIntoView({ behavior: 'smooth', block:'start'})
    })
})