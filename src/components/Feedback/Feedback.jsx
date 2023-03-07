import { Section } from 'components/Section/Section';
import { FeedbackOptions } from './/FeedbackOptions';
import { Component } from 'react';
import css from './/style.module.css';
import { Notification } from './Notification';
import { Statistic } from './Statistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodOpinion = () => {
    this.setState({ good: this.state.good + 1 });
  };
  addNeutralOpinion = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  addBadOpinion = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedback = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    if (total === 0) {
      return 0 + '%';
    } else {
      return Math.round((good / total) * 100) + '%';
    }
  };

  render() {
    const totalCount = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <div className={css.btnBox}>
            <FeedbackOptions
              options={this.addGoodOpinion}
              onLeaveFeedback="good"
            />
            <FeedbackOptions
              options={this.addNeutralOpinion}
              onLeaveFeedback="neutral"
            />
            <FeedbackOptions
              options={this.addBadOpinion}
              onLeaveFeedback="bad"
            />
          </div>
        </Section>
        <Section title="Statistic">
          {totalCount === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalCount}
              positiveFeedback={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
