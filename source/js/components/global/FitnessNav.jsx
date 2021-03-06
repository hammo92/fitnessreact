import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';

import FaDashboard from 'react-icons/lib/md/dashboard';
import FaPie from 'react-icons/lib/fa/pie-chart';
import FaUser from 'react-icons/lib/fa/user';
import FaFitness from 'react-icons/lib/md/fitness-center';
import FaNutrition from 'react-icons/lib/md/local-restaurant';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaGoal from 'react-icons/lib/fa/bullseye';

export default class FitnessNav extends Component {
 
    render() {
        return (
            <div className='Menu'>
                <nav className="navigation" id="navigation">
                    <ul>
                        <li>
                            <NavLink
                                activeClassName='active'
                                className='Menu-link'
                                exact
                                to={ routeCodes.DASHBOARD }
                            >
                                <i className="icon-dashboard"></i>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName='active'
                                className='Menu-link'
                                exact
                                to={ routeCodes.STATSPAGE }
                            >
                                <i className="icon-pie_chart"></i>
                                <span>Stats</span> 
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                activeClassName='active'
                                className='Menu-link'
                                exact
                                to={ routeCodes.FITNESSBODY }
                            >
                                <i className="icon-person"></i>
                                 <span>Body</span> 
                            </NavLink>
                        </li>


                        <li>
                           <NavLink
                                activeClassName='active'
                                className='Menu-link'
                                exact
                                to={ routeCodes.EXERCISE }
                            >
                                <i className="icon-fitness_center"></i>
                                <span>Exercise</span>
                            </NavLink>
                        </li>

                        <li>
                           <NavLink
                                activeClassName='active'
                                className='Menu-link'
                                exact
                                to={ routeCodes.NUTRITIONMEAL }
                            >
                                <FaNutrition size={24} />
                                <span>Nutrition</span>
                            </NavLink>
                        </li>
                        <li>                            
                            <NavLink
                                activeClassName='active'
                                className='Menu-link'
                                exact
                                to={ routeCodes.CALENDAR }
                            >
                                <i className="icon-insert_invitation"></i>
                                <span>Calendar</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName='active'
                                className='Menu-link'
                                exact
                                to={ routeCodes.GOALS }
                            >
                                <FaGoal size={24} />
                                <span>Goals</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                activeClassName='active'
                                className='Menu-link'
                                exact
                                to={ routeCodes.HOME }
                            >
                                <i className="icon-dashboard"></i>
                                Home
                            </NavLink>
                        </li>

                         <li>
                            <NavLink
                                activeClassName='active'
                                className='Menu-link'
                                exact
                                to={ routeCodes.PEOPLE }
                            >
                                <i className="icon-person"></i>
                                People
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
        );
    }
}
