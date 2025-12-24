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

    // display
    const displaydemo = document.getElementById('display-demo')
    const displaychoose = document.getElementById('display-choose')

    displaychoose.addEventListener('change',function(){
        displaydemo.style.display = displaychoose.value
    })

    // position
    const positiondemo = document.getElementById('position-demo')
    const positionchoose = document.getElementById('position-choose')
    const positiontop = document.getElementById('position-top')
    const positionbottom = document.getElementById('position-bottom')
    const positionleft = document.getElementById('position-left')
    const positionright = document.getElementById('position-right')
    const positionzindex = document.getElementById('position-z-index')

    positionchoose.addEventListener('change',function(){
        positiondemo.style.position = positionchoose.value
    })

    positiontop.addEventListener('input',function(){
        positiondemo.style.top = (`${positiontop.value}px`)
    })

    positionbottom.addEventListener('input',function(){
        positiondemo.style.bottom = (`${positionbottom.value}px`)
    })

    positionleft.addEventListener('input',function(){
        positiondemo.style.left = (`${positionleft.value}px`)
    })

    positionright.addEventListener('input',function(){
        positiondemo.style.right = (`${positionright.value}px`)
    })

    positionzindex.addEventListener('change',function(){
        positiondemo.style.zIndex = positionzindex.value
        positiondemo.textContent = `z-index: ${positionzindex.value}`
    })

    // Flexbox
    const flexdemo = document.getElementById('flex-demo')
    const flexdirection = document.getElementById('flex-direction')
    const flexwrap = document.getElementById('flex-wrap')
    const justifycontent = document.getElementById('justify-content')
    const alignitems = document.getElementById('align-items')
    const aligncontent = document.getElementById('align-content')

    flexdirection.addEventListener('change',function(){
        flexdemo.style.flexDirection = flexdirection.value
    })

    flexwrap.addEventListener('change',function(){
        flexdemo.style.flexWrap = flexwrap.value
    })

    justifycontent.addEventListener('change',function(){
        flexdemo.style.justifyContent = justifycontent.value
    })

    alignitems.addEventListener('change',function(){
        flexdemo.style.alignItems = alignitems.value
    })

    aligncontent.addEventListener('change',function(){
        flexdemo.style.alignContent = aligncontent.value
    })

    // Grid
    const griddemo = document.getElementById('grid-demo')
    const gridtemplatecolumns = document.getElementById('grid-template-columns')
    const gridtemplaterows = document.getElementById('grid-template-rows')
    const gridgap = document.getElementById('grid-gap')

    gridtemplatecolumns.addEventListener('input',function(){
        griddemo.style.gridTemplateColumns = gridtemplatecolumns.value
    })

    gridtemplaterows.addEventListener('input',function(){
        griddemo.style.gridTemplateRows = gridtemplaterows.value
    })

    gridgap.addEventListener('input',function(){
        griddemo.style.gap = gridgap.value
    })

    // Float
    const floatdemo1 = document.getElementById('float-demo1')
    const floatdemo2 = document.getElementById('float-demo2')
    const float = document.getElementById('float')
    const clear = document.getElementById('clear')

    float.addEventListener('input',function(){
        floatdemo1.style.float = float.value
    })

    clear.addEventListener('input',function(){
        floatdemo2.style.clear = clear.value
    })

    // Multi-column
    const multicolumndemo = document.getElementById('multi-column-demo')
    const columncount = document.getElementById('column-count')
    const columnwidth = document.getElementById('column-width')
    const columngap = document.getElementById('column-gap')

    columncount.addEventListener('input',function(){
        multicolumndemo.style.columnCount = columncount.value
    })

    columnwidth.addEventListener('input',function(){
        multicolumndemo.style.columnWidth = columnwidth.value
    })

    columngap.addEventListener('input',function(){
        multicolumndemo.style.columnGap = columngap.value
    })

    // Content
    const contentdemo = document.getElementById('content-demo')
    const widthdemo = document.getElementById('width-demo')
    const heightdemo = document.getElementById('height-demo')
    const width = document.getElementById('width')
    const height = document.getElementById('height')

    const minmaxdemo = document.getElementById('minmax-demo')
    const minwidth = document.getElementById('min-width')
    const maxwidth = document.getElementById('max-width')
    const minheight = document.getElementById('min-height')
    const maxheight = document.getElementById('max-height')

    width.addEventListener('input',function(){
        contentdemo.style.width = width.value
        widthdemo.textContent = `width: ${width.value}`
    })

    height.addEventListener('input',function(){
        contentdemo.style.height = height.value
        heightdemo.textContent = `height: ${height.value}`
    })

    minwidth.addEventListener('input',function(){
        minmaxdemo.style.minWidth = minwidth.value
        minmaxdemo.textContent = `调整浏览器窗口大小观察效果。这个元素有最小宽度${minwidth.value}、最大宽度${maxwidth.value}、最小高度${minheight.value}和最大高度${maxheight.value}的限制。`
    })

    maxwidth.addEventListener('input',function(){
        minmaxdemo.style.maxWidth = maxwidth.value
        minmaxdemo.textContent = `调整浏览器窗口大小观察效果。这个元素有最小宽度${minwidth.value}、最大宽度${maxwidth.value}、最小高度${minheight.value}和最大高度${maxheight.value}的限制。`
    })

    minheight.addEventListener('input',function(){
        minmaxdemo.style.minHeight = minheight.value
        minmaxdemo.textContent = `调整浏览器窗口大小观察效果。这个元素有最小宽度${minwidth.value}、最大宽度${maxwidth.value}、最小高度${minheight.value}和最大高度${maxheight.value}的限制。`
    })

    maxheight.addEventListener('input',function(){
        minmaxdemo.style.maxHeight = maxheight.value
        minmaxdemo.textContent = `调整浏览器窗口大小观察效果。这个元素有最小宽度${minwidth.value}、最大宽度${maxwidth.value}、最小高度${minheight.value}和最大高度${maxheight.value}的限制。`
    })

    // Padding
    const paddingdemo = document.getElementById('padding-demo')
    const paddingtop = document.getElementById('padding-top')
    const paddingright = document.getElementById('padding-right')
    const paddingbottom = document.getElementById('padding-bottom')
    const paddingleft = document.getElementById('padding-left')

    paddingtop.addEventListener('input',function(){
        paddingdemo.style.paddingTop = paddingtop.value
    })

    paddingright.addEventListener('input',function(){
        paddingdemo.style.paddingRight = paddingright.value
    })

    paddingbottom.addEventListener('input',function(){
        paddingdemo.style.paddingBottom = paddingbottom.value
    })

    paddingleft.addEventListener('input',function(){
        paddingdemo.style.paddingLeft = paddingleft.value
    })

    // Border
    const borderdemo = document.getElementById('border-demo')
    const borderwidth = document.getElementById('border-width')
    const borderstyle = document.getElementById('border-style')
    const bordercolor = document.getElementById('border-color')
    const borderradius = document.getElementById('border-radius')

    borderwidth.addEventListener('input',function(){
        borderdemo.style.borderWidth = borderwidth.value
    })

    borderstyle.addEventListener('change',function(){
        borderdemo.style.borderStyle = borderstyle.value
    })

    bordercolor.addEventListener('input',function(){
        borderdemo.style.borderColor = bordercolor.value
    })

    borderradius.addEventListener('input',function(){
        borderdemo.style.borderRadius = borderradius.value
    })

    // Margin
    const margindemo1 = document.getElementById('margin-demo1')
    const margindemo2 = document.getElementById('margin-demo2')
    const margindemo3 = document.getElementById('margin-demo3')
    const margintop = document.getElementById('margin-top')
    const marginright = document.getElementById('margin-right')
    const marginbottom = document.getElementById('margin-bottom')
    const marginleft = document.getElementById('margin-left')

    margintop.addEventListener('input',function(){
        margindemo1.style.marginTop = margintop.value
        margindemo2.style.marginTop = margintop.value
        margindemo3.style.marginTop = margintop.value
    })

    marginright.addEventListener('input',function(){
        margindemo1.style.marginRight = marginright.value
        margindemo2.style.marginRight = marginright.value
        margindemo3.style.marginRight = marginright.value
    })

    marginbottom.addEventListener('input',function(){
        margindemo1.style.marginBottom = marginbottom.value
        margindemo2.style.marginBottom = marginbottom.value
        margindemo3.style.marginBottom = marginbottom.value
    })

    marginleft.addEventListener('input',function(){
        margindemo1.style.marginLeft = marginleft.value
        margindemo2.style.marginLeft = marginleft.value
        margindemo3.style.marginLeft = marginleft.value
    })

})
