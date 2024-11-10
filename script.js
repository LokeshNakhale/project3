window.addEventListener("wheel",function(e){
    if (e.deltaY>0) {  //mouse ka wheel ko move krne baad Y axis ki value change ho jati hai 
        gsap.to(".move1",{
            transform:"translateX(-100%)",
            duration:6,
            repeat:-1,
             ease:"none"
        })
        gsap.to(".move1 i",{
            rotate:180
        })
    }else{
        gsap.to(".move1",{
            transform:"translateX(0%)",
            duration:6,
            
        })
        gsap.to(".move1 i",{
            rotate:0
        })
    }
})

function page1animation(){
    var tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button",{
       y:-20,
       opacity:0,
       duration:1,
       stagger:0.2,
    })
    tl.from(".center-part1 h1",{
       x:-20,
       opacity:0,
       stagger:0.2,
    },"-=0.5")
    tl.from(".center-part1 p",{
       x:-20,
       opacity:0,
       stagger:0.2,
    })
    tl.from(".center-part1 button",{
       x:-20,
       opacity:0,
       stagger:0.2,
    })
    tl.from(".center-part2 img",{
       x:30,
       opacity:0,
       stagger:0.2,
    },"-=1") // ,"-=1" ye esa likhne se ye time line 1sec phele chalenga 
}
page1animation()


  var tl2 = gsap.timeline({   //is bar apan ne time line ke andar hi scrollTrigger lagaya
    scrollTrigger:{
        trigger:".services",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 40%",
        scrub:1,
    }
  })
  tl2.from(".services",{
    y:-30,
    opacity:0,
  })
  tl2.from(".elem.left",{
    x:-50,
    opacity:0
})
tl2.from("#elemRight",{
     x:50,   
     opacity:0,
},"-=0.8")