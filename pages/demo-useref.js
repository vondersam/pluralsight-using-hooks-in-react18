import { useRef } from 'react';

export default function Demo() {
  // Case #1 Reference the DOM
  const imgRef = useRef();

  return (
    <div clasName="container">
      <img
        src="images/Speaker-1124.jpg"
        ref={imgRef}
        style={{ filter: 'grayscale(100%)' }}
        onMouseOver={() => {
          imgRef.current.style.filter = 'grayscale(0%)';
        }}
        onMouseOut={() => {
          imgRef.current.style.filter = 'grayscale(100%)';
        }}
      />
      <hr />
      <button
        onClick={() => {
          alert('hello');
        }}
      >
        Register
      </button>
    </div>
  );
}
