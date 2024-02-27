
const blocks = $('.block')
blocks.on('click', ()=>{
    console.log(event.target.innerHTML)
    let price = event.target.innerHTML
    let jQuestions = []
    for(let obj of jeopardyQs){
        if(obj.value === price){
            jQuestions.push(obj)
            console.log(jQuestions[0])
        }
    }

})

