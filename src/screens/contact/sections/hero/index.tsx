import cx from 'classnames';
import Image from 'next/image';

import {
  Button,
  TextArea,
  TextInput,
  Typography,
} from '@/components'

import {contacts} from '@/data';

const Hero = () => {
  return (
    <div className={cx('px-52 pt-24 pb-32 relative')}>
      {/* Glassmorphism effect */}
      <div className={cx('glass-effect glass-effect-secondary01')}></div>
      <div className={cx('glass-effect glass-effect-primary03')}></div>
      <div className={cx('glass-effect glass-effect-secondary03')}></div>

      <div className={cx('flex items-center justify-between')}>
        <div className={cx('flex-1')}>
          <Typography variant='textBase' customClassName='!font-semibold !text-primary03 tracking-widest mb-3'>
            CONTACT
          </Typography>

          <Typography variant='text4Xl' customClassName='mb-12'>
            We love receiving messages <br />
            from you, we are waiting <br />
            for it.
          </Typography>
          
          <div className={cx('grid gap-8')}>
            {contacts.map((contact, index) => {
              return (
                <div key={index} className={cx('flex items-center gap-7')}>
                  <div className={cx('flex items-center justify-center w-[70px] h-[70px] rounded-md bg-white/5')}>
                    <Image
                      width={30}
                      height={30}
                      src={contact.icon}
                      alt={contact.icon}
                    />
                  </div>
                  <div>
                    <Typography variant='textBase'>
                      {contact.type}
                    </Typography>
                    <Typography variant='textXl'>
                      {contact.value}
                    </Typography>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className={'flex-1 flex justify-end'}>
          <div className={cx('w-[412px] bg-white/5 px-9 pt-12 pb-9 rounded-md')}>
            <div className={cx('flex items-center  gap-x-4 mb-7')}>
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
            </div>

            <TextInput
              id='subject-input'
              name='subjectInput'
              label='Subject'
              value={''}
              wrapperClassName='mb-7'
              onChange={() => {}}
            />

            <TextArea
              id='message-input'
              name='messageInput'
              label='Message'
              value={''}
              wrapperClassName='mb-7'
              onChange={() => {}}
            />

            <Button
              id='send-message-button'
              type='primary'
              variant='medium'
              customClassName={'w-full'}
              onClick={() => {}}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero