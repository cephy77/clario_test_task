import { Button } from '../Button';
import style from './style.module.scss';

export const Banner = () => {

  return (
    <article className={style.banner}>
      <div className={style.bannerContent}>

        <h2 className={style.bannerHeading}>
          Lorem ipsum dolor sit amet, <span className={style.bannerHeadingAccent}>consectetur</span> adipiscing elit.
        </h2>

        <p className={style.bannerText}>Sed pellentesque, lectus ut convallis vestibulum, metus urna blandit arcu, vitae malesuada tellus augue non diam.</p>

        <div className={style.bannerButton}>
          <Button>Download</Button>
        </div>
      </div>
    </article>
  )
}