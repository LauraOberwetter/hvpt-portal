import React, { Component } from "react";
import { useState, useEffect } from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Activity from "../../pages/Activity";
import API from "../../utils/API";


//button styling
const StyledButton = withStyles({
	root: {
	  background: 'linear-gradient(45deg, #b5179e 10%, #7209b7 90%)',
	  borderRadius: 3,
	  border: 0,
	  color: 'white',
	  height: 60,
	  padding: '10px 50px',
	  margin: '20px',
    fontFamily: 'Montserrat',
    fontSize: 20,
	},
	label: {
	  textTransform: 'capitalize',
	},
  })(Button);


export default class extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render(question) {
    //UPDATE COMPONENT TO GET THE RIGHT AUDIO FILE
    // const [audio, setAudio] = useState();
    // useEffect(() => {
    //   //need to update to pass the id from activity id  
    //   const id = "1";
    //   const getAudio = async () => {
    //     try {
    //       const audioObj = await API.getAudio(id);   
    //       setAudio(audioObj.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   getAudio();
    // }, 
    // []);
    // console.log(audio);

    return (
      <div className="play-audio">
        <StyledButton onClick={this.playAudio}>
          <span>Play Audio</span>
        </StyledButton>
        <audio className="audio-element">
          <source src="https://hvpt-portal-files.s3.us-east-2.amazonaws.com/JA_01XM3.wav"></source>
        </audio>
      </div>
    )
  }
}


// function PlayAudio () {
//   // playSound(() => {
//   //   const audioEl = document.getElementsByClassName("audio-element")[0]
//   //   audioEl.play()
//   // }
//   // ) 
  

//   return (
//     <div className="play-audio">
// {/* //         <StyledButton onClick={this.playSound}> */}
//             <StyledButton>
// //           <span>Play Audio</span>
// //         </StyledButton>
// //         <audio className="audio-element">
// //           <source src={}></source>
// //         </audio>
// //       </div>
//   )
// }

// export default PlayAudio