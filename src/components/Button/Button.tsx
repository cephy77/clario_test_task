import classNames from 'classnames';
import style from './style.module.scss';

type PropsTypes = {
  outlined?: boolean;
  children: string
}

export const Button = ({ outlined, children }: PropsTypes) => {
  const handleClick = () => {
    console.log(`Button "${children}" is clicked`);
  }

  return (
    <button
      className={classNames(style.button, {
        [style.buttonOutlined]: outlined,
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}