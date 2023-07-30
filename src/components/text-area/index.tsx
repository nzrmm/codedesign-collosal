import cx from 'classnames';

import {Typography} from '@/components';

type ITextArea = {
  id: string;
  name: string;
  rows: number;
  cols: number;
  value: string;
  label?: string;
  disabled?: boolean;
  placeholder: string;
  customClassName?: string;
  wrapperClassName?: string;
  onChange: (event: any) => void;
};

const TextArea = ({
  id,
  name,
  value,
  disabled,
  onChange,
  ...props
}: ITextArea) => {
  return (
    <div className={cx('w-full', props.wrapperClassName)}>
      {props.label && (
        <label htmlFor={id}>
          <Typography variant='textSm'>{props.label}</Typography>
        </label>
      )}

      <textarea
        id={id}
        name={name}
        rows={props.rows}
        cols={props.cols}
        value={value}
        placeholder={props.placeholder}
        autoComplete={'off'}
        onChange={onChange}
        disabled={disabled}
        className={cx(
          'w-full rounded-md focus:outline-none bg-transparent border border-white/10 px-4 py-3',
          props.customClassName,
          {
            'mt-2': props.label,
          },
        )}
      />
    </div>
  );
};

TextArea.defaultProps = {
  id: 'text-area',
  rows: 4,
  cols: 10,
  placeholder: '',
};

export default TextArea;
