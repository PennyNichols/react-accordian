import Header from "./components/Header/Header";
import questions from '../src/helper/data';
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <div className="App">
      <main>
          <Header title='Frequently Asked Questions About Login' />
          <section className='faq'>
            {questions.map((item) => (
              <Faq key={item.id} {...item} />
            ))}
          </section>
      </main>
    </div>
      
  );
}

export default App;
