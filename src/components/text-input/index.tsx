import cx from 'classnames';

import {Typography} from '@/components';

type ITextInput = {
  id: string;
  name: string;
  label?: string;
  type: 'text' | 'number' | 'email' | 'password';
  value: string;
  placeholder: string;
  disabled?: boolean;
  customClassName?: string;
  wrapperClassName?: string;
  onChange: (event: any) => void;
};

const TextInput = ({id, name, type, value, onChange, ...props}: ITextInput) => {
  return (
    <div className={cx('w-full', props.wrapperClassName)}>
      {props.label && (
        <label htmlFor={id}>
          <Typography variant='textSm'>{props.label}</Typography>
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        disabled={props.disabled}
        placeholder={props.placeholder}
        className={cx(
          'w-full rounded-md focus:outline-none bg-transparent border border-white/10 px-4 py-3',
          props.customClassName,
          {
            'mt-2': props.label,
          },
        )}
        onChange={onChange}
      />
    </div>
  );
};

TextInput.defaultProps = {
  type: 'text',
  id: 'text-input',
  placeholder: '',
};

export default TextInput;
