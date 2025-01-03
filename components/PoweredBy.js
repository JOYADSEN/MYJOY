import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div
      className={`gap-x-1 flex flex-wrap text-sm font-serif ${props.className || ''}`}>
      <span>Mr.</span>
      <a
        href='https://hainasjoy.com'
        className='underline justify-start'>
        HAINASJOYⓇ202412 {siteConfig('VERSION')}
      </a>
      .
    </div>
  )
}
