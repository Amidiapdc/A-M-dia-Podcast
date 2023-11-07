const intersectObserver = IntersectionObserver ((entries) =>{
    entries.forEach(entry => {
        console.log(entry)
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
})

const elements = document.querySelectorAll(".animation5")

elements.forEach(intersectObserver.observer(el))