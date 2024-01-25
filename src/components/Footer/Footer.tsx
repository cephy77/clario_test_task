import style from './style.module.scss';


export const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        <span>About</span>
        <span>Privacy Notice</span>
        <span>Company</span>
        <span>EULA</span>
        <span>Support</span>
        <span>Uninstall</span>
        <span>Cookie Policy</span>
        <span>Refund Policy</span>
      </p>
      <p className={style.footerCopyright}>
        Copyright © All rights reserved.
      </p>
    </footer>
  )
}