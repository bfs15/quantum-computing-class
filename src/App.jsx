import React from 'react';
import './App.css';
import Questions from './Questions';
import SideQuestions from './SideQuestions';

// Be sure to include styles at some point, probably during your bootstraping
import './react-sidenav.css';

import initial_state from "./initial_state";

import update from 'immutability-helper';

class App extends React.Component {

  state = initial_state;

  toggleFilter = (questionId, filter_id) => {
    const question = this.state.questions[questionId].type_filters.map(
      type_f => {
        if (type_f.id === filter_id) {
          return { ...type_f, switch: !type_f.switch };
        }
        return type_f;
      }
    );

    this.setState(
      update(this.state, {
        questions: {
          [questionId]: {
            type_filters: { $set: question }
          }
        }
      })
    );
  };

  render() {
    return (
      <div className="App">
        <SideQuestions questions={this.state.questions} />
        <Questions
          questions={this.state.questions}
          sidebarExpanded_bool={this.state.sidebarExpanded_bool}
          toggleFilter={this.toggleFilter}
        />
      </div>
    );
  }
}
export default App;
