import React, {useState} from 'react';
import { patchVotes } from "./Api";

function Votes({ initialVotes, articleId }) {

    const [votes, setVotes] = useState(initialVotes);
    const [userVotes, setUserVotes] = useState(0);

const handleClick = (increment) => () => {
    if (increment === userVotes) {
        increment = -userVotes;
    }

    const newVoteCount = votes + increment;
    setVotes(newVoteCount);
    setUserVotes(increment === userVotes ? 0 : increment);
    patchVotes(articleId, increment)
    .catch((error) => {
        console.error(`Failed to update votes on the server ${error}`);
        setVotes(votes);
        setUserVotes(userVotes);
    });
};

  return (
    <div>
        <button onClick={handleClick(1)}>👍</button>
        <p>{votes}</p>
        <button onClick={handleClick(-1)}>👎</button>
    </div>
  )
}

export default Votes