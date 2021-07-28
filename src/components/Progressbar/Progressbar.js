import React from 'react'

function Progressbar(props) {
    const {type, bgcolor, completed } = props;


    const containerStyles = {
      height: 25,
      width: '70%',
      backgroundColor: "#e0e0de",
      borderRadius: 2,
      marginTop:20,
      marginLeft:90
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: "inherit",
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${type}`} {`${completed}%`}</span>
        </div>
      </div>
    );
}

export default Progressbar
