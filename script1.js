document.addEventListener('DOMContentLoaded',function(){
    const selectorItems = document.querySelectorAll('.selector-item')
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

    document.getElementById('button').addEventListener('click',function(){
        target.scrollIntoView({ behavior: 'smooth', block:'start'})
    })
})
