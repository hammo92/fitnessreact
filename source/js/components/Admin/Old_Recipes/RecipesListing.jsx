// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { FaPencil, FaTrash } from 'react-icons/lib/fa';
// import { adminRouteCodes } from '../../../constants/adminRoutes';
// import DTable from '../Common/DTable';
// import {
//     SERVER_BASE_URL,
//     RECIPE_DIFFICULTY_EASY,
//     RECIPE_DIFFICULTY_MEDIUM,
//     RECIPE_DIFFICULTY_HARD,
//     RECIPE_TYPE_VEGETARIAN,
//     RECIPE_TYPE_VEGAN,
//     RECIPE_TYPE_PASCATERIAN,
//     RECIPE_TYPE_PALEO,
//     RECIPE_TYPE_KOSHER,
//     RECIPE_TYPE_ISLAM,
//     RECIPE_TYPE_DAIRY_FREE,
//     RECIPE_TYPE_COELIAC,
// } from '../../../constants/consts';
// import { recipeFilterRequest, recipeDeleteRequest } from '../../../actions/admin/recipes';
// import { capitalizeFirstLetter } from '../../../helpers/funs';
// import DeleteConfirmation from '../Common/DeleteConfirmation';
// import { showPageLoader } from '../../../actions/pageLoader';
// import { ingredientListRequest } from '../../../actions/admin/ingredients';
// import noImg from 'img/common/no-img.png'

// const difficultyOptions = [
//     { value: '', label: 'All' },
//     { value: RECIPE_DIFFICULTY_EASY, label: capitalizeFirstLetter(RECIPE_DIFFICULTY_EASY) },
//     { value: RECIPE_DIFFICULTY_MEDIUM, label: capitalizeFirstLetter(RECIPE_DIFFICULTY_MEDIUM) },
//     { value: RECIPE_DIFFICULTY_HARD, label: capitalizeFirstLetter(RECIPE_DIFFICULTY_HARD) },
// ];

// const recipeTypeOptions = [
//     { value: '', label: 'All' },
//     { value: RECIPE_TYPE_VEGETARIAN, label: capitalizeFirstLetter(RECIPE_TYPE_VEGETARIAN) },
//     { value: RECIPE_TYPE_VEGAN, label: capitalizeFirstLetter(RECIPE_TYPE_VEGAN) },
//     { value: RECIPE_TYPE_DAIRY_FREE, label: capitalizeFirstLetter(RECIPE_TYPE_DAIRY_FREE) },
//     { value: RECIPE_TYPE_KOSHER, label: capitalizeFirstLetter(RECIPE_TYPE_KOSHER) },
//     { value: RECIPE_TYPE_ISLAM, label: capitalizeFirstLetter(RECIPE_TYPE_ISLAM) },
//     { value: RECIPE_TYPE_COELIAC, label: capitalizeFirstLetter(RECIPE_TYPE_COELIAC) },
//     { value: RECIPE_TYPE_PALEO, label: capitalizeFirstLetter(RECIPE_TYPE_PALEO) },
//     { value: RECIPE_TYPE_PASCATERIAN, label: capitalizeFirstLetter(RECIPE_TYPE_PASCATERIAN) },
// ];

// class RecipesListing extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedId: null,
//             showDeleteModal: false,
//             deleteActionInit: false,
//         }
//     }

//     componentDidMount() {
//         const { dispatch } = this.props;
//         dispatch(ingredientListRequest());
//     }


//     filterDTable = (filterData) => {
//         const { dispatch } = this.props;
//         dispatch(recipeFilterRequest(filterData));
//     }

//     render() {
//         const { filteredRecipes, filteredTotalPages, loading, ingredients } = this.props;
//         const { showDeleteModal } = this.state;
//         return (
//             <div className="recipes-listing-wrapper">
//                 <div className="body-head space-btm-45 d-flex justify-content-start">
//                     <div className="body-head-l">
//                         <h2>Recipes</h2>
//                     </div>
//                     <div className="body-head-r">
//                         <NavLink to={adminRouteCodes.RECIPES_SAVE} className="pink-btn">Add Recipe</NavLink>
//                     </div>
//                 </div>

