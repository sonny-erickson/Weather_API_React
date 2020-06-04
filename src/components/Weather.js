import React from 'react';

const Weather = (props) => {

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
      }
    return (
        <>
            <div className="location d-flex flex-column ">
                <div className="name">Paris, Fr</div>
                <div className="date">{dateBuilder(new Date())}</div>
                <div className="temp">32°</div>
                <div className="weather">Rain fucking</div>
            </div> 

        </>
    );
};

export default Weather;