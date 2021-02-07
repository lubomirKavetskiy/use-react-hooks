import {useState, useEffect, useCallback} from 'react'

export const useKey = (key) => {
  const [pressed, setPressed] = useState(false);

  const match = useCallback(event =>  event.key.toLowerCase() === key.toLowerCase(), [key]);

  const onDown = useCallback(event => match(event) && setPressed(true), [match]);

  const onUp = useCallback(event => match(event) && setPressed(false), [match]);

  useEffect(()=>{
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);

    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    }
  }, [key, onDown, onUp])

  return pressed;
}