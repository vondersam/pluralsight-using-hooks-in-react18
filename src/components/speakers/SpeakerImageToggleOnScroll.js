import { useContext, useState, useRef, useEffect } from 'react';
import { SpeakerMenuContext } from '../contexts/SpeakerMenuContext';

export default function SpeakerImageToggleOnScroll({
  imageUrl,
  alt,
  thumbNail
}) {
  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { speakingSaturday, speakingSunday, searchText } = useContext(
    SpeakerMenuContext
  );

  const grayScale = inView ? 'grayscale(0%)' : 'grayscale(100%)';

  function scrollHandler() {
    setInView(isInView());
  }

  useEffect(() => {
    setInView(isInView);
    setIsLoading(false);
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [speakingSaturday, speakingSunday, searchText]);

  function isInView() {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  const gif1x1Transparent =
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

  return (
    <img
      src={isLoading ? gif1x1Transparent : imageUrl}
      alt={alt}
      width={thumbNail ? 50 : 200}
      height={thumbNail ? 50 : 200}
      className={
        thumbNail
          ? 'img-fluid rounded-start '
          : 'img-fluid rounded-start speaker-image'
      }
      style={{ filter: `${grayScale}` }}
      ref={imageRef}
    />
  );
}
