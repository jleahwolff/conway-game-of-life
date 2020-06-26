import React, {useState} from 'react';
import "../css/rules.css";


const Rules = () => {
  const [see, setSee] = useState(false);

  const handleClick= () => {
    setSee(!see)
    console.log(see);
  }

  const handleClose = () => {
    setSee(see)
  }

  return (
    <>
      <div>
        <button onClick={handleClick} class="btn">
          Rules
        </button>
        {/* <button onClose={handleClose} class="btn">
          Rules
        </button> */}
        {
          see &&
            <div class="list-of-rules">
              <ol>
            <li>
              Click squares to set them to alive
            </li>
            <li>
              Once you're ready to see them move, press Start
            </li>
            <li>
              Any live cell with two or three live neighbours survives.
            </li>
            <li>
              Any dead cell with three live neighbours becomes a live cell.
            </li>
            <li>
                All other live cells die in the next generation. Similarly, all other dead cells stay dead
            </li>
              </ol>
            </div>
        }
      </div>
    </>
  );
}

export default Rules;