import { PropsWithChildren, useEffect, useRef } from 'react';

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

  const loseTilt = () => {
    if (elementRef.current) {
      addTmpTransition();
      elementRef.current.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
    }
  };

  useEffect(() => {
    if (elementRef.current) {
      const width = elementRef.current?.clientWidth;
      const height = elementRef.current?.clientHeight;
      elementRef.current.addEventListener('mousemove', (e) =>
        handleTilt(e, width, height)
      );
      elementRef.current.addEventListener('mouseenter', addTmpTransition);
      elementRef.current.addEventListener('mouseleave', loseTilt);
    }

    return () => {
      if (elementRef.current) {
        const width = elementRef.current?.clientWidth;
        const height = elementRef.current?.clientHeight;
        elementRef.current.removeEventListener('mousemove', (e) =>
          handleTilt(e, width, height)
        );
        elementRef.current.removeEventListener('mouseenter', addTmpTransition);
        elementRef.current.removeEventListener('mouseleave', loseTilt);
      }
    };
  }, [elementRef]);

  return <div ref={elementRef}>{children}</div>;
};

export default TiltElement;
