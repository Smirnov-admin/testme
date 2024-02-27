import { useState } from 'react'
import './Header.css'
import { Theme, useThemeContext } from '../../provider/ThemeProvider';

function Header() {

    const [isActiveBurgerMenu, setActiveBurgerMenu] = useState(false);

    const {theme,  setTheme} = useThemeContext();

    function toggleTheme() {
      setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

    const burgerMenuActive = isActiveBurgerMenu ? 'active' : '';

    const clickOpenBurgerMenu = () => {
        setActiveBurgerMenu(!isActiveBurgerMenu);
    };

  return (
    <>
        <section className='header_section'>
            <div className="header_elements">
                <div className="header_BurgerMenu">
                <button onClick={clickOpenBurgerMenu} className={`menu_btn ${burgerMenuActive}`}>
                    <span />
                    <span />
                    <span />
                </button>
                </div>
                <div className="header_SignInAndSearch">
                    <div className="header_search">
                        <button className='bnt_search'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20 20L16 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="header_authorization">
                        <a href='<SignIn/>' className='btn_signIn'>
                        <svg className='icon_signIn' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div className="header_BurgerMenu_list">
            <div className="header_BurgerMenu_userName">
                <p className='header_BurgerMenu_userName_text'>Kirll Smirnov</p>
            </div>
            <ul className='header_BurgerMenu_navigation_list'>
                <li className='header_BurgerMenu_navigation'><a href="">Posts</a></li>
            </ul>
            <div className="header_BurgerMenu_theme">
                <button onClick={toggleTheme} className='header_BurgerMenu_theme_dark'>
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.27767 2.43835C4.41967 3.47235 2.32467 6.08235 2.03367 9.22535C1.62867 13.6184 4.87167 17.5214 9.26467 17.9274C11.3867 18.1264 13.4677 17.4794 15.1127 16.1154C16.2237 15.1914 17.0477 14.0124 17.5247 12.6894C15.0557 13.5924 12.2557 13.2274 10.0467 11.5934C7.13667 9.44335 6.10667 5.67935 7.27767 2.43835ZM10.0178 19.9623C9.70682 19.9623 9.39382 19.9483 9.08082 19.9193C3.58982 19.4113 -0.464179 14.5323 0.0428208 9.04229C0.485821 4.24829 4.28682 0.447292 9.08082 0.00429201C9.46782 -0.032708 9.84982 0.165292 10.0438 0.508292C10.2368 0.852292 10.2108 1.27729 9.97682 1.59429C8.00982 4.25429 8.57482 8.01929 11.2348 9.98529C13.3688 11.5633 16.2358 11.5623 18.3678 9.98529C18.6848 9.75129 19.1098 9.72529 19.4538 9.91829C19.7968 10.1123 19.9948 10.4893 19.9588 10.8813C19.7128 13.5423 18.4458 15.9463 16.3908 17.6533C14.5788 19.1593 12.3438 19.9623 10.0178 19.9623Z" fill="#DADADA" />
                </svg>
                </button>
            </div>
            <div className="header_BurgerMenu_SignIn_item">
                <button className='header_BurgerMenu_btnSignIn'>Sign In</button>
            </div>
        </div>
    </>
  )
}

export default Header