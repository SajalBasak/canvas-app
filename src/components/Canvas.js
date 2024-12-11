import React, { useRef, useState, useEffect } from 'react';

const Canvas = ({ selectedTool, brushColor, brushSize }) => {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [panStart, setPanStart] = useState({ x: 0, y: 0 });
    const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
    const [textInput, setTextInput] = useState('');
    const [textPosition, setTextPosition] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 0.8;
        canvas.height = window.innerHeight * 0.8;
        const ctx = canvas.getContext('2d');
        ctx.lineCap = 'round';
        ctxRef.current = ctx;
    }, []);

    // Start drawing or panning
    const startDrawing = (e) => {
        if (selectedTool === 'pan') {
            setIsDrawing(true);
            setPanStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
        } else if (selectedTool === 'text') {
            setTextPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
        } else {
            setIsDrawing(true);
            ctxRef.current.beginPath();
            ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        }
    };

    // Draw or pan
    const draw = (e) => {
        if (!isDrawing) return;

        if (selectedTool === 'pan') {
            const newX = e.clientX - panStart.x;
            const newY = e.clientY - panStart.y;
            setPanOffset({ x: newX, y: newY });
            canvasRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
        } else {
            ctxRef.current.lineWidth = brushSize;
            ctxRef.current.strokeStyle = selectedTool === 'eraser' ? '#FFFFFF' : brushColor;
            ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            ctxRef.current.stroke();
        }
    };

    // Stop drawing or panning
    const stopDrawing = () => {
        setIsDrawing(false);
        ctxRef.current.closePath();
    };

    // Handle text input
    const handleTextInput = (e) => {
        if (textPosition) {
            ctxRef.current.fillStyle = brushColor;
            ctxRef.current.font = `${brushSize * 2}px Arial`;
            ctxRef.current.fillText(textInput, textPosition.x, textPosition.y);
            setTextInput('');
            setTextPosition(null);
        }
    };

    // Upload Image
    // const handleImageUpload = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (event) => {
    //             const img = new Image();
    //             img.onload = () => {
    //                 ctxRef.current.drawImage(img, 0, 0);
    //             };
    //             img.src = event.target.result;
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    // Clear Canvas
    //   const clearCanvas = () => {
    //     const canvas = canvasRef.current;
    //     ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
    //   };

    // Download Canvas
    //   const downloadCanvas = () => {
    //     const canvas = canvasRef.current;
    //     const link = document.createElement('a');
    //     link.download = 'canvas.png';
    //     link.href = canvas.toDataURL();
    //     link.click();
    //   };

    return (
        <div>
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseOut={stopDrawing}
                style={{ border: '1px solid #000', cursor: selectedTool === 'pan' ? 'grab' : 'crosshair' }}
            />
            {selectedTool === 'text' && (
                <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    onBlur={handleTextInput}
                    placeholder="Enter text and press Enter"
                    autoFocus
                    style={{ position: 'absolute', top: textPosition?.y || 0, left: textPosition?.x || 0 }}
                />
            )}
            {/* <div style={{ marginTop: '10px' }}>
                <input type="file" onChange={handleImageUpload} />
            </div> */}
        </div>
    );
};

export default Canvas;
