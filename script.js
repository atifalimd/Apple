document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach(control=>{
    control.addEventListener('click',e=>{
        e.preventDefault()
    })
})

// cube
let x = 0
let y = 20
let z = 0
let bool = true
let interval
const cube = document.querySelector('.cube')

document.querySelector('.top-x-control').
addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x = x+20}deg)`
})

document.querySelector('.bottom-x-control').
addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x = x-20}deg)`
})

document.querySelector('.left-y-control').
addEventListener('click',()=>{
    cube.style.transform = `rotateY(${y = y-20}deg)`

})

document.querySelector('.right-y-control').
addEventListener('click',()=>{
    cube.style.transform = `rotateX(${y = y+20}deg)`

})
document.querySelector('.top-z-control').
addEventListener('click',()=>{
    cube.style.transform = `rotateX(${z = z-20}deg)`

})

document.querySelector('.bottom-z-control').
addEventListener('click',()=>{
    cube.style.transform = `rotateX(${z = z+20}deg)`

})

const playPause = ()=>{
    if(bool){
        setInterval(()=>{
        cube.style.transform = `rotateY(${y++}deg)`
    },100)
    }else{
        clearInterval(interval)

    }
}
playPause()

document.querySelector('.controls').addEventListener('mouseover',()=>{
    bool = false
    playPause()
})


document.querySelector('.controls').addEventListener('mouseout',()=>{
    bool = true
    playPause()
})
// End of cube





// Slide-show
const slideshowDivs = ()=> {
    for(let i=1; i<=5; i++){
        const div = document.createElement('div')

        div.style.backgroundImage =`url(images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }
}
    
slideshowDivs()

const divs = document.querySelectorAll('.slideshow div')

let counter = 1

const slideshow =()=>{
    setInterval(()=>{
        counter++
        const div = document.querySelector('.slideshow .change')
        div.classList.remove('change')

        if(counter < divs.length){
            div.nextElementSibling.classList.add('change')
        } else{
            divs[0].classList.add('change')
            counter=1
        }
        }, 20000)
}

slideshow()


// End of slide-show


// Section-3
const section3Content = document.querySelector('.section-3-content')
window.addEventListener('scroll',()=>{
    if(window.pageYOffset+window.innerHeight >= section3Content.offsetTop+section3Content.offsetHeight/2){
        section3Content.classList.add('change')
    }
})
// End of section-3

// Section-4
const watchBands = document.querySelector('.watch-bands')
const watchCases = document.querySelector('.watch-cases')
const watchTop = document.querySelector('.watch-top-control')
const watchRight = document.querySelector('.watch-right-control')
const watchLeft = document.querySelector('.watch-left-control')
const watchBottom = document.querySelector('.watch-down-control')


let axisY = 0
let axisX = 0

const hideControl = ()=>{
    if(axisY === -280){
        watchTop.classList.add(hideControl)
    }else{
        watchTop.classList.remove(hideControl)
    }

     if(axisY === 280){
        watchBottom.classList.add(hideControl)
    }else{
        watchBottom.classList.remove(hideControl)
    }

     if(axisX === 280){
        watchRight.classList.add(hideControl)
    }else{
        watchRight.classList.remove(hideControl)
    }

     if(axisX === -280){
        watchLeft.classList.add(hideControl)
    }else{
        watchLeft.classList.remove(hideControl)
    }
}
watchTop.addEventListener('click',()=>{
    watchCases.style.marginTop=`${axisY = axisY - 50}rem`
    hideControl()
})

watchBottom.addEventListener('click',()=>{
    watchCases.style.marginTop=`${axisY = axisY + 50}rem`
    hideControl()
})

watchRight.addEventListener('click',()=>{
    watchBands.style.marginRight=`${axisX = axisX + 50}rem`
    hideControl()
})
watchLeft.addEventListener('click',()=>{
    watchBands.style.marginRight=`${axisX = axisX - 50}rem`
    hideControl()
})
// End of section-4