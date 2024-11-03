import './App.css'
import ActivityGraph from './components/activity-graph/ActivityGraph'

const App: React.FC = () => {
  return (
    <>
      <h1>FitHub</h1>
      <p className="callToAction">
        Inspired by GitHub. Get motivated by taking action.
      </p>
      <ActivityGraph year={2024} />
    </>
  )
}

export default App
