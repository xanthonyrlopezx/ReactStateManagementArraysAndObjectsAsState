import React from "react";
function ClickTimes ({TimeStampPushHandler}) {
    return <button onClick={() => TimeStampPushHandler()}>Use It When You Need It</button>
}
export default ClickTimes;
