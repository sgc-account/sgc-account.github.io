const lis1 = ['HTML1','HTML2','HTML3','HTML4','HTML5','HTML6']
const lis2 = ['CSS1','CSS2','CSS3','CSS4','CSS5','CSS6','CSS7']
const lis3 = ['JavaScript1','JavaScript2','JavaScript3','JavaScript4','JavaScript5','JavaScript6']
const lis4 = ['HTML','CSS','JavaScript']

const len1 = lis1.length
const len2 = lis2.length
const len3 = lis3.length
var id = 'HTML'
var index = 0

document.addEventListener('DOMContentLoaded',function(){
    const selectorItems = document.querySelectorAll('.selector-item')
    const selectorItems1 = document.querySelectorAll('.selector-item1')
    const sidebars = document.querySelectorAll('.sidebar')

    const h1 = document.querySelectorAll('h1')
    const subtitle = document.querySelectorAll('.subtitle')

    const main = document.querySelectorAll('main')
    const sidebarmore = document.querySelectorAll('.sidebar-more')
    const selectorItems2 = document.querySelectorAll('.selector-item2')

    const target = document.getElementById('container')
    
    document.getElementById('HTML').classList.add('active')
    document.getElementById('aside').classList.add('active')
    document.getElementById('first-aside').classList.add('active')
    document.getElementById('h').classList.add('h1-active')
    document.getElementById('p').classList.add('active')

    selectorItems.forEach(i => {
        i.addEventListener('click',function(){
            selectorItems.forEach(i => {i.classList.remove('active')})
            this.classList.add('active');
            selectorItems1.forEach(i => {i.classList.remove('active')})

            sidebars.forEach(i => {i.classList.remove('active')})
            document.getElementById('aside').classList.add('active')

            id = this.getAttribute('id')
            target.scrollIntoView({ behavior: 'smooth', block:'start'})

            sidebars[lis4.indexOf(id)+1].classList.add('active')
        });
    });

    selectorItems1.forEach(i => {
        i.addEventListener('click',function(){
            selectorItems1.forEach(i => {i.classList.remove('active')})
            this.classList.add('active')

            const value = this.getAttribute('data-target')
            if (value == 'M')
            {
                sidebars.forEach(i => {i.classList.remove('active')})
                h1.forEach(i => {i.classList.remove('h1-active')})
                subtitle.forEach(i => {i.classList.remove('active')})
                document.getElementById('button2').classList.add('active')

                const value = this.getAttribute('id')
                index = lis1.indexOf(value)

                if (index+1)  
                {
                    h1[index+1].classList.add('h1-active')
                    subtitle[index+1].classList.add('active')
                    main[index].classList.add('active')
                    sidebarmore[index].classList.add('active')
                    document.getElementById(`HTML${index+1}1`).classList.add('active')
                }
                else
                {
                    const index = lis2.indexOf(value)
                    if (index+1)
                    {
                        h1[index+1+len1].classList.add('h1-active')
                        subtitle[index+1+len1].classList.add('active')
                        main[index+len1].classList.add('active')
                        sidebarmore[index+len1].classList.add('active')
                        document.getElementById(`CSS${index+1}1`).classList.add('active')
                    }
                    else
                    {
                        const index = lis3.indexOf(value)
                        if (index+1)
                        {
                            h1[index+1+len1+len2].classList.add('h1-active')
                            subtitle[index+1+len1+len2].classList.add('active')
                            main[index+len1+len2].classList.add('active')
                            sidebarmore[index+len1+len2].classList.add('active')
                            document.getElementById(`JavaScript${index+1}1`).classList.add('active')
                        }
                    }
                }
            }
        })
    })

    document.getElementById('button1').addEventListener('click',function(){
        target.scrollIntoView({ behavior: 'smooth', block:'start'})
        selectorItems2.forEach(i => {i.classList.remove('active')})
        document.getElementById(`${id}${index+1}1`).classList.add('active')
    })

    document.getElementById('button2').addEventListener('click',function(){
        target.scrollIntoView({block:'start'})

        h1.forEach(i => {i.classList.remove('h1-active')})
        subtitle.forEach(i => {i.classList.remove('active')})
        document.getElementById('h').classList.add('h1-active')
        document.getElementById('p').classList.add('active')

        document.getElementById('button2').classList.remove('active')
        document.getElementById('aside').classList.add('active')

        const value = lis4.indexOf(id)
        sidebars[value+1].classList.add('active')

        main.forEach(i => {i.classList.remove('active')})
        sidebarmore.forEach(i => {i.classList.remove('active')})
        selectorItems2.forEach(i => {i.classList.remove('active')}) 
    })
    
    selectorItems2.forEach(i => 
        i.addEventListener('click',function(){
            selectorItems2.forEach(i => i.classList.remove('active'))
            this.classList.add('active')
            const newtarget = document.getElementById(`${this.getAttribute('id')}+`)
            newtarget.scrollIntoView({ behavior: 'smooth', block:'start'})
        }))
})