//                 <div className="body-content row d-flex">
//                     <div className="col-md-12">
//                         <div className="white-box">
//                             <div className="whitebox-head">
//                                 <h3 className="title-h3">Recipes</h3>
//                             </div>
//                             <div className="row d-flex whitebox-body">
//                                 <div className="col-md-12">
//                                     <DTable
//                                         data={filteredRecipes}
//                                         columns={[
//                                             {
//                                                 id: 'image',
//                                                 Header: 'Image',
//                                                 accessor: 'image',
//                                                 filterable: false,
//                                                 sortable: false,
//                                                 Cell: (row) => {
//                                                     return (
//                                                         <div className="avatar-wrapper text-center">
//                                                             <img
//                                                                 src={SERVER_BASE_URL + row.value}
//                                                                 alt="Avatar"
//                                                                 className="avatar"
//                                                                 onError={(e) => {
//                                                                     e.target.src = noImg
//                                                                 }}
//                                                             />
//                                                         </div>
//                                                     );
//                                                 }
//                                             },
//                                             {
//                                                 id: 'name',
//                                                 Header: 'Name',
//                                                 accessor: 'name',
//                                             },
//                                             {
//                                                 id: 'ingredientsIncluded',
//                                                 Header: 'Ingredients Included',
//                                                 accessor: 'ingredientsIncluded',
//                                                 filterable: false,
//                                                 sortable: false,
//                                                 Cell: (row) => {
//                                                     let ingreds = [];
//                                                     _.forEach(row.value, (_id) => {
//                                                         const obj = _.find(ingredients, (ing) => {
//                                                             return ing._id === _id;
//                                                         });
//                                                         if (obj) {
//                                                             ingreds.push(obj);
//                                                         }
//                                                     });
//                                                     return (
//                                                         <div className="list-ingredients-wrapper">
//                                                             {ingreds &&
//                                                                 ingreds.map((m, i) => (m.name)).join(',')
//                                                             }
//                                                             {ingreds && ingreds.length <= 0 && <span>-----</span>}
//                                                             {!ingreds && <span>-----</span>}
//                                                         </div>
//                                                     );
//                                                 }
//                                             },
//                                             {
//                                                 id: 'preparationTime',
//                                                 Header: 'Preparation Time',
//                                                 accessor: 'preparationTime',
//                                                 filterDigit: true,
//                                                 Cell: (row) => {
//                                                     return (
//                                                         <div className="list-preparation-time-wrapper">
//                                                             {`${row.value} mins`}
//                                                         </div>
//                                                     );
//                                                 },
//                                             },
//                                             {
//                                                 id: 'cookTime',
//                                                 Header: 'Cook Time',
//                                                 accessor: 'cookTime',
//                                                 filterDigit: true,
//                                                 Cell: (row) => {
//                                                     return (
//                                                         <div className="list-cook-time-wrapper">
//                                                             {`${row.value} mins`}
//                                                         </div>
//                                                     );
//                                                 },
//                                             },
//                                             {
//                                                 id: 'difficultyLevel',
//                                                 Header: 'Difficulty Level',
//                                                 accessor: 'difficultyLevel',
//                                                 filterEqual: true,
//                                                 Cell: (row) => {
//                                                     let dataObj = _.find(difficultyOptions, (o) => {
//                                                         return (o.value === row.value);
//                                                     });
//                                                     return (
//                                                         <div className="list-gender-wrapper">
//                                                             {dataObj && dataObj.value &&
//                                                                 <span>{dataObj.label}</span>
//                                                             }
//                                                         </div>
//                                                     );
//                                                 },
//                                                 Filter: ({ filter, onChange }) => {
//                                                     return (
//                                                         <select
//                                                             onChange={event => onChange(event.target.value)}
//                                                             className="width-100-per"
//                                                             value={filter ? filter.value : "all"}
//                                                         >
//                                                             {difficultyOptions && difficultyOptions.length > 0 &&
//                                                                 difficultyOptions.map((obj, index) => (
//                                                                     <option key={index} value={obj.value}>{obj.label}</option>
//                                                                 ))
//                                                             }
//                                                         </select>
//                                                     );
//                                                 }
//                                             },
//                                             {
//                                                 id: 'recipeType',
//                                                 Header: 'Recipe Type',
//                                                 accessor: 'recipeType',
//                                                 filterable: false,
//                                                 sortable: false,
//                                                 Cell: (row) => {
//                                                     let recTypes = [];
//                                                     _.forEach(row.value, (_id) => {
//                                                         const obj = _.find(recipeTypeOptions, (rec) => {
//                                                             return rec.value === _id;
//                                                         });
//                                                         if (obj) {
//                                                             recTypes.push(obj);
//                                                         }
//                                                     });
//                                                     return (
//                                                         <div className="list-ingredients-wrapper">
//                                                             {recTypes &&
//                                                                 recTypes.map((m, i) => (m.label)).join(',')
//                                                             }
//                                                             {recTypes && recTypes.length <= 0 && <span>-----</span>}
//                                                             {!recTypes && <span>-----</span>}
//                                                         </div>
//                                                     );
//                                                 }
//                                             },
//                                             {
//                                                 Header: "Actions",
//                                                 accessor: "_id",
//                                                 id: "_id",
//                                                 filterable: false,
//                                                 sortable: false,
//                                                 Cell: (row) => {
//                                                     return (
//                                                         <div className="actions-wrapper">
//                                                             <NavLink className="btn btn-primary" to={`${adminRouteCodes.RECIPES_SAVE}/${row.value}`}><FaPencil /></NavLink>
//                                                             <a className="btn btn-danger" href="javascript:void(0)" onClick={() => this.confirmDelete(row.value)}><FaTrash /></a>
//                                                         </div>
//                                                     );
//                                                 }
//                                             },
//                                         ]}
//                                         pages={filteredTotalPages}
//                                         serverloading={loading}
//                                         filterDTable={this.filterDTable}
//                                         defaultSorted={[
//                                             {
//                                                 id: "name",
//                                                 desc: true
//                                             }
//                                         ]}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <DeleteConfirmation
//                     show={showDeleteModal}
//                     handleClose={this.closeDeleteModal}
//                     handleYes={this.handleDelete}
//                 />
//             </div>
//         );
//     }

