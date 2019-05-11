import React from 'react';
import ClickOutside from 'react-click-outside';

import './App.css';
import Questions from './Questions';
import SideQuestions from './SideQuestions';

import initial_state from "./initial_state";

import update from 'immutability-helper';

class App extends React.Component {

  state = initial_state;

  toggleFilter = (questionId, filter_id) => {
    // const question = this.state.questions[questionId].type_filters.map(
    //   type_f => {
    //     if (type_f.id === filter_id) {
    //       return { ...type_f, switch: !type_f.switch };
    //     }
    //     return type_f;
    //   }
    // );
    // this.setState(
    //   update(this.state, {
    //     questions: {
    //       [questionId]: {
    //         type_filters: { $set: question }
    //       }
    //     }
    //   })
    // );
    const prevSwitch = this.state.questions[questionId].type_filters[filter_id].switch;

    this.setState(
      update(this.state, {
        questions: {
          [questionId]: {
            type_filters: {
              [filter_id]: {
                switch: { $set: !prevSwitch }
              }
            }
          }
        }
      })
    );
  };

  onClickOutside = () => {
      this.setState({ expanded: false });
  }
  onToggle = (expanded) => {
    this.setState({ expanded });
  }

  render() {
    return (
      <div className="App">
        <ClickOutside
          onClickOutside={this.onClickOutside}
        >
          <SideQuestions questions={this.state.questions} onToggle={this.onToggle}  expanded={this.state.expanded}/>

        </ClickOutside>
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
