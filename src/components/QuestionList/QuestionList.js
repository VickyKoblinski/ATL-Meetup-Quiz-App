import './QuestionList.css';
import Question from '../Question/Question'

/**
 * Example Prop:
 * 
 *  [question,question,question,question]
 */


function QuestionList(props) {
  return (
    <div className="QuestionList">
      QuestionList
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </div>
  );
}

export default QuestionList;
