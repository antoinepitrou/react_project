import React from 'react';
import ReactDOM from 'react-dom';

// Create a component named MessageComponent
var MessageComponent = React.createClass({
  render: function() {
    return (
      <div>{this.props.message}</div>
    );
  }
});

// Render an instance of MessageComponent into document.body
ReactDOM.render(
  <MessageComponent message="Hello!" />,
  document.getElementById('root')
);


var VacancySign = React.createClass({
  render: function() {
    var text;
    if (this.props.hasvacancy) {
      text = "Vacancy"
    }
    else {
      text = "No Vacancy"
    }
    return <div>{text}</div>
   }
});


// Once you create your component, render your component and try both states.
ReactDOM.render(
  <VacancySign hasvacancy={true} />,
  document.getElementById('container')
);
