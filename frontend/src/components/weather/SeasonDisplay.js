import React from 'react';
import './style.css'

const SeasonDisplay = props => {
    const { main, name, temp, feels_like, temp_min, temp_max, humidity } = props;

    return (
        <div className="weather-state">
            <div className="text__container" style={{ textAlign: 'center' }}>
                <h6>
                    현재 위치
                    <span role="img" aria-label="location">
            📍
          </span>{' '}
                    {name}
                </h6>
                <h6>
                    현재 날씨
                    <span role="img" aria-label="temp">
            ⛅
          </span>{' '}
                    {main}
                </h6>
                <h6>
                    현재 기온
                    <span role="img" aria-label="temp">
            ⛅
          </span>{' '}
                    {temp}°C
                </h6>
                <h6>
                    체감 온도
                    <span role="img" aria-label="feels_like">
            ⛅
          </span>{' '}
                    {feels_like}°C
                </h6>
                <h6>
                    최저 기온
                    <span role="img" aria-label="temp_min">
            ⛅
          </span>{' '}
                    {temp_min}°C
                </h6>
                <h6>
                    최고 기온
                    <span role="img" aria-label="temp_max">
            ⛅
          </span>{' '}
                    {temp_max}°C
                </h6>
                <h6>
                    현재 습도
                    <span role="img" aria-label="humidity">
            💧
          </span>{' '}
                    {humidity}°C
                </h6>
            </div>
        </div>
    );
};

export default SeasonDisplay;