//     componentDidUpdate() {
//         const { loading, history } = this.props;
//         const { deleteActionInit } = this.state;
//         if (deleteActionInit && !loading) {
//             this.setState({
//                 selectedId: null,
//                 showDeleteModal: false,
//                 deleteActionInit: false
//             });
//             window.location.reload();
//         }
//     }

//     // ----Start funs -----
//     confirmDelete = (_id) => {
//         this.setState({
//             selectedId: _id,
//             showDeleteModal: true
//         });
//     }

//     closeDeleteModal = () => {
//         this.setState({
//             selectedId: null,
//             showDeleteModal: false
//         });
//     }

//     handleDelete = () => {
//         const { selectedId } = this.state;
//         const { dispatch } = this.props;
//         dispatch(showPageLoader());
//         this.setState({
//             deleteActionInit: true
//         });
//         dispatch(recipeDeleteRequest(selectedId));
//     }
//     // ----END funs -----
// }

// const mapStateToProps = (state) => {
//     const { adminRecipes, adminIngredients } = state;
//     return {
//         loading: adminRecipes.get('loading'),
//         error: adminRecipes.get('error'),
//         filteredRecipes: adminRecipes.get('filteredRecipes'),
//         filteredTotalPages: adminRecipes.get('filteredTotalPages'),
//         ingredients: adminIngredients.get('ingredients'),
//     }
// }

// export default connect(mapStateToProps)(RecipesListing);