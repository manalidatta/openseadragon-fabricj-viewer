import React from 'react';
import { fabric } from 'openseadragon-fabricjs-overlay';

const Shapes = ({overlay}) => {
    var triangle = new fabric.Triangle({
        width: 20, height: 30, fill: 'blue', angle: 30, left: 50, top: 50
      });
    var circle = new fabric.Circle({
        radius: 20, fill: 'green', left: 100, top: 100
      });
    const addShapes = () => {
        if (overlay) {
            overlay.fabricCanvas().add(triangle);
            overlay.fabricCanvas().add(circle);
        }
    };
    const removeShapes = () => {
        if(overlay) {
            overlay.fabricCanvas().remove(triangle);
            overlay.fabricCanvas().remove(circle);
        }
    };
    return (
        <div className='shapeList'>
            <button className='btn btn-outline-info mx-1' onClick={addShapes}>Add Shapes!</button>
            <button className='btn btn-outline-info mx-1' onClick={removeShapes}>Remove Shapes!</button>            
        </div>
    );
};
export default Shapes;