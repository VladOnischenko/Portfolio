import React, {useContext} from 'react';
import './progress.scss'
import {ThemeProvider} from "../../App";

const Progress = ({done}) => {
  const theme = useContext(ThemeProvider)
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }
    setStyle(newStyle);
  }, 200);

  return (
    <div className={theme ? "progress" : "progress progress-dark"}>
      <div className={theme ? "progress-done" : "progress-done done-dark"} style={style}></div>
    </div>
  )
}

export default Progress;