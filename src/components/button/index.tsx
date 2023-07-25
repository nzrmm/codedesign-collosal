import cx from 'classnames';

import styles from './button.module.css';

type IButton = {
  id: string,
  children: React.ReactNode,
  type: 'primary' | 'secondary',
  variant: 'small' | 'medium' | 'large',
  customClassName?: string,
  onClick: () => void,
}

const Button = ({id, children, type, variant, customClassName, ...props}: IButton) => {
  return (
    <div>
      <button
        id={id}
        className={cx(
          styles[`type__${type}`],
          styles[`variant__${variant}`],
          customClassName
        )}
        onClick={props.onClick}
      >
        {children}
      </button>
    </div>
  )
}

export default Button