import React from 'react';
import './color.css';

function ColorPicker({ colors, onColorSelect }) {
    const selectColor = (color) => {
        onColorSelect(color);
    };

    return (
        <div className="color-picker">
            <ul className="color-picker__list">
                {colors.map((color, index) => (
                    <li
                        key={index}
                        className="color-picker__item"
                        style={{ backgroundColor: color }}
                        onClick={() => selectColor(color)}
                    />
                ))}
            </ul>
            <button className="color-picker__button">
                Pick a color
            </button>
        </div>
    );
}

export default ColorPicker;