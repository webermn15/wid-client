import React from 'react';
import { connect } from 'react-redux';
import { setActivities, addActivity, editActivity } from './actions';
import ActivityList from './ActivityList';

const mapDispatchToProps = {
	setActivities,
	addActivity,
	editActivity
}

const mapStateToProps = ({userActivityList}) => {
	return {
		userActivityList
	}
}

const ActivityContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ActivityList);

export default ActivityContainer;