import { useRef, useState } from 'react';

export default function Demo() {
  // Case #1 Reference the DOM
  const imgRef = useRef();
  // Case #2 Reference value that does not cause re-render
  const mouseOverCnt = useRef(0);
  const [cnt, setCnt] = useState(0);

  return (
    <div clasName="container">
      <img
        src="images/Speaker-1124.jpg"
        ref={imgRef}
        style={{ filter: 'grayscale(100%)' }}
        onMouseOver={() => {
          imgRef.current.style.filter = 'grayscale(0%)';
          setCnt(cnt + 1);
          mouseOverCnt.current++;
        }}
        onMouseOut={() => {
          imgRef.current.style.filter = 'grayscale(100%)';
        }}
      />
      <hr />
      <button
        onClick={() => {
          alert('Registered! mouseOverCnt:' + mouseOverCnt.current);
        }}
      >
        Register
      </button>
    </div>
  );
}
