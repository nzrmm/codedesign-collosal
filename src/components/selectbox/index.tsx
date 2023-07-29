import {useState} from 'react';
import cx from 'classnames';
import Image from 'next/image';

import {
  Typography,
} from '@/components';

import {IOption} from '@/types';

type ISelectbox = {
  options: IOption[],
  customClassName?: string,
  wrapperClassName?: string,
  onChange: (option: IOption) => void,
}

const Selectbox = ({options, customClassName, wrapperClassName, onChange}: ISelectbox) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<IOption>({
    label: '',
    value: '',
  })

  const handleSetToggleVisible = () => {
    setIsVisible(!isVisible)
  }

  const handleSetSelected = (option: IOption) => {
    setSelected(option);
    onChange(option)

    setIsVisible(false);
  }

  return (
    <div className={cx('w-full', wrapperClassName)}>
      <div className={cx('relative', customClassName)}>
        <div
          className={cx(
          'w-full rounded-md focus:outline-none bg-transparent border border-white/10 px-5 py-2 mb-2 cursor-pointer',
          'flex justify-between items-center',
          )}
          onClick={handleSetToggleVisible}
        >
          <Typography variant='textBase'>
            {selected.label || 'Chosee...'}
          </Typography>
          <Image
            width={18}
            height={18}
            src={'/svgs/chevron-down.svg'}
            className={cx({
              'rotate-180': isVisible
            })}
            alt='chevron-down-icon'
          />
        </div>
        
        {isVisible && (
          <div className={cx('absolute left-0 w-full rounded-md overflow-hidden border border-white/10 cursor-pointer')}>
            {options.map((option, index) => {
              return (
                <div
                  key={index}
                  className={cx('px-4 py-2 hover:bg-white/10')}
                  onClick={() => handleSetSelected(option)}
                >
                  <Typography variant='textBase'>
                    {option.label}
                  </Typography>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

Selectbox.defaultProps = {
  id: 'selectbox-input',
  name: 'selectboxInput'
};

export default Selectbox