import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./multiRangeSlider.css";

const MultiRangeSlider = ({ min, max, params, onChange, onTouched }) => {
  const paramMin = Boolean(params) ? params.min : min;
  const paramMax = Boolean(params) ? params.max : max;
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
console.log(params);
  

  const [leftValue, handleLeft] = useState(false);
  const [rightValue, handleRight] = useState(false);
  
  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: (Boolean(leftValue) ? minVal : paramMin), max: Boolean(rightValue) ? maxVal : paramMax });
  }, [minVal, maxVal]);
  

  return (
    <div className="container d-flex">
      <input
        type="range"
        min={min}
        max={max}
        value={Boolean(leftValue) ? minVal : paramMin}
        onTouchStart={() => handleLeft(true)}
        onMouseDown={() => handleLeft(true)}
        onTouchEnd={() => onTouched({touchEnd: true})}
        onMouseUp={() => onTouched({touchEnd: true})}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={Boolean(rightValue) ? maxVal : paramMax}
        onTouchStart={() => handleRight(true)}
        onMouseDown={() => handleRight(true)}
        onTouchEnd={() => onTouched({touchEnd: true})}
        onMouseUp={() => onTouched({touchEnd: true})}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider" >
        <div  className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{Boolean(leftValue) ? minVal : paramMin}</div>
        <div className="slider__right-value">{Boolean(rightValue) ? maxVal : paramMax}</div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
