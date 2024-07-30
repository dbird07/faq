function QA(props) {

    const toggle = function(event){
        const ans = event.target.nextSibling
        ans.classList.toggle("hide")
    }

    return(
        <div className ="qa">
          <h3 onClick={(event)=>toggle(event)}>{props.question}</h3>
          <p id = "answer" className="hide">{props.answer}</p>
        </div>
    )
}

export default QA