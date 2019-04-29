import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import AdminHeader from '../../components/Admin/Template/AdminHeader';
import AdminNav from '../../components/Admin/Template/AdminNav';
import { adminRouteCodes } from '../../constants/adminRoutes';
import BodyPartsListing from '../../components/Admin/BodyParts/BodyPartsListing';

class BodyParts extends Component {

    componentWillMount() {
        // change title 
        document.title = "Body Parts";
    }

    render() {
        return (
            <div className="admin-dashboard-wrapper">
                <AdminHeader />
                <AdminNav />
                <section className="body-wrap">
                    <Switch>
                        <Route exact path={adminRouteCodes.BODY_PARTS} component={BodyPartsListing} />
                    </Switch>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
}

export default connect(
    mapStateToProps,
)(BodyParts);