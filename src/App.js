import React, { useState } from 'react';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';

function App() {
  const [selectedTool, setSelectedTool] = useState('draw');
  const [brushColor, setBrushColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);

  const clearCanvas = () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadCanvas = () => {
    const canvas = document.querySelector('canvas');
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div style={{ display: 'flex' }}>
      <Toolbar
        selectedTool={selectedTool}
        setSelectedTool={setSelectedTool}
        brushColor={brushColor}
        setBrushColor={setBrushColor}
        brushSize={brushSize}
        setBrushSize={setBrushSize}
        onClearCanvas={clearCanvas}
        onDownloadCanvas={downloadCanvas}
      />
      <Canvas selectedTool={selectedTool} brushColor={brushColor} brushSize={brushSize} />
    </div>
  );
}

export default App;
