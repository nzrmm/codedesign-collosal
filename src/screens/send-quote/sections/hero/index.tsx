import cx from 'classnames';

import {Button, TextArea, TextInput, Typography} from '@/components';

const Hero = () => {
  return (
    <div className={cx('px-52 pt-24 pb-32 relative')}>
      {/* Glassmorphism effect */}
      <div className={cx('glass-effect glass-effect-secondary01')}></div>
      <div className={cx('glass-effect glass-effect-primary03')}></div>
      <div className={cx('glass-effect glass-effect-secondary03')}></div>

      <div className={cx('flex items-center justify-between')}>
        <div className={cx('flex-1')}>
          <Typography
            variant='textBase'
            customClassName='!font-semibold !text-primary03 tracking-widest mb-3'
          >
            SEND QUOTE
          </Typography>

          <Typography variant='text4Xl' customClassName='mb-6'>
            Tell us about your problem <br />
            and how we can help <br />
          </Typography>

          <Typography variant='textBase' customClassName='mb-12'>
            We are happy to help you, tell us what is the problem with your{' '}
            <br />
            company, and we are ready to answer these problems. It usually{' '}
            <br />
            takes a few minutes for us to respond.
          </Typography>

          <Button
            id='ask-us-button'
            type='secondary'
            variant='medium'
            onClick={() => {}}
          >
            Ask Us
          </Button>
        </div>

        <div className={'flex-1 flex justify-end'}>
          <div
            className={cx('w-[412px] bg-white/5 px-9 pt-12 pb-9 rounded-md')}
          >
            <div className={cx('grid grid-cols-2 gap-x-4 gap-y-7 mb-7')}>
              <TextInput
                id='name-input'
                name='nameInput'
                label='Name'
                value={''}
                onChange={() => {}}
              />
              <TextInput
                id='email-input'
                type='email'
                name='emailInput'
                label='Email'
                value={''}
                onChange={() => {}}
              />
              <TextInput
                id='company-input'
                name='companyInput'
                label='Company'
                value={''}
                onChange={() => {}}
              />
              <TextInput
                id='company-size-input'
                name='companySizeInput'
                label='Company Size'
                value={''}
                onChange={() => {}}
              />
            </div>

            <TextArea
              id='tell-us-your-problem-input'
              name='tellUsYourProblemInput'
              label='Tell Us Your Problem'
              value={''}
              wrapperClassName='mb-7'
              onChange={() => {}}
            />

            <Button
              id='send-quote-button'
              type='primary'
              variant='medium'
              customClassName={'w-full'}
              onClick={() => {}}
            >
              Send Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
