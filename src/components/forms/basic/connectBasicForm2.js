import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import BasicFormComponent from './BasicFormComponent';
import withReduxForm from 'eventbrite_design_system/form/withReduxForm';

export default flowRight(
    connect(
        (state) => ({hasUpdated: new Date().getTime()})
    ),
    withReduxForm({
        form: 'basic2'
    })
)(BasicFormComponent);
