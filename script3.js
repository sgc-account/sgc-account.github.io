document.addEventListener('DOMContentLoaded',function(){
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

    // Background
    const backgroundcolordemo = document.getElementById('background-color-demo')
    const backgroundcolor = document.getElementById('background-color')
    const lineargradientdemo = document.getElementById('linear-gradient-demo')
    const lineargradient1 = document.getElementById('linear-gradient1')
    const lineargradient2 = document.getElementById('linear-gradient2')
    const lineargradient3 = document.getElementById('linear-gradient3')
    const radialgradientdemo = document.getElementById('radial-gradient-demo')
    const radialgradient1 = document.getElementById('radial-gradient1')
    const radialgradient2 = document.getElementById('radial-gradient2')
    const backgroundcomprehensivedemo = document.getElementById('background-comprehensive-demo')
    const backgroundimage = document.getElementById('background-image')
    const backgroundposition = document.getElementById('background-position')
    const backgroundsize = document.getElementById('background-size')
    const backgroundrepeat = document.getElementById('background-repeat')

    backgroundcolor.addEventListener('input',function(){
        backgroundcolordemo.style.backgroundColor = backgroundcolor.value
    })

    lineargradient1.addEventListener('input',function(){
        lineargradientdemo.style.backgroundImage = `linear-gradient(${lineargradient1.value},${lineargradient2.value},${lineargradient3.value})`
    })

    lineargradient2.addEventListener('input',function(){
        lineargradientdemo.style.backgroundImage = `linear-gradient(${lineargradient1.value},${lineargradient2.value},${lineargradient3.value})`
    })

    lineargradient3.addEventListener('input',function(){
        lineargradientdemo.style.backgroundImage = `linear-gradient(${lineargradient1.value},${lineargradient2.value},${lineargradient3.value})`
    })

    radialgradient1.addEventListener('input',function(){
        radialgradientdemo.style.backgroundImage = `radial-gradient(circle,${radialgradient1.value},${radialgradient2.value})`
    })

    radialgradient2.addEventListener('input',function(){
        radialgradientdemo.style.backgroundImage = `radial-gradient(circle,${radialgradient1.value},${radialgradient2.value})`
    })
    
    backgroundimage.addEventListener('input',function(){
        backgroundcomprehensivedemo.style.backgroundImage = backgroundimage.value
    })

    backgroundposition.addEventListener('change',function(){
        backgroundcomprehensivedemo.style.backgroundPosition = backgroundposition.value
    })

    backgroundsize.addEventListener('change',function(){
        backgroundcomprehensivedemo.style.backgroundSize = backgroundsize.value
    })

    backgroundrepeat.addEventListener('change',function(){
        backgroundcomprehensivedemo.style.backgroundRepeat = backgroundrepeat.value
    })

    // Text & Font
    const fontdemo1 = document.getElementById('font-demo1')
    const fontfamily = document.getElementById('font-family')
    const fontsize = document.getElementById('font-size')
    const fontdemo2 = document.getElementById('font-demo2')
    const fontweight = document.getElementById('font-weight')
    const fontstyle = document.getElementById('font-style')
    const fontvariant = document.getElementById('font-variant')
    const textdemo = document.getElementById('text-demo')
    const textalign = document.getElementById('text-align')
    const lineheight = document.getElementById('line-height')
    const letterspacing = document.getElementById('letter-spacing')


    fontfamily.addEventListener('change',function(){
        fontdemo1.style.fontFamily = fontfamily.value
    })

    fontsize.addEventListener('change',function(){
        fontdemo1.style.fontSize = fontsize.value
    })

    fontweight.addEventListener('change',function(){
        fontdemo2.style.fontWeight = fontweight.value
    })

    fontstyle.addEventListener('change',function(){
        fontdemo2.style.fontStyle = fontstyle.value
    })

    fontvariant.addEventListener('change',function(){
        fontdemo2.style.fontVariant = fontvariant.value
    })

    textalign.addEventListener('change',function(){
        textdemo.style.textAlign = textalign.value
    })

    lineheight.addEventListener('change',function(){
        textdemo.style.lineHeight = lineheight.value
    })

    letterspacing.addEventListener('change',function(){
        textdemo.style.letterSpacing = letterspacing.value
    })

    // Color & Opacity
    const colordemo = document.getElementById('color-demo')
    const textcolor = document.getElementById('text-color')
    const opacity = document.getElementById('opacity')

    textcolor.addEventListener('input',function(){
        colordemo.style.color = textcolor.value
    })

    opacity.addEventListener('input',function(){
        colordemo.style.opacity = opacity.value
        colordemo.textContent = `您可以选择不同的颜色来改变文本外观。当前不透明度:${opacity.value}。`
    })

    // Text Decoration
    const textdecorationdemo = document.getElementById('text-decoration-demo')
    const textdecorationline = document.getElementById('text-decoration-line')
    const textdecorationstyle = document.getElementById('text-decoration-style')
    const textdecorationcolor = document.getElementById('text-decoration-color')
    const textshadowdemo = document.getElementById('text-shadow-demo')
    const textshadowh = document.getElementById('text-shadow-h')
    const textshadowv = document.getElementById('text-shadow-v')
    const textshadowblur = document.getElementById('text-shadow-blur')
    const textshadowcolor = document.getElementById('text-shadow-color')

    textdecorationline.addEventListener('change',function(){
        textdecorationdemo.style.textDecorationLine = textdecorationline.value
    })

    textdecorationstyle.addEventListener('change',function(){
        textdecorationdemo.style.textDecorationStyle = textdecorationstyle.value
    })

    textdecorationcolor.addEventListener('input',function(){
        textdecorationdemo.style.textDecorationColor = textdecorationcolor.value
    })

    textshadowh.addEventListener('input',function(){
        textshadowdemo.style.textShadow = `${textshadowh.value}px ${textshadowv.value}px ${textshadowblur.value}px ${textshadowcolor.value}`
    })

    textshadowv.addEventListener('input',function(){
        textshadowdemo.style.textShadow = `${textshadowh.value}px ${textshadowv.value}px ${textshadowblur.value}px ${textshadowcolor.value}`
    })

    textshadowblur.addEventListener('input',function(){
        textshadowdemo.style.textShadow = `${textshadowh.value}px ${textshadowv.value}px ${textshadowblur.value}px ${textshadowcolor.value}`
    })

    textshadowcolor.addEventListener('input',function(){
        textshadowdemo.style.textShadow = `${textshadowh.value}px ${textshadowv.value}px ${textshadowblur.value}px ${textshadowcolor.value}`
    })

    // Shadow & Filter
    const boxshadowdemo = document.getElementById('box-shadow-demo')
    const boxshadowh = document.getElementById('box-shadow-h')
    const boxshadowv = document.getElementById('box-shadow-v')
    const boxshadowblur = document.getElementById('box-shadow-blur')
    const boxshadowspread = document.getElementById('box-shadow-spread')
    const boxshadowcolor = document.getElementById('box-shadow-color')
    const filterdemo = document.getElementById('filter-demo')
    const filtertype = document.getElementById('filter-type')
    const backdropfilterdemo = document.getElementById('backdrop-filter-demo')
    const backdropfilter = document.getElementById('backdrop-filter')


    boxshadowh.addEventListener('input',function(){
        boxshadowdemo.style.boxShadow = `${boxshadowh.value}px ${boxshadowv.value}px ${boxshadowblur.value}px ${boxshadowspread.value}px ${boxshadowcolor.value}`
    })

    boxshadowv.addEventListener('input',function(){
        boxshadowdemo.style.boxShadow = `${boxshadowh.value}px ${boxshadowv.value}px ${boxshadowblur.value}px ${boxshadowspread.value}px ${boxshadowcolor.value}`
    })

    boxshadowblur.addEventListener('input',function(){
        boxshadowdemo.style.boxShadow = `${boxshadowh.value}px ${boxshadowv.value}px ${boxshadowblur.value}px ${boxshadowspread.value}px ${boxshadowcolor.value}`
    })

    boxshadowspread.addEventListener('input',function(){
        boxshadowdemo.style.boxShadow = `${boxshadowh.value}px ${boxshadowv.value}px ${boxshadowblur.value}px ${boxshadowspread.value}px ${boxshadowcolor.value}`
    })

    boxshadowcolor.addEventListener('input',function(){
        boxshadowdemo.style.boxShadow = `${boxshadowh.value}px ${boxshadowv.value}px ${boxshadowblur.value}px ${boxshadowspread.value}px ${boxshadowcolor.value}`
    })

    filtertype.addEventListener('change',function(){
        filterdemo.style.filter = filtertype.value
    })

    backdropfilter.addEventListener('change',function(){
        backdropfilterdemo.style.backdropFilter = backdropfilter.value
    })

    // 其他装饰属性
    const liststyledemo = document.getElementById('list-style-demo')
    const liststyletype = document.getElementById('list-style-type')
    const liststyleposition = document.getElementById('list-style-position')
    const cursordemo = document.getElementById('cursor-demo')
    const cursortype = document.getElementById('cursor-type')

    liststyletype.addEventListener('change',function(){
        liststyledemo.style.listStyleType = liststyletype.value
    })

    liststyleposition.addEventListener('change',function(){
        liststyledemo.style.listStylePosition = liststyleposition.value
    })

    cursortype.addEventListener('change',function(){
        cursordemo.style.cursor = cursortype.value
    })

    // Translate
    const translatedemo = document.getElementById('translate-demo')
    const translatex = document.getElementById('translate-x')
    const translatey = document.getElementById('translate-y')
    const rotatedemo = document.getElementById('rotate-demo')
    const rotate = document.getElementById('rotate')
    const rotatex = document.getElementById('rotate-x')
    const rotatey = document.getElementById('rotate-y')
    const scaledemo = document.getElementById('scale-demo')
    const scalex = document.getElementById('scale-x')
    const scaley = document.getElementById('scale-y')
    const skewdemo = document.getElementById('skew-demo')
    const skewx = document.getElementById('skew-x')
    const skewy = document.getElementById('skew-y')
    const transformorigindemo = document.getElementById('transform-origin-demo')
    const transformorigin = document.getElementById('transform-origin')
    
    translatex.addEventListener('input',function(){
        translatedemo.style.transform = `translateX(${translatex.value}px) translateY(${translatey.value}px)`
    })

    translatey.addEventListener('input',function(){
        translatedemo.style.transform = `translateX(${translatex.value}px) translateY(${translatey.value}px)`
    })

    rotate.addEventListener('input',function(){
        rotatedemo.style.transform = `rotate(${rotate.value}deg) rotateX(${rotatex.value}deg) rotateY(${rotatey.value}deg)`
    })

    rotatex.addEventListener('input',function(){
        rotatedemo.style.transform = `rotate(${rotate.value}deg) rotateX(${rotatex.value}deg) rotateY(${rotatey.value}deg)`
    })

    rotatey.addEventListener('input',function(){
        rotatedemo.style.transform = `rotate(${rotate.value}deg) rotateX(${rotatex.value}deg) rotateY(${rotatey.value}deg)`
    })

    scalex.addEventListener('input',function(){
        scaledemo.style.transform = `scaleX(${scalex.value}) scaleY(${scaley.value})`
    })

    scaley.addEventListener('input',function(){
        scaledemo.style.transform = `scaleX(${scalex.value}) scaleY(${scaley.value})`
    })

    skewx.addEventListener('input',function(){
        skewdemo.style.transform = `skewX(${skewx.value}deg) skewY(${skewy.value}deg)`
    })

    skewy.addEventListener('input',function(){
        skewdemo.style.transform = `skewX(${skewx.value}deg) skewY(${skewy.value}deg)`
    })

    transformorigin.addEventListener('input',function(){
        transformorigindemo.style.transformOrigin = transformorigin.value
    })

    // Transition
    const transitiondemo = document.getElementById('transition-demo')
    const transitionproperty = document.getElementById('transition-property')
    const transitionduration = document.getElementById('transition-duration')
    const transitiontiming = document.getElementById('transition-timing')

    transitionproperty.addEventListener('change',function(){
        transitiondemo.style.transition = `${transitionproperty.value} ${transitionduration.value}s ${transitiontiming.value}`
    })

    transitionduration.addEventListener('input',function(){
        transitiondemo.style.transition = `${transitionproperty.value} ${transitionduration.value}s ${transitiontiming.value}`
    })

    transitiontiming.addEventListener('change',function(){
        transitiondemo.style.transition = `${transitionproperty.value} ${transitionduration.value}s ${transitiontiming.value}`
    })

    transitiondemo.addEventListener('mouseenter',function(){
        this.style.backgroundColor = '#f72585'
        this.style.transform = 'scale(1.2) rotate(10deg)'
        this.style.color = '#fff'
        this.textContent = '过渡效果生效中!'
    })

    transitiondemo.addEventListener('mouseleave',function(){
        this.style.backgroundColor = ''
        this.style.transform = ''
        this.style.color = '#000000ff'
        this.textContent = '悬停查看过渡效果'
    })

    // Animation
    const animationdemo = document.getElementById('animation-demo')
    const animationname = document.getElementById('animation-name')
    const animationduration = document.getElementById('animation-duration')
    const animationtiming = document.getElementById('animation-timing')
    const startanimation = document.getElementById('start-animation')
    const pauseanimation = document.getElementById('pause-animation')
    const resetanimation = document.getElementById('reset-animation')

    animationname.addEventListener('change',function(){
        animationdemo.style.animation = `${animationname.value} ${animationduration.value}s ${animationtiming.value} 0s infinite`
    })

    animationduration.addEventListener('change',function(){
        animationdemo.style.animation = `${animationname.value} ${animationduration.value}s ${animationtiming.value} 0s infinite`
    })

    animationtiming.addEventListener('change',function(){
        animationdemo.style.animation = `${animationname.value} ${animationduration.value}s ${animationtiming.value} 0s infinite`
    })

    startanimation.addEventListener('click', function() {
        animationdemo.style.animationPlayState = 'running'
    });

    pauseanimation.addEventListener('click', function() {
        animationdemo.style.animationPlayState = 'paused'
    })

    resetanimation.addEventListener('click', function() {
        animationdemo.style.animation = 'none'
        setTimeout(function() {
                animationdemo.style.animation = `${animationname.value} ${animationduration.value}s ${animationtiming.value} 0s infinite`
            }, 10)
    })

    // 交互效果
    const hoverdemo = document.getElementById('hover-demo')
    const focusdemo = document.getElementById('focus-demo')
    const activedemo = document.getElementById('active-demo')

    hoverdemo.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f72585'
        this.style.transform = 'scale(1.1) rotate(5deg)'
        this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)'
        this.textContent = '悬停效果!'
    })
    
    hoverdemo.addEventListener('mouseleave', function() {
        this.style.backgroundColor = ''
        this.style.transform = ''
        this.style.boxShadow = ''
        this.textContent = '悬停在我上面'
    })

    focusdemo.addEventListener('focus', function() {
        this.style.borderColor = '#4361ee'
        this.style.boxShadow = '0 0 0 3px rgba(67, 97, 238, 0.3)'
    })
    
    focusdemo.addEventListener('blur', function() {
        this.style.borderColor = '#ccc'
        this.style.boxShadow = 'none'
    })

    activedemo.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)'
        this.style.backgroundColor = '#3a0ca3'
    })
    
    activedemo.addEventListener('mouseup', function() {
        this.style.transform = ''
        this.style.backgroundColor = ''
    })

    // 3D
    const rotate3ddemo = document.getElementById('rotate3d-demo')
    const rotate3dx = document.getElementById('rotate3d-x')
    const rotate3dy = document.getElementById('rotate3d-y')
    const rotate3dz = document.getElementById('rotate3d-z')

    rotate3dx.addEventListener('input', function() {
        rotate3ddemo.style.transform = `rotateX(${rotate3dx.value}deg) rotateY(${rotate3dy.value}deg) rotateZ(${rotate3dz.value}deg)`
    })

    rotate3dy.addEventListener('input', function() {
        rotate3ddemo.style.transform = `rotateX(${rotate3dx.value}deg) rotateY(${rotate3dy.value}deg) rotateZ(${rotate3dz.value}deg)`
    })

    rotate3dz.addEventListener('input', function() {
        rotate3ddemo.style.transform = `rotateX(${rotate3dx.value}deg) rotateY(${rotate3dy.value}deg) rotateZ(${rotate3dz.value}deg)`
    })

    // Mask & Clip
    const clippathdemo = document.getElementById('clip-path-demo')
    const clippath = document.getElementById('clip-path')
    const maskdemo = document.getElementById('mask-demo')
    const maskimage = document.getElementById('mask-image')

    clippath.addEventListener('change', function() {
        clippathdemo.style.clipPath = clippath.value
    })

    maskimage.addEventListener('change', function() {
        maskdemo.style.maskImage = maskimage.value
    })

    // Variable
    const cssvarprimary = document.getElementById('css-var-primary')
    const cssvarradius = document.getElementById('css-var-radius')
    const cssvarshadow = document.getElementById('css-var-shadow')

    cssvarprimary.addEventListener('input', function() {
        document.documentElement.style.setProperty('--primary', this.value);
    });
    
    cssvarradius.addEventListener('input', function() {
        document.documentElement.style.setProperty('--border-radius', `${this.value}px`);
    });
    
    cssvarshadow.addEventListener('change', function() {
        document.documentElement.style.setProperty('--box-shadow', this.value);
    });

    // Blend Modes
    const blendmodedemo = document.getElementById('blend-mode-demo')
    const blendmode = document.getElementById('blend-mode')

    blendmode.addEventListener('change', function() {
        blendmodedemo.style.mixBlendMode = blendmode.value
    })

    // 其他
    const userselectdemo = document.getElementById('user-select-demo')
    const userselect = document.getElementById('user-select')
    const pointerEventsDemo = document.getElementById('pointer-events-demo')
    const pointerEvents = document.getElementById('pointer-events')

    userselect.addEventListener('change', function() {
        userselectdemo.style.userSelect = userselect.value
    })

    pointerEvents.addEventListener('change', function() {
        pointerEventsDemo.style.pointerEvents = pointerEvents.value
    })

    pointerEventsDemo.addEventListener('click', function() {
        alert('上层元素被点击了！')
    });

    pointerEventsDemo.parentElement.querySelector('div:first-child').addEventListener('click', function() {
        alert('底层元素被点击了！')
    });

    console.dir(document)

})