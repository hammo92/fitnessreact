import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { showPageLoader, hidePageLoader } from '../../../actions/pageLoader';
import { reduxForm, Field, FieldArray } from 'redux-form';
import _ from 'lodash';
import { InputField, TextAreaField, FileField_Dropzone, SelectField_ReactSelectMulti, SelectField_ReactSelect, DraftHtmlEditor, StarRating } from '../../../helpers/FormControlHelper';
import { required, requiredReactSelectMulti, requiredReactSelect } from '../../../formValidation/validationRules';
import {
    SERVER_BASE_URL,
    RECIPE_DIFFICULTY_EASY,
    RECIPE_DIFFICULTY_MEDIUM,
    RECIPE_DIFFICULTY_HARD,
    RECIPE_TYPE_VEGETARIAN,
    RECIPE_TYPE_VEGAN,
    RECIPE_TYPE_DAIRY_FREE,
    RECIPE_TYPE_KOSHER,
    RECIPE_TYPE_ISLAM,
    RECIPE_TYPE_COELIAC,
    RECIPE_TYPE_PALEO,
    RECIPE_TYPE_PASCATERIAN
} from '../../../constants/consts';
import { adminRouteCodes } from '../../../constants/adminRoutes';
import { capitalizeFirstLetter, prepareDropdownOptionsData } from '../../../helpers/funs';
import { ingredientListRequest } from '../../../actions/admin/ingredients';
import RecipesNutritions from './RecipesNutritions';
import { nutritionListRequest } from '../../../actions/admin/nutritions';

const difficultyLevelOptions = [
    { value: RECIPE_DIFFICULTY_EASY, label: capitalizeFirstLetter(RECIPE_DIFFICULTY_EASY) },
    { value: RECIPE_DIFFICULTY_MEDIUM, label: capitalizeFirstLetter(RECIPE_DIFFICULTY_MEDIUM) },
    { value: RECIPE_DIFFICULTY_HARD, label: capitalizeFirstLetter(RECIPE_DIFFICULTY_HARD) },
];

const recipeTypeOptions = [
    { value: RECIPE_TYPE_VEGETARIAN, label: capitalizeFirstLetter(RECIPE_TYPE_VEGETARIAN) },
    { value: RECIPE_TYPE_VEGAN, label: capitalizeFirstLetter(RECIPE_TYPE_VEGAN) },
    { value: RECIPE_TYPE_DAIRY_FREE, label: capitalizeFirstLetter(RECIPE_TYPE_DAIRY_FREE) },
    { value: RECIPE_TYPE_KOSHER, label: capitalizeFirstLetter(RECIPE_TYPE_KOSHER) },
    { value: RECIPE_TYPE_ISLAM, label: capitalizeFirstLetter(RECIPE_TYPE_ISLAM) },
    { value: RECIPE_TYPE_COELIAC, label: capitalizeFirstLetter(RECIPE_TYPE_COELIAC) },
    { value: RECIPE_TYPE_PALEO, label: capitalizeFirstLetter(RECIPE_TYPE_PALEO) },
    { value: RECIPE_TYPE_PASCATERIAN, label: capitalizeFirstLetter(RECIPE_TYPE_PASCATERIAN) },
];

class RecipesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initPageDataLoad: false,
            starRating: 0
        };
    }

    componentWillMount() {
        const { dispatch } = this.props;
        this.setState({ initPageDataLoad: true });
        dispatch(showPageLoader());
        dispatch(ingredientListRequest());
        dispatch(nutritionListRequest());
    }

    render() {
        const { handleSubmit, ingredients, nutritions } = this.props;
        const ingredientsOptions = prepareDropdownOptionsData(ingredients, '_id', 'name');
        return (
            <div className="exercise-form-data">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <Field
                                name="name"
                                className="form-control"
                                label="Name"
                                labelClass="control-label"
                                wrapperClass="form-group"
                                placeholder="Name"
                                component={InputField}
                                errorClass=""
                                warningClass=""
                                validate={[required]}
                            />
                            <Field
                                name="description"
                                className="form-control"
                                label="Description"
                                labelClass="control-label"
                                wrapperClass="form-group"
                                placeholder="Description"
                                component={TextAreaField}
                            />
                            <Field
                                name="recipe_img"
                                label="Image"
                                labelClass="control-label"
                                wrapperClass="form-group"
                                placeholder="Images"
                                component={FileField_Dropzone}
                                multiple={false}
                            />
                            <Field
                                name="method"
                                className="form-control"
                                label="Method"
                                labelClass="control-label"
                                wrapperClass="form-group"
                                component={DraftHtmlEditor}
                                editorWrapperClass=""
                                editorClass=""
                                toolbarClass=""
                            />
                            <Field
                                name="ingredients"
                                className="form-control"
                                label="Ingredients"
                                labelClass="control-label"
                                wrapperClass="form-group"
                                component={DraftHtmlEditor}
                                editorWrapperClass=""
                                editorClass=""
                                toolbarClass=""
                            />
                            <Field
                                name="ingredients_included"
                                label="Ingredients Included"
                                labelClass="control-label"
                                wrapperClass="form-group"
                                placeholder="Ingredients Included"
                                component={SelectField_ReactSelectMulti}
                                options={ingredientsOptions}
                                validate={[requiredReactSelectMulti]}
                            />
                            <Field
                                name="preparation_time"
                                className="form-control"
                                label="Preparation Time"
                                labelClass="control-label"
                                wrapperClass="form-group"
                                placeholder="Preparation Time"
                                component={InputField}
                                errorClass=""
                                warningClass=""
                                validate={[required]}
                            />
                            <Field
                                name="cook_time"
                                className="form-control"
                                label="Cook Time"
                                labelClass="control-label"
                                wrapperClass="form-group"
                                placeholder="Cook Time"
                                component={InputField}
                                errorClass=""
                                warningClass=""
                                validate={[required]}
                            />
                            <Field
                                name="difficulty_level"
                                label="Difficulty Level"
                                labelClass="control-label"
                                wrapperClass="form-group"
                                placeholder="Difficulty Level"
                                component={SelectField_ReactSelect}
                                options={difficultyLevelOptions}
                                validate={[requiredReactSelect]}
                            />
                            <Field
                                name="rating"
                                className="form-control"
                                label="Rating"
                                labelClass="control-label"
                                wrapperClass="form-group"
                                component={StarRating}
                                starCount={5}
                                onStarClick={this.changeRate}
                                errorClass=""
                                warningClass=""
                            />
                            <Field
                                name="recipe_type"
                                label="Recipe Type"
                                labelClass="control-label"
                                wrapperClass="form-group"
                                placeholder="Recipe Type"
                                component={SelectField_ReactSelect}
                                options={recipeTypeOptions}
                                validate={[requiredReactSelect]}
                            />

                            <FieldArray
                                name="nutritions"
                                component={RecipesNutritions}
                                nutritions={nutritions}
                            />

                            <div className="col-md-12 mb-20 clear-both">
                                <div className="stepbox-b">
                                    <NavLink to={adminRouteCodes.RECIPES} className="continues-btn">Back</NavLink>
                                    <button type="submit" className="continues-btn"><span>Save</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    componentDidUpdate() {
        const { initPageDataLoad } = this.state;
        const { ingredientsLoading, nutritionsLoading, dispatch } = this.props;
        if (initPageDataLoad && !ingredientsLoading && !nutritionsLoading) {
            this.setState({ initPageDataLoad: false });
            dispatch(hidePageLoader());
        }
    }

    changeRate = (name, value) => {
        this.props.change(name, value);
    }

}

RecipesForm = reduxForm({
    form: 'recipesSaveForm',
    multipartForm: true
})(RecipesForm)

const mapStateToProps = (state) => {
    const { adminRecipes, adminIngredients, adminNutritions } = state;
    return {
        loading: adminRecipes.get('loading'),
        ingredientsLoading: adminIngredients.get('loading'),
        nutritionsLoading: adminNutritions.get('loading'),
        error: adminRecipes.get('error'),
        ingredientsError: adminIngredients.get('error'),
        nutritionsError: adminNutritions.get('error'),
        recipe: adminRecipes.get('recipe'),
        ingredients: adminIngredients.get('ingredients'),
        nutritions: adminNutritions.get('nutritions'),
    };
}

RecipesForm = withRouter(RecipesForm);

export default connect(
    mapStateToProps,
)(RecipesForm);