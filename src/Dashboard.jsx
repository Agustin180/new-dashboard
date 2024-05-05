
//          ICONS               //

//          WHITEMODE           //
import Connectedwhite from './assets/whitemode/Connectedwhite.svg';
import Availabledashboardwhite from './assets/whitemode/Availabledashboardwhite.svg';
import Attendingdashboardwhite from './assets/whitemode/Attendingdashboardwhite.svg';
import Backofficedashboardwhite from './assets/whitemode/Backofficedashboardwhite.svg';
import Teachdashboardwhite from './assets/whitemode/Teachdashboardwhite.svg';
import Breakdashboardwhite from './assets/whitemode/Breakdashboardwhite.svg';
import Pickcasewhite from './assets/whitemode/Pickcasewhite.svg';
import Lexiwhite from './assets/whitemode/Lexiwhite.jpg';
import Enabledemail from './assets/whitemode/enabledemail.svg';
import Enabledinstagram from './assets/whitemode/enabledinstagram.svg';
import Enabledtwitter from './assets/whitemode/enabledtwitter.svg';
import Enabledwhatsapp from './assets/whitemode/enabledwhatsapp.svg';
import Avatar02 from './assets/Avatar_02.png';
import Avatar03 from './assets/Avatar_03.png';
import Avatar04 from './assets/Avatar_04.png';
import Avatar05 from './assets/Avatar_05.png';
import Avatar06 from './assets/Avatar_06.png';

//          BLACKMODE           //


//          STYLE               //
import './Dashboard.css';

//          LIBRARIES              //
import Barchart from './Barchart';
import Pie from './Pie';

//          HOOKS               //
import { useState } from 'react';

