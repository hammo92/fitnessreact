import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';
import FitnessHeader from '../global/FitnessHeader';
import FitnessNav from '../global/FitnessNav';

class NutritionMeal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todaysMeal, mealPlanStatus } = this.props;
        return (
            <div className="fitness-nutrition">
                <FitnessHeader />
                <FitnessNav />
                <section className="body-wrap">
                    <div className="body-head d-flex justify-content-start">
                        <div className="body-head-l">
                            <h2>nutrition</h2>
                            <p>Your meal plan is balanced and tailored to provide the right mix for your goal. For your fitness assistant
                                to provide the best meal plans make sure you rate recipes you like. You can further fine tune the meals
                                selected for you by changing your nutrition settings. </p>
                        </div>
                        <div className="body-head-r ml-auto">

                            <NavLink
                                activeClassName='active'
                                className='pink-btn'
                                exact
                                to={routeCodes.NUTRITIONSHOP}
                            >
                                <span>Shopping List</span>
                                <i className="icon-shopping_cart"></i>
                            </NavLink>

                            <NavLink
                                activeClassName='active'
                                className='white-btn'
                                exact
                                to={routeCodes.NUTRITIONPREFERENCE}
                            >
                                <span>Nutrition Settings</span>
                                <i className="icon-settings"></i>
                            </NavLink>
                        </div>
                    </div>
                    <div className="body-content d-flex row justify-content-start">
                        <div className="col-md-8">
                            <div className="white-box">
                                <div className="whitebox-head d-flex profile-head">
                                    <h3 className="title-h3 size-14">Today's Meals</h3>
                                    <div className="whitebox-head-r">
                                        <a href="" className="green-blue">
                                            Add meal<i className="icon-control_point"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="whitebox-body">
                                    {!todaysMeal &&
                                        <span>No meals found.</span>
                                    }
                                    {todaysMeal && todaysMeal.length <= 0 &&
                                        <span>No meals found.</span>
                                    }
                                    {todaysMeal && todaysMeal.length > 0 &&
                                        todaysMeal.map((meal, index) => (
                                            <div className="meal-wrap d-flex">
                                                <div className="meal-img">
                                                    <img src="" alt="" />
                                                </div>
                                                <div className="meal-name">
                                                    <small>Day Drive</small>
                                                    <h5>Title</h5>
                                                </div>
                                                <div className="meal-info">
                                                    <small>Cals</small>
                                                    <big>Cals</big>
                                                </div>
                                                <div className="meal-info">
                                                    <small>Protein</small>
                                                    <big>Protein</big>
                                                </div>
                                                <div className="meal-info">
                                                    <small>Fat</small>
                                                    <big>Fat</big>
                                                </div>
                                                <div className="meal-info">
                                                    <small>Carbs</small>
                                                    <big>Carbs</big>
                                                </div>
                                                <div className="meal-info">
                                                    <a href="">
                                                        <i className="icon-more_horiz"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="recipe-nutrition white-box">
                                <div className="whitebox-head meal-paln">
                                    <h3 className="title-h3 size-14">Meal Plan Stats</h3>
                                </div>
                                <div className="whitebox-body">
                                    <div className="dtl-div">
                                        {!mealPlanStatus &&
                                            <span>No meal plan statistics found.</span>
                                        }
                                        {mealPlanStatus && mealPlanStatus.length <= 0 &&
                                            <span>No meal plan statistics found.</span>
                                        }
                                        {mealPlanStatus && mealPlanStatus.length > 0 &&
                                            <ul className="common-ul">
                                                {
                                                    mealPlanStatus.map((mealPlanStat, index) => (
                                                        <li>
                                                            <div className="grey-white">
                                                                <h4>Title</h4>
                                                                <h5>
                                                                    Value
                                                                    <sub>Units</sub>
                                                                </h5>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                    <div className="nutrition-chart">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default connect()(NutritionMeal);