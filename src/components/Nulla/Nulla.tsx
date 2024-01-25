import { Button } from '../Button';
import girl from '../../assets/girl.svg';
import zoom from '../../assets/zoom.svg';
import style from './style.module.scss';
export const Nulla = () => {
  return (
    <article className={style.nulla}>
      <div className={style.nullaContent}>
        <div>
          <h3 className={style.nullaHeading}>Nulla ligula at tortor eleifend</h3>
          <p className={style.nullaText}>Phasellus finibus arcu sit amet nibh faucibus, id lacinia lacus tincidunt. Proin iaculis risus ut porta accumsan. In volutpat nisl varius, lobortis mauris vitae, interdum arcu. Donec in neque libero. Proin turpis leo, porta eu justo et, lobortis porttitor dui. Quisque interdum, risus vel pretium sollicitudin, enim ipsum tempus neque, a dapibus nibh metus a metus.</p>
          <div className={style.nullaButtons}>
            <Button>Download</Button>
            <Button outlined>Buy Now</Button>
          </div>
        </div>
      </div>

      <div className={style.nullaImages}>
        <img
          className={style.nullaImagesGirl}
          src={girl}
          alt="girl"
        />
        <img
          className={style.nullaImagesZoom}
          src={zoom}
          alt="zoom"
        />
      </div>
    </article>
  );
}