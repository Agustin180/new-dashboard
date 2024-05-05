
//          ICONS           //

//          WHITEMODE           //
import Logo from './assets/whitemode/Logowhite.svg';
import Hamburgerwhite from './assets/whitemode/Hamburgerwhite.svg';
import Arrowdownwhite from './assets/whitemode/Arrowdownwhite.svg';
import Dashboard from './assets/whitemode/Dashboardwhite.svg';
import Createcasewhite from './assets/whitemode/Createcasewhite.svg';
import Taskwhite from './assets/whitemode/Taskwhite.svg';
import Caselistwhite from './assets/whitemode/Caselistwhite.svg';
import Availablewhite from './assets/whitemode/Availablewhite.svg';
import Attendingwhite from './assets/whitemode/Attendingwhite.svg';
import Backofficewhite from './assets/whitemode/Backofficewhite.svg';
import Teachwhite from './assets/whitemode/Teachwhite.svg';
import Breakwhite from './assets/whitemode/Breakwhite.svg';
import Avatar01 from './assets/Avatar_01.png';

//          BLACKMODE           //


//          STYLE           //
import './Sidebar.css';

//          HOOKS            //
import { useState } from 'react';

function Sidebar() {
    const [closestatusmodal, setCloseStatusModal] = useState(false)

    return (
        <div className='s1-sidebar-totalmain'>
            <div className='s1-sidebar-main'>
                <div className='s1-sidebar-menu-logo-content'>
                    <img src={Logo} />
                    <div className='s1-sidebar-menu'>
                        <img src={Hamburgerwhite} />
                    </div>
                </div>
                <div className='s1-sidebar-totalprofile'>
                    <div className='s1-sidebar-profile'>
                        <img src={Avatar01} width={50} />
                        <div>
                            <p className='s1-sidebar-profile-name'>Agustin Cortazzi</p>
                            <p className='s1-sidebar-profile-rol'>Agente, Claro AR</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='s1-sidebar-list'>
                    <div>
                        <div className='s1-sidebar-list-status' onClick={() => setCloseStatusModal(!closestatusmodal)}>
                            <div className='s1-sidebar-list-icontatus'>
                                <img src={Backofficewhite} width={26} />
                            </div>
                            <div className='s1-sidebar-list-status-substatus'>
                                <p>Backoffice</p>
                                <div className='s1-sidebar-list-status-time'>
                                    <p>4h 38m 21s</p>
                                </div>
                            </div>
                            <img className='s1-sidebar-list-arrowicon' src={Arrowdownwhite} width={16} />
                        </div>
                        {closestatusmodal === true ? (
                            <div className='s1-sidebar-modal-status'>
                                <div className='s1-sidebar-list-status-item-available'>
                                    <div className='s1-sidebar-list-icontatus'>
                                        <img src={Availablewhite} width={28} />
                                    </div>
                                    <div className='s1-sidebar-list-status-substatus'>
                                        <p>Disponible</p>
                                        <div className='s1-sidebar-list-status-time'>
                                            <p>4h 38m 21s</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='s1-sidebar-list-status-item-attending'>
                                    <div className='s1-sidebar-list-icontatus'>
                                        <img src={Attendingwhite} width={25} />
                                    </div>
                                    <div className='s1-sidebar-list-status-substatus'>
                                        <p>Atendiendo</p>
                                        <div className='s1-sidebar-list-status-time'>
                                            <p>4h 38m 21s</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='s1-sidebar-list-status-item-teach'>
                                    <div className='s1-sidebar-list-icontatus'>
                                        <img src={Teachwhite} width={23} />
                                    </div>
                                    <div className='s1-sidebar-list-status-substatus'>
                                        <p>Coach</p>
                                        <div className='s1-sidebar-list-status-time'>
                                            <p>4h 38m 21s</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='s1-sidebar-list-status-item-break'>
                                    <div className='s1-sidebar-list-icontatus'>
                                        <img src={Breakwhite} width={30} />
                                    </div>
                                    <div className='s1-sidebar-list-status-substatus'>
                                        <p>Break</p>
                                        <div className='s1-sidebar-list-status-time'>
                                            <p>4h 38m 21s</p>
                                        </div>
                                    </div>
                                </div>
                            </div>) : ''
                        }
                    </div>
                    <div className='s1-sidebar-list-subcontent'><img src={Dashboard} width={26} /><p>Dashboard</p></div>
                    <div className='s1-sidebar-list-subcontent'><img src={Createcasewhite} width={26} /><p>Crear Caso</p></div>
                    <div className='s1-sidebar-list-subcontent'><img src={Taskwhite} width={26} /><p>Mis Casos</p></div>
                    <div className='s1-sidebar-list-subcontent'><img src={Caselistwhite} width={22} /><p>Lista de Casos</p></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;