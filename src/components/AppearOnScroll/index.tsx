// Libraries
import clsx from 'clsx';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

// Styles
import styles from './AppearOnScroll.module.scss';

const AppearOnScroll = ({ children }: PropsWithChildren) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [elementDisplayed, setElementDisplayed] = useState(false);

  useEffect(() => {
    if (elementRef.current) {
      const paddingForThreshold = window.outerWidth <= 768 ? 100 : 250;
      const elementHeight = elementRef.current?.offsetHeight;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setElementDisplayed(true);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold:
            elementHeight <= paddingForThreshold
              ? 1
              : paddingForThreshold / elementHeight,
        }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [elementRef]);

  return (
    <div
      className={clsx([styles.element, elementDisplayed && styles.show])}
      ref={elementRef}
    >
      {children}
    </div>
  );
};

export default AppearOnScroll;
