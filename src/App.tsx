import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import LearningPath from './pages/LearningPath';
import Vocabulary from './pages/Vocabulary';
import VocabularyList from './pages/VocabularyList';
import Grammar from './pages/Grammar';
import GrammarList from './pages/GrammarList';
import Practice from './pages/Practice';
import Part1Practice from './pages/Part1Practice';
import Part5Practice from './pages/Part5Practice';
import Part7Practice from './pages/Part7Practice';
import StudyPlans from './pages/StudyPlans';
import TipsStrategies from './pages/TipsStrategies';
import Test from './pages/Test';
import Progress from './pages/Progress';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="learning-path" element={<LearningPath />} />
          <Route path="vocabulary/:level" element={<Vocabulary />} />
          <Route path="vocabulary-list" element={<VocabularyList />} />
          <Route path="grammar/:level" element={<Grammar />} />
          <Route path="grammar-list" element={<GrammarList />} />
          <Route path="practice/:level" element={<Practice />} />
          <Route path="practice/part1/:level" element={<Part1Practice />} />
          <Route path="practice/part5" element={<Part5Practice />} />
          <Route path="practice/part7" element={<Part7Practice />} />
          <Route path="study-plans" element={<StudyPlans />} />
          <Route path="tips-strategies" element={<TipsStrategies />} />
          <Route path="test/:level" element={<Test />} />
          <Route path="progress" element={<Progress />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
