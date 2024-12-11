import React from 'react';

const Toolbar = ({
    selectedTool,
    setSelectedTool,
    brushColor,
    setBrushColor,
    brushSize,
    setBrushSize,
    onClearCanvas,
    onDownloadCanvas,
}) => {
    return (
        <div style={styles.toolbar}>
            <h2 style={styles.title}>Tools</h2>

            <div style={styles.section}>
                <button
                    style={selectedTool === 'draw' ? styles.activeButton : styles.button}
                    onClick={() => setSelectedTool('draw')}
                >
                    ✏️ Draw
                </button>
                <button
                    style={selectedTool === 'eraser' ? styles.activeButton : styles.button}
                    onClick={() => setSelectedTool('eraser')}
                >
                    🧽 Eraser
                </button>
                <button
                    style={selectedTool === 'pan' ? styles.activeButton : styles.button}
                    onClick={() => setSelectedTool('pan')}
                >
                    🖐️ Pan
                </button>
                <button
                    style={selectedTool === 'select' ? styles.activeButton : styles.button}
                    onClick={() => setSelectedTool('select')}
                >
                    🔲 Select
                </button>
                <button
                    style={selectedTool === 'text' ? styles.activeButton : styles.button}
                    onClick={() => setSelectedTool('text')}
                >
                    🅰️ Text
                </button>
            </div>

            <div style={styles.section}>
                <label style={styles.label}>Brush Color</label>
                <input
                    type="color"
                    value={brushColor}
                    onChange={(e) => setBrushColor(e.target.value)}
                    style={styles.colorInput}
                />
            </div>

            <div style={styles.section}>
                <label style={styles.label}>Brush Size</label>
                <input
                    type="number"
                    value={brushSize}
                    min="1"
                    max="50"
                    onChange={(e) => setBrushSize(parseInt(e.target.value))}
                    style={styles.numberInput}
                />
            </div>

            <div style={styles.section}>
                <button style={styles.clearButton} onClick={onClearCanvas}>
                    🗑️ Clear Canvas
                </button>
                <button style={styles.downloadButton} onClick={onDownloadCanvas}>
                    💾 Download
                </button>
            </div>
        </div>
    );
};

const styles = {
    toolbar: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#2C2F33',
        color: '#fff',
        height: '100vh',
        width: '200px',
        boxShadow: '2px 0 10px rgba(0, 0, 0, 0.2)',
        position: 'fixed',
        top: '0',
        left: '0',
    },
    title: {
        marginBottom: '20px',
        fontSize: '1.5rem',
        borderBottom: '2px solid #7289DA',
        paddingBottom: '10px',
        textAlign: 'center',
        width: '100%',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
        width: '100%',
    },
    label: {
        marginBottom: '10px',
        fontSize: '1rem',
        color: '#b9bbbe',
    },
    button: {
        margin: '5px 0',
        padding: '12px',
        width: '100%',
        backgroundColor: '#7289DA',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.2s ease',
    },
    activeButton: {
        margin: '5px 0',
        padding: '12px',
        width: '100%',
        backgroundColor: '#5865F2',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        boxShadow: '0 0 10px #5865F2',
    },
    colorInput: {
        width: '100%',
        height: '40px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#40444B',
        cursor: 'pointer',
    },
    numberInput: {
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#40444B',
        color: '#fff',
        textAlign: 'center',
    },
    clearButton: {
        margin: '5px 0',
        padding: '12px',
        width: '100%',
        backgroundColor: '#E74C3C',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.2s ease',
    },
    downloadButton: {
        margin: '5px 0',
        padding: '12px',
        width: '100%',
        backgroundColor: '#2ECC71',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.2s ease',
    },
};

export default Toolbar;
