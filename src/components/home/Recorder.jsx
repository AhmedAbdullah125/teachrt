import { useReactMediaRecorder } from "react-media-recorder";
import React, { useEffect, useState } from "react";

const RecordView = (props) => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const[isStoped, setIsStoped] = useState(false)
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  }
  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    mediaBlobUrl
  } = useReactMediaRecorder({
    video: false,
    audio: true,
    echoCancellation: true
  });
  console.log("url", mediaBlobUrl);
  // useEffect(() => {
  //   if (isStoped) {
  //   document.getElementById("form-cont").style.height = "120px";
  //   }
  // }, [isStoped]);
  return (
    <div className="flex items-center gap-3 ">
      {/* <div
        style={{
          border: "1px solid #bd9f61",
          height: "70px",
          backgroundColor: "#bd9f61",
          display: "flex"
        }}
      >
        <h4
          style={{
            marginLeft: "10px",
            textTransform: "capitalize",
            fontFamily: "sans-serif",
            fontSize: "18px",
            color: "white"
          }}
        >
          {status}
        </h4>
      </div> */}
      <div style={isStoped ? { display: "block" } : { display: "none" }} className="player">
        {" "}
        <video src={mediaBlobUrl} controls   style={{ height: "54px"  }} className="md:w-56 w-32"/>
      </div>

      <div
        // className="col-md-6 col-md-offset-3"
        // style={{
        //   backgroundColor: "black",
        //   color: "white",
        //   marginLeft: "357px"
        // }}
      >
        {/* <button
          style={{
            backgroundColor: "black",
            borderRadius: "8px",
            color: "white"
          }}
          onClick={stopTimer}
        >
          Clear
        </button> */}
        {/* <div style={{ marginLeft: "70px", fontSize: "54px" }}>
          <span className="minute">{minute}</span>
          <span>:</span>
          <span className="second">{second}</span>
        </div> */}

        <div >
          <label
            style={{
              fontSize: "15px",
              fontWeight: "Normal"
              // marginTop: "20px"
            }}
            htmlFor="icon-button-file"
          >
            {/* <h3 style={{ marginLeft: "15px", fontWeight: "normal" }}>
              Press the Start to record
            </h3> */}

            <div>
            <label htmlFor="record" className="custom-file-upload2"  style={isActive ? { display: "none" }: { display: "block" }}
              
                onClick={() => {
                  if (!isActive) {
                    startRecording();
                  } else {
                    pauseRecording();
                  }
                  setIsStoped(false)
                  setIsActive(!isActive);
                }}
                >
    
              {/* </button> */}
                </label>
              <label htmlFor="stop" className="custom-file-upload3"  style={!isActive ? { display: "none" }: { display: "block" }}
             

                
                onClick={() => {
                  stopRecording();
                  pauseRecording();
                  setIsActive(!isActive);
                  setIsStoped(true)
                }}
              >
                {/* Stop */}
              {/* </button> */}
                </label>
            </div>
          </label>
        </div>
        <b></b>
      </div>
    </div>
  );
};
export default RecordView;
