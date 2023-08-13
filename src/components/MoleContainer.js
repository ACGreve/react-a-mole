import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
    //We need to declare a state variable to determine the status of the mole in this container. Is the mole above ground and ready to be bopped or hiding within the mole hole? Define a state variable called displayMole and instantiate it to false
  let [DisplayMole, setDisplayMole] = useState(false);

  //Next, define the function that will handle a mole being bopped. We want the function to iterate our score variable by 1 and set the mole display back to false.
  const handleClick = (e) => {
    props.setScore(props.score +1)
    setDisplayMole(false)
  }

  //Before our return value, define a variable called displayMole that will represent which component to render (the Mole or the EmptySlot), depending on whether displayMole is true.

  // creating an if statement, if the current display is mole, on click increase the score and set the display to false. If the dispay is empty run the EmptySlot.js which is on a timer and will flip to display after a certain passing. In the Mole.js the disply time of the Mole is controlled, after and random number between 0 and 3000ms if not clicked the display will return to empty (it will essentially keep toggling back and forth, score only changing on click)
  let displayMole = DisplayMole ? <Mole setScore={props.setScore} toggle={setDisplayMole} handleClick={handleClick} /> : <EmptySlot toggle={setDisplayMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer