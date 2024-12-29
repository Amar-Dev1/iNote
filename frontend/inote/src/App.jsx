import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notes from './sections/notes/Notes';
function App() {
  return (
    <>
      <div id="root d-flex flex-column min-vh-100">
        <Header />
        <Notes />
        <Footer />
      </div>
    </>
  )
}

export default App;