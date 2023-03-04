import './Question.css';

/**
 * Example Prop:
 * 
 *  {
        "id": 923,
        "question": "What is ETCD?",
        "description": null,
        "answers": {
            "answer_a": "Etcd is written in Go programming language and is a distributed key-value store used for coordinating between distributed work.",
            "answer_b": "Etcd is written in Python programming language and is a distributed key-value store used for coordinating between distributed work.",
            "answer_c": "Etcd is written in C++ programming language and is a distributed key-value store used for coordinating between distributed work.",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Kubernetes"
            }
        ],
        "category": "DevOps",
        "difficulty": "Easy"
    }
 */


function Question(props) {
  return (
    <div className="Question">
      Question
    </div>
  );
}

export default Question;
