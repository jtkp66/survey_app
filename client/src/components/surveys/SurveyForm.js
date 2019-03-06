import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const Fields = [
  { label: 'Coordinator', name: 'coordinator' },
  { label: 'Student', name: 'student' },
  { label: 'Title', name: 'title' },
  { label: 'Body', name: 'body' },
]

class SurveyForm extends Component {
  renderFields() {
    return _.map(Fields, ({ label, name }) => {
      return (
        <Field key={name} label={label} type="text" name={name} component={SurveyField} />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to='/surveys' className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="grey darken-1 accent-4 btn-flat right white-text">
            Next
          <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.coordinator) {
    errors.title = 'You must provide a title';
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm'
})(SurveyForm);
