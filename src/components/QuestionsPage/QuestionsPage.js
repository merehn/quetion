import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './QuestionsPage.css'; // Import custom styles
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const QuestionsPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const questions = [
    {
      question: "ما هو تاريخ اليوم الذي تحتفل المملكة به تحت مسمى اليوم الوطني؟",
      answers: ["الأول من سبتمبر", "الثالث والعشرون من سبتمبر", "العاشر من أغسطس"],
      correct: 1,
    },
    {
      question: "ما اسم الملك الذي تم توحيد المملكة العربية السعودية بفضله؟",
      answers: ["الملك سعود", "الملك فيصل", "الملك عبد العزيز آل سعود"],
      correct: 2,
    },
    {
      question: "ما هو اسم المملكة العربية السعودية قبل توحيدها؟",
      answers: ["مملكة الحجاز", "مملكة نجد", "مملكة الحجاز ونجد وملحقاتها"],
      correct: 2,
    },
    {
      question: "كم يوافق تاريخ اليوم الوطني السعودي بالهجري؟",
      answers: ["العاشر من رمضان", "الثامن من ربيع الأول", "الأول من محرم"],
      correct: 1,
    },
    {
      question: "من هو الملك الذي تولى الحكم بعد عبد العزيز آل سعود؟",
      answers: ["الملك سعود بن عبد العزيز", "الملك فيصل بن عبد العزيز", "الملك فهد بن عبد العزيز"],
      correct: 0,
    },
    {
      question: "لماذا سميت المملكة بهذا الاسم؟",
      answers: ["نسبةً إلى محمد بن سعود", "نسبةً إلى سعود بن محمد بن مقرن", "نسبةً إلى الملك عبد العزيز"],
      correct: 1,
    },
    {
      question: "ما الذي يمثله اليوم الوطني السعودي؟",
      answers: ["ذكرى ميلاد الملك", "ذكرى توحيد البلاد", "ذكرى استقلال السعودية"],
      correct: 1,
    },
    {
      question: "من هو أول الملوك الذي تم تلقيبهم بخادم الحرمين الشريفين؟",
      answers: ["الملك عبد الله", "الملك عبد العزيز", "الملك فهد"],
      correct: 2,
    },
    {
      question: "أين ولد الملك عبد العزيز آل سعود؟",
      answers: ["في مكة", "في الرياض", "في المدينة المنورة"],
      correct: 1,
    },
    {
      question: "من هو آخر حكام المملكة العربية السعودية؟",
      answers: ["الملك سلمان", "الملك عبد الله", "الملك فهد"],
      correct: 0,
    },
    {
      question: "لماذا تحتوي صورة اليوم الوطني السعودي على رجل ومرأة؟",
      answers: ["لأنهما يمثلان الأسرة السعودية", "لأنهما قادة البلاد", "لأنه رمز للعادات"],
      correct: 0,
    },
    {
      question: "من هو الملك الذي أصدر قرار باعتبار اليوم الوطني إجازة رسمية؟",
      answers: ["الملك سعود", "الملك فهد", "الملك عبد الله"],
      correct: 1,
    },
    {
      question: "ما هو أطول مبنى في المملكة العربية السعودية؟",
      answers: ["برج الرياض", "برج الفيصلية", "برج جدة"],
      correct: 2,
    },
    {
      question: "إلى ماذا ترمز النخلة في العلم السعودي؟",
      answers: ["الازدهار والخير", "الشجاعة", "الإرث التاريخي"],
      correct: 0,
    },
    {
      question: "ما هو الفن التقليدي الذي يشتهر به السعوديون؟",
      answers: ["العرضة السعودية", "السامري", "الدحة"],
      correct: 0,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [quizFinished, setQuizFinished] = useState(false);
  const [consolation, setConsolation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const handleAnswerSelection = (index) => {
    setSelectedAnswer(index);

    const isCorrect = index === questions[currentQuestionIndex].correct;
    setMessage(isCorrect ? 'إجابة صحيحة! أحسنت!' : 'إجابة خاطئة! حاول مرة أخرى!');
    setMessageType(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      setCorrectAnswers(prev => [...prev, currentQuestionIndex]);
    }

    if (!isCorrect) {
      setConsolation(true);
      setQuizFinished(true);
      return;
    }

    // Check if all questions have been answered correctly
    if (correctAnswers.length + 1 === questions.length) {
      setMessage('مبروك! لقد أجبت على جميع الأسئلة بشكل صحيح!');
      setMessageType('congratulations');
      setQuizFinished(true);
      return;
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizFinished(true);
      }
    }, 2000);
  };

  const handleReturnHome = () => {
    navigate('/'); // Navigate to the home page
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="questions-page">
      {quizFinished ? (
        <div className="overlay d-flex align-items-center justify-content-center">
          <div className="feedback-message mt-4 text-center">
            {consolation ? 'لا بأس، لقد أخطأت. حاول مرة أخرى في المرة القادمة!' : message}
            <br />
            <button
              id="return-home-button"
              className="btn btn-primary mt-3"
              onClick={handleReturnHome}
            >
              العودة إلى الصفحة الرئيسية
            </button>
          </div>
        </div>
      ) : (
        <div className="overlay d-flex align-items-center justify-content-center">
          <div className="question-container text-center p-4">
            <h2 className="mb-4">{currentQuestion.question}</h2>
            <ul className="list-group">
              {currentQuestion.answers.map((answer, index) => (
                <li
                  key={index}
                  className={`list-group-item ${selectedAnswer === index ? (index === currentQuestion.correct ? 'correct' : 'incorrect') : ''} ${correctAnswers.includes(currentQuestionIndex) && index === currentQuestion.correct ? 'correct' : ''}`}
                  onClick={() => handleAnswerSelection(index)}
                  style={{ cursor: 'pointer' }}
                >
                  {answer}
                </li>
              ))}
            </ul>
            {message && (
              <div className={`feedback-message mt-4 ${messageType}`}>
                {message}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionsPage;
