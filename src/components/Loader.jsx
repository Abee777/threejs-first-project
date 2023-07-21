import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p style={{
        fontSize: 22,
        color: '#f1f1f1',
        fontWeight: 800,
        marginTop: 120
      }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default CanvasLoader