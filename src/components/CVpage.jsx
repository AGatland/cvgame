
import { useNavigate } from 'react-router-dom';
import CustomScrollbar from './CustomScrollbar';

function CVPage() {

  // Nav
  const navigate = useNavigate()

  return (
    <div style={{ height: '100vh' }}>
      <CustomScrollbar>
        <div style={{ height: '2000px', margin: '20px' }}>
          <button onClick={() => navigate("/")}>Back to lobby</button>
          <h1>My CV Content!</h1>
          <p>More content...</p>
          <p>And even more content...</p>
        </div>
      </CustomScrollbar>
    </div>
  );
}

export default CVPage;
