import { PropsWithChildren, useCallback, useEffect, useRef } from 'react';

const TiltElement = ({ children }: PropsWithChildren) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleTilt = (e: MouseEvent, width: number, height: number) => {
    if (elementRef.current && width && height) {
      const xTilt = 10 * ((e.layerY - height / 2) / height);
      const yTilt = -5 * ((e.layerX - width / 2) / width);
      elementRef.current.style.transform = `perspective(1000px) rotateX(${xTilt}deg) rotateY(${yTilt}deg)`;
    }
  };

  const addTmpTransition = () => {
    if (elementRef.current) {
      elementRef.current.style.transition = `.2s all ease-in-out`;
    }
    setTimeout(() => {
      if (elementRef.current) {
        elementRef.current.style.transition = 'none';
      }
    }, 200);
  };

  const loseTilt = useCallback(() => {
    if (elementRef.current) {
      addTmpTransition();
      elementRef.current.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
    }
  }, [elementRef]);

  useEffect(() => {
    const currentElement = elementRef.current;

    if (currentElement) {
      const width = currentElement.clientWidth;
      const height = currentElement.clientHeight;
      currentElement.addEventListener('mousemove', (e) =>
        handleTilt(e, width, height)
      );
      currentElement.addEventListener('mouseenter', addTmpTransition);
      currentElement.addEventListener('mouseleave', loseTilt);
    }

    return () => {
      if (currentElement) {
        const width = currentElement.clientWidth;
        const height = currentElement.clientHeight;
        currentElement.removeEventListener('mousemove', (e) =>
          handleTilt(e, width, height)
        );
        currentElement.removeEventListener('mouseenter', addTmpTransition);
        currentElement.removeEventListener('mouseleave', loseTilt);
      }
    };
  }, [elementRef, loseTilt]);

  return <div ref={elementRef}>{children}</div>;
};

export default TiltElement;
