
//          ICONS           //

//          WHITEMODE           //
import Contactsearchwhite from './assets/whitemode/Contactsearchwhite.svg';
import Contactaddwhite from './assets/whitemode/Contactaddwhite.svg';
import Redtestwhite from './assets/whitemode/Redtestwhite.svg';
import Translationwhite from './assets/whitemode/Translationwhite.svg';
import Searchwhite from './assets/whitemode/Searchwhite.svg';
import Chatwhite from './assets/whitemode/Chatwhite.svg';
import Appswhite from './assets/whitemode/Appswhite.svg';
import Avatar01 from './assets/Avatar_01.png';
import Notificationwhite from './assets/whitemode/Notificationwhite.svg';
import Sunwhite from './assets/whitemode/Sunwhite.svg';
import Moonwhite from './assets/whitemode/Moonwhite.svg';
import Lex from './assets/whitemode/Lex.png';
import Analytics from './assets/whitemode/Analytics.svg';
import Bots from './assets/whitemode/Bots.svg';
import Microservicios from './assets/whitemode/Microservicioswhite.png';

//          BLACKMODE           //


//          STYLE           //
import './Header.css';

//          HOOKS            //
import { useState } from 'react';

function Header() {
    const [searchmodal, setSearchModal] = useState(false)
    const [appsmodal, setAppsModal] = useState(false)
    const [translationmodal, setTranslationModal] = useState(false)

    return (
        <header className='s1-header-main'>
            {/* <div className='s1-header-chat'>
                <img src={Redtestwhite} />
            </div>
            <div className='s1-header-chat'>
                <img src={Contactsearchwhite} />
            </div>
            <div className='s1-header-chat'>
                <img src={Contactaddwhite} />
            </div> */}
            <div className='s1-header-totalcontent'>
                <div className='s1-header-maincontent'>
                    <h2 className='s1-header-title'>Dashboard</h2>
                    <p className='s1-header-day'>13th Jan 2023</p>
                </div>
                <div>
                    <div>
                        <div className='s1-header-search'>
                            <img src={Searchwhite} />
                            <input type='text' placeholder='Search...' className='s1-header-input' onClick={() => setSearchModal(!searchmodal)} />
                        </div>
                        {searchmodal === true ? (
                            <div className='s1-header-searchmodal'>
                                <p id='s1-header-searchmodal-first-text'>Prueba con</p>
                                <p>ID de Caso</p>
                                <p>Contactos</p>
                                <p>Menciones</p>
                            </div>
                        ) : ''
                        }
                    </div>
                </div>
            </div>
            <div className='s1-header-subcontent'>
                <div className='s1-header-theme'>
                    <div className='s1-header-themewhite'>
                        <img src={Sunwhite} />
                    </div>
                    <div className='s1-header-themeblack'>
                        <img src={Moonwhite} />
                    </div>
                </div>
                {/* <div className='s1-header-chat'>
                    <img src={Chatwhite} />
                </div>
                <div className='s1-header-notification'>
                    <img src={Notificationwhite} />
                </div> */}
                <div>
                    <div className='s1-header-notification' onClick={() => setTranslationModal(!translationmodal)}>
                        <img src={Translationwhite} />
                    </div>
                    {translationmodal === true ? (
                        <div className='s1-header-translationmodal'>
                            <p>ESP</p>
                            <p>ENG</p>
                            <p>POR</p>
                        </div>
                    ) : ''
                    }
                </div>

                <div className='s1-header-apps'>
                    <div>
                        <img src={Appswhite} onClick={() => setAppsModal(!appsmodal)} />
                    </div>
                    {appsmodal === true ? (
                        <div className='s1-header-app-modal'>
                            <div className='s1-header-modal-bots'>
                                <img src={Bots} width={40} />
                                <p>Bot Admin</p>
                            </div>
                            <div className='s1-header-modal-analytics'>
                                <img src={Analytics} width={40} />
                                <p>Analytics</p>
                            </div>
                            <div className='s1-header-modal-lex'>
                                <img src={Lex} width={40} />
                                <p>Lex</p>
                            </div>
                            <div className='s1-header-modal-microservicios'>
                                <img src={Microservicios} width={40} />
                                <p>Conectividad</p>
                            </div>
                        </div>
                    ) : ''}
                </div>
                <img src={Avatar01} width={40} />
            </div>
        </header>
    )
}
export default Header;