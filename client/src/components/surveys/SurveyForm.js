import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const Fields = [
  { label: 'Coordinator', name: 'coordinator', novalueError: 'You must provide a coordinator name.' },
  { label: 'Student', name: 'student', novalueError: 'You must provide a student name.' },
  { label: 'Title', name: 'title', novalueError: 'You must provide a title.' },
  { label: 'Body', name: 'body', novalueError: 'You must provide a body value.' },
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
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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

  _.each(Fields, ({ name, novalueError }) => {
    if (!values[name]) {
      errors[name] = novalueError;
    }
  })

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm'
})(SurveyForm);
