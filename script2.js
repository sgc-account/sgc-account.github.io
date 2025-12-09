document.addEventListener('DOMContentLoaded',function(){
    const selectorItems1 = document.querySelectorAll('.selector-item1')
    const url = new URLSearchParams(window.location.search)
    const code = url.get('code')
    const number = url.get('number')
    const target = document.getElementById('container')
    
    document.getElementById(`${code}${number}`).classList.remove('clear')
    document.getElementById(`${code}${number}+`).classList.add('active')
    document.getElementById(`${code}${number}++`).classList.add('active')
    document.getElementById(`${code}${number}1`).classList.add('active')

    selectorItems1.forEach(i => {
        i.addEventListener('click',function(){
            selectorItems1.forEach(i => {i.classList.remove('active')})
            this.classList.add('active');

            const id = this.getAttribute('id')
            document.getElementById(`${id}+`).scrollIntoView({ behavior: 'smooth', block:'start'})
        })
    })

    document.getElementById('button').addEventListener('click',function(){
        target.scrollIntoView({ behavior: 'smooth', block:'start'})
        selectorItems1.forEach(i => {i.classList.remove('active')})
        document.getElementById(`${code}${number}1`).classList.add('active')
    })

})