import cx from 'classnames';
import Image from 'next/image';

import {companyLogos} from '@/data/home'

const SupportedBy = () => {
  return (
    <div className={cx('px-52 mb-28')}>
      <div className={cx('flex items-center justify-center gap-11 border-y border-white/10 py-8')}>
        {companyLogos.map((companyLogo, index) => {
          return (
            <Image
              key={index}
              src={companyLogo.src}
              width={120}
              height={32}
              alt={companyLogo.alt}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SupportedBy