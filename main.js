let count = 0
let correctAns = ""
let score = 0
let value = 0
const tiles = $('.tile')
const question = $('.question')
const scoreBoard = $('.score')
let input = $('#input')
tiles.on('click',(event)=>{
    console.log(event.target.innerHTML)
    if(count === 0){
    value = event.target.innerHTML
    let qsArr = []
    for(let obj of jeopardyQs){
        if(obj.value === value){
            qsArr.push(obj)
        }
    }
    let scramble = Math.floor(Math.random()*qsArr.length)
    let newQ = $(`<p>${qsArr[scramble-1].question}</p>`)
    correctAns = `${qsArr[scramble-1].answer}`
    question.append(newQ)
    console.log(correctAns)
    qsArr.length = 0
  }
  count++
})
$('button').on('click', ()=>{
    if(count>0){
        if($('input').val().toLowerCase()=== correctAns.toLowerCase()){
            question.text('CORRECT!')
            score += parseInt(value.split('$')[1])
            scoreBoard.text(`Score: $${score}`)
            input.val("")
        }
        else {
            question.text('INCORRECT')
            score -= parseInt(value.split('$')[1])
            scoreBoard.text(`Score:$${score}`)
            input.val("")
        }
        
    }
    count = 0
})
