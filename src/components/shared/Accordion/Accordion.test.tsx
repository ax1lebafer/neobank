import { Accordion } from '@components/shared/Accordion/index';
import { render, screen } from '@testing-library/react';
import styles from './styles.module.scss';
import userEvent from '@testing-library/user-event';

const QUESTION = 'Question';
const ANSWER = 'Answer';

describe('Accordion component', () => {
  it('renders question and is collapsed by default', () => {
    render(<Accordion question={QUESTION} answer={ANSWER} />);

    const questionText = screen.getByText(QUESTION);
    expect(questionText).toBeInTheDocument();

    const answerText = screen.getByText(ANSWER);
    expect(answerText).toBeInTheDocument();

    const container = questionText.closest(`.${styles.accordion}`);
    expect(container).not.toHaveClass(styles.accordion__open);
  });

  it('expands and collapses when clicking on the summary text', async () => {
    const user = userEvent.setup();
    render(<Accordion question={QUESTION} answer={ANSWER} />);

    const questionText = screen.getByText(QUESTION);
    const container = questionText.closest(`.${styles.accordion}`);

    await user.click(questionText);
    expect(container).toHaveClass(styles.accordion__open);

    await user.click(questionText);
    expect(container).not.toHaveClass(styles.accordion__open);
  });

  it('renders in expanded state when expanded=true is passed', () => {
    render(<Accordion question={QUESTION} answer={ANSWER} expanded={true} />);

    const questionText = screen.getByText(QUESTION);
    const container = questionText.closest(`.${styles.accordion}`);
    expect(container).toHaveClass(styles.accordion__open);
  });
});