function Dashboard() {

    return (
        <div className='s1-dashboard-main'>
            <div className='s1-dashboard-separation'>
                <div className='s1-dashboard-totalseparation'>
                    <div className='s1-dashboard-card-totalcontent'>
                        <div className='s1-dashboard-card'>
                            <div className='s1-dashboard-content'>
                                <div className='s1-dashboard-card-icon-connected'>
                                    <img src={Connectedwhite} width={30} />
                                </div>
                                <p className='s1-dashboard-card-text-connected'>Conectado</p>
                            </div>
                            <div className='s1-dashboard-subcontent'>
                                <p className='s1-dashboard-card-time'>01:42:09</p>
                                <p className='s1-dashboard-card-details'>Tiempo conectado en S1</p>
                            </div>
                        </div>
                        <div className='s1-dashboard-card'>
                            <div className='s1-dashboard-content'>
                                <div className='s1-dashboard-card-icon-connected'>
                                    <img src={Availabledashboardwhite} width={25} />
                                </div>
                                <p className='s1-dashboard-card-text-connected'>Disponible</p>
                            </div>
                            <div className='s1-dashboard-subcontent'>
                                <p className='s1-dashboard-card-time'>01:42:09</p>
                                <p className='s1-dashboard-card-details'>Tiempo disponible en S1</p>
                            </div>
                        </div>
                        <div className='s1-dashboard-card'>
                            <div className='s1-dashboard-content'>
                                <div className='s1-dashboard-card-icon-connected'>
                                    <img src={Attendingdashboardwhite} width={25} />
                                </div>
                                <p className='s1-dashboard-card-text-connected'>Atendiendo</p>
                            </div>
                            <div className='s1-dashboard-subcontent'>
                                <p className='s1-dashboard-card-time'>01:42:09</p>
                                <p className='s1-dashboard-card-details'>Tiempo atendiendo en S1</p>
                            </div>
                        </div>
                        {/* <div className='s1-dashboard-card'>
                                <div className='s1-dashboard-content'>
                                    <div className='s1-dashboard-card-icon-connected'>
                                        <img src={Backofficedashboardwhite} width={25} />
                                    </div>
                                    <p className='s1-dashboard-card-text-connected'>Backoffice</p>
                                </div>
                                <div className='s1-dashboard-subcontent'>
                                    <p className='s1-dashboard-card-time'>01:42:09</p>
                                    <p className='s1-dashboard-card-details'>Tiempo de backoffice en S1</p>
                                </div>
                            </div> */}
                        <div className='s1-dashboard-card'>
                            <div className='s1-dashboard-content'>
                                <div className='s1-dashboard-card-icon-connected'>
                                    <img src={Breakdashboardwhite} width={25} />
                                </div>
                                <p className='s1-dashboard-card-text-connected'>Break</p>
                            </div>
                            <div className='s1-dashboard-subcontent'>
                                <p className='s1-dashboard-card-time'>01:42:09</p>
                                <p className='s1-dashboard-card-details'>Tiempo de break en S1</p>
                            </div>
                        </div>
                    </div>
                    <div className='s1-dashboard-charts-content'>
                        <div className='s1-dashboard-chart-totalcontent'>
                            <div className='s1-dashboard-chart-subcontent-select'>
                                <p>Desempeño</p>
                                <select className='s1-dashboard-chart-select'>
                                    <option>NPS Diario</option>
                                    <option>NPS Semanal</option>
                                    <option>NPS Mensual</option>
                                    <option>NPS Anual</option>
                                </select>
                            </div>
                            <div className='s1-dashboard-chart-bar-content'>
                                <Barchart />
                            </div>
                        </div>
                        <div className='s1-dashboard-chart-totalcontent'>
                            <div className='s1-dashboard-chart-subcontent-status'>
                                <p>Equipo</p>
                                <p className='s1-dashboard-chart-time'>Status</p>
                            </div>
                            <div className='s1-dashboard-table-content-users'>
                                <div className='s1-dashboard-table-subcontent'>
                                    <div className='s1-dashboard-table-divider'>
                                        <img src={Avatar02} width={50} />
                                        <div className='s1-dashboard-table-subdivider'>
                                            <p className='s1-dashboard-table-name'>Steve Blake</p>
                                            <p>Supervisor, Claro AR</p>
                                        </div>
                                    </div>
                                    <p className='s1-dashboard-table-status-available'>Disponible</p>
                                </div>
                                <div className='s1-dashboard-table-subcontent'>
                                    <div className='s1-dashboard-table-divider'>
                                        <img src={Avatar06} width={50} />
                                        <div className='s1-dashboard-table-subdivider'>
                                            <p className='s1-dashboard-table-name'>Carol Paul</p>
                                            <p>Agente, Claro AR</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='s1-dashboard-table-status-break'>Break</p>
                                    </div>
                                </div>
                                <div className='s1-dashboard-table-subcontent'>
                                    <div className='s1-dashboard-table-divider'>
                                        <img src={Avatar05} width={50} />
                                        <div className='s1-dashboard-table-subdivider'>
                                            <p className='s1-dashboard-table-name'>Billy Grant</p>
                                            <p>Agente, Claro AR</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='s1-dashboard-table-status-attending'>Atendiendo</p>
                                    </div>
                                </div>
                                <div className='s1-dashboard-table-subcontent'>
                                    <div className='s1-dashboard-table-divider'>
                                        <img src={Avatar03} width={50} />
                                        <div className='s1-dashboard-table-subdivider'>
                                            <p className='s1-dashboard-table-name'>Mark Obrien</p>
                                            <p>Supervisor, Claro AR</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='s1-dashboard-table-status-available'>Disponible</p>
                                    </div>
                                </div>
                                <div className='s1-dashboard-table-subcontent'>
                                    <div className='s1-dashboard-table-divider'>
                                        <img src={Avatar04} width={50} />
                                        <div className='s1-dashboard-table-subdivider'>
                                            <p className='s1-dashboard-table-name'>Emily Wilson</p>
                                            <p>Administrador, Claro AR</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='s1-dashboard-table-status-coach'>Coaching</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='s1-dashboard-card-totalcontent'>
                        <div className='s1-dashboard-card'>
                            <div className='s1-dashboard-content'>
                                <div className='s1-dashboard-card-icon-connected'>
                                    <img src={Connectedwhite} width={30} />
                                </div>
                                <p className='s1-dashboard-card-text-connected'>AHT</p>
                            </div>
                            <div className='s1-dashboard-subcontent'>
                                <p className='s1-dashboard-card-time'>00:03:04</p>
                                <p className='s1-dashboard-card-details'>00:04:12</p>
                                <p className='s1-dashboard-card-details'>Promedio de respuesta</p>
                            </div>
                        </div>
                        <div className='s1-dashboard-card'>
                            <div className='s1-dashboard-content'>
                                <div className='s1-dashboard-card-icon-connected'>
                                    <img src={Availabledashboardwhite} width={25} />
                                </div>
                                <p className='s1-dashboard-card-text-connected'>ART</p>
                            </div>
                            <div className='s1-dashboard-subcontent'>
                                <p className='s1-dashboard-card-time'>00:05:09</p>
                                <p className='s1-dashboard-card-details'>00:06:15</p>
                                <p className='s1-dashboard-card-details'>Promedio de handling</p>
                            </div>
                        </div>
                        <div className='s1-dashboard-card'>
                            <div className='s1-dashboard-content'>
                                <div className='s1-dashboard-card-icon-connected'>
                                    <img src={Attendingdashboardwhite} width={25} />
                                </div>
                                <p className='s1-dashboard-card-text-connected'>Casos atendidos</p>
                            </div>
                            <div className='s1-dashboard-subcontent'>
                                <p className='s1-dashboard-card-time'>18</p>
                                <p className='s1-dashboard-card-details'>Casos atendidos en el dia</p>
                            </div>
                        </div>
                        <div className='s1-dashboard-card'>
                            <div className='s1-dashboard-content'>
                                <div className='s1-dashboard-card-icon-connected'>
                                    <img src={Breakdashboardwhite} width={25} />
                                </div>
                                <p className='s1-dashboard-card-text-connected'>Casos resueltos</p>
                            </div>
                            <div className='s1-dashboard-subcontent'>
                                <p className='s1-dashboard-card-time'>25</p>
                                <p className='s1-dashboard-card-details'>Casos resueltos en el dia</p>
                            </div>
                        </div>
                    </div>
                    <div className='s1-dashboard-chart-pie-separation'>
                        <div className='s1-dashboard-chart-totalcontent'>
                            <div className='s1-dashboard-chart-subcontent-title'>
                                <div className='s1-dashboard-chart-subcontent-pie-title'>
                                    <p>Desempeño del Equipo</p>
                                </div>
                                <p className='s1-dashboard-chart-subcontent-date'>Ult 5 meses</p>
                            </div>
                            <div className='s1-dashboard-chart-pie-totalcontent'>
                                <div className='s1-dashboard-chart-pie'>
                                    <Pie />
                                </div>
                                <div>
                                    <p className='s1-dashboard-chart-pie-cases'>Total casos: <p className='s1-dashboard-chart-pie-number'>100</p></p>
                                    <div className='s1-dashboard-chart-pie-content'>
                                        <div className='s1-dashboard-chart-pie-subcontent'>
                                            <div className='s1-dashboard-chart-pie-divider'>
                                                <div className='s1-dashboard-chart-pie-color-green'>
                                                </div>
                                                <p>Enero</p>
                                            </div>
                                            <p>10</p>
                                        </div>
                                        <div className='s1-dashboard-chart-pie-subcontent'>
                                            <div className='s1-dashboard-chart-pie-divider'>
                                                <div className='s1-dashboard-chart-pie-color-blue'>
                                                </div>
                                                <p>Febrero</p>
                                            </div>
                                            <p>20</p>
                                        </div>
                                        <div className='s1-dashboard-chart-pie-subcontent'>
                                            <div className='s1-dashboard-chart-pie-divider'>
                                                <div className='s1-dashboard-chart-pie-color-red'>
                                                </div>
                                                <p>Marzo</p>
                                            </div>
                                            <p>40</p>
                                        </div>
                                        <div className='s1-dashboard-chart-pie-subcontent'>
                                            <div className='s1-dashboard-chart-pie-divider'>
                                                <div className='s1-dashboard-chart-pie-color-purple'>
                                                </div>
                                                <p>Abril</p>
                                            </div>
                                            <p>10</p>
                                        </div>
                                        <div className='s1-dashboard-chart-pie-subcontent'>
                                            <div className='s1-dashboard-chart-pie-divider'>
                                                <div className='s1-dashboard-chart-pie-color-yellow'>
                                                </div>
                                                <p>Mayo</p>
                                            </div>
                                            <p>20</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='s1-dashboard-chart-totalcontent'>
                            <div className='s1-dashboard-chart-subcontent-status'>
                                <p>Casos en espera</p>
                                <p className='s1-dashboard-chart-time'>Canal</p>
                            </div>
                            <div className='s1-dashboard-table-content-chanels'>
                                <div className='s1-dashboard-table-subcontent'>
                                    <div className='s1-dashboard-table-divider'>
                                        <img src={Enabledtwitter} width={35} />
                                        <div className='s1-dashboard-table-subdivider'>
                                            <div className='s1-dashboard-table-content-case'><p className='s1-dashboard-table-name'>Caso: 5402094</p><img src={Pickcasewhite} width={15} className='s1-dashboard-pick-icon'/></div>
                                            <u className='s1-dashboard-table-pickcase'><p>Tomar caso</p></u>
                                        </div>
                                    </div>
                                    <p className='s1-dashboard-table-status-twitter'>Twitter</p>
                                </div>
                                <div className='s1-dashboard-table-subcontent'>
                                    <div className='s1-dashboard-table-divider'>
                                        <img src={Enabledinstagram} width={35} />
                                        <div className='s1-dashboard-table-subdivider'>
                                            <div className='s1-dashboard-table-content-case'><p className='s1-dashboard-table-name'>Caso: 5402094</p><img src={Pickcasewhite} width={15} className='s1-dashboard-pick-icon'/></div>
                                            <u className='s1-dashboard-table-pickcase'><p>Tomar caso</p></u>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='s1-dashboard-table-status-instagram'>Instagram</p>
                                    </div>
                                </div>
                                <div className='s1-dashboard-table-subcontent'>
                                    <div className='s1-dashboard-table-divider'>
                                        <img src={Enabledwhatsapp} width={35} />
                                        <div className='s1-dashboard-table-subdivider'>
                                            <div className='s1-dashboard-table-content-case'><p className='s1-dashboard-table-name'>Caso: 5402094</p><img src={Pickcasewhite} width={15} className='s1-dashboard-pick-icon'/></div>
                                            <u className='s1-dashboard-table-pickcase'><p>Tomar caso</p></u>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='s1-dashboard-table-status-whatsapp'>Whatsapp</p>
                                    </div>
                                </div>
                                <div className='s1-dashboard-table-subcontent'>
                                    <div className='s1-dashboard-table-divider'>
                                        <img src={Enabledtwitter} width={38} />
                                        <div className='s1-dashboard-table-subdivider'>
                                            <div className='s1-dashboard-table-content-case'><p className='s1-dashboard-table-name'>Caso: 5402094</p><img src={Pickcasewhite} width={15} className='s1-dashboard-pick-icon'/></div>
                                            <u className='s1-dashboard-table-pickcase'><p>Tomar caso</p></u>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='s1-dashboard-table-status-twitter'>Twitter</p>
                                    </div>
                                </div>
                                <div className='s1-dashboard-table-subcontent'>
                                    <div className='s1-dashboard-table-divider'>
                                        <img src={Enabledemail} width={35} />
                                        <div className='s1-dashboard-table-subdivider'>
                                            <div className='s1-dashboard-table-content-case'><p className='s1-dashboard-table-name'>Caso: 5402094</p><img src={Pickcasewhite} width={15} className='s1-dashboard-pick-icon'/></div>
                                            <u className='s1-dashboard-table-pickcase'><p>Tomar caso</p></u>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='s1-dashboard-table-status-email'>Email</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='s1-dashboard-notifications-totalcontent'>
                    <div className='s1-dashboard-notification-card'>
                        <div className='s1-dashboard-notification-subcontent'>
                            <div className='s1-dashboard-content-tags'>
                                <p className='s1-dashboard-notification-card-meeting'>Meeting</p>
                            </div>
                            <p className='s1-dashboard-notification-card-details'>Evento proximo: Team review analisis desempeño</p>
                            <p className='s1-dashboard-notification-card-description'>review del desempeño grupal, cambios que ustedes consideren podrian...</p>
                            <div className='s1-dashboard-notification-card-tags'>
                                <div className='s1-dashboard-notification-card-texttags'>
                                    <p>15th Jan</p>
                                </div>
                                <div className='s1-dashboard-notification-card-texttags'>
                                    <p>10:00 - 11:00</p>
                                </div>
                            </div>
                        </div>
                        <div className='s1-dashboard-notification-card-button-content'>
                            <div className='s1-dashboard-notification-card-button'>
                                Google Meeting Link
                            </div>
                        </div>
                    </div>
                    <div className='s1-dashboard-notification-cardnotificacion'>
                        <div className='s1-dashboard-notification-subcontent'>
                            <div className='s1-dashboard-content-tags'>
                                <p className='s1-dashboard-notification-card-notificacion'>Notificacion</p>
                            </div>
                            <p className='s1-dashboard-notification-card-details'>Tienes un caso pendiente</p>
                            <p className='s1-dashboard-notification-card-description'>recordatorio de caso pendiente para la fecha 18th Jan, los casos pendientes...</p>
                            <div className='s1-dashboard-notification-card-tags'>
                                <div className='s1-dashboard-notification-card-texttags'>
                                    <p>18th Jan</p>
                                </div>
                                <div className='s1-dashboard-notification-card-texttags'>
                                    <p>Caso: 5402094</p>
                                </div>
                            </div>
                        </div>
                        <div className='s1-dashboard-notification-card-button-content'>
                            <div className='s1-dashboard-notification-card-button'>
                                Google Meeting Link
                            </div>
                        </div>
                    </div>
                    <div className='s1-dashboard-notification-cardnovedades'>
                        <div className='s1-dashboard-notification-subcontent'>
                            <div className='s1-dashboard-content-tags'>
                                <p className='s1-dashboard-notification-card-novedades'>Novedades</p>
                                <p className='s1-dashboard-notification-card-lex'>Lex</p>
                            </div>
                            <p className='s1-dashboard-notification-card-details'>¡Te presentamos a Lexi!
                            </p>
                            <p className='s1-dashboard-notification-card-description'> Lexi es un bot abierto, que fue creado y configurado
                                gracias a la colaboración...</p>
                            <div className='s1-dashboard-notification-card-tags'>
                                <img src={Lexiwhite} className='s1-dashboard-notification-card-image' />
                            </div>
                        </div>
                        <div className='s1-dashboard-notification-card-button-content'>
                            <div className='s1-dashboard-notification-card-button'>
                                ¡Te invitamos a conversar!
                            </div>
                        </div>
                    </div>
                    <div className='s1-dashboard-notification-cardnotificacion'>
                        <div className='s1-dashboard-notification-subcontent'>
                            <div className='s1-dashboard-content-tags'>
                                <p className='s1-dashboard-notification-card-notificacion'>Notificacion</p>
                            </div>
                            <p className='s1-dashboard-notification-card-details'>Tienes un caso pendiente</p>
                            <p className='s1-dashboard-notification-card-description'>recordatorio de caso pendiente para la fecha 18th Jan, los casos pendientes...</p>
                            <div className='s1-dashboard-notification-card-tags'>
                                <div className='s1-dashboard-notification-card-texttags'>
                                    <p>18th Jan</p>
                                </div>
                                <div className='s1-dashboard-notification-card-texttags'>
                                    <p>Caso: 5402094</p>
                                </div>
                            </div>
                        </div>
                        <div className='s1-dashboard-notification-card-button-content'>
                            <div className='s1-dashboard-notification-card-button'>
                                Google Meeting Link
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;