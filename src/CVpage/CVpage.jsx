import CustomScrollbar from './CustomScrollbar';
import CVComponent from './CVComponent';

function CVPage() {


  return (
    <div style={{ height: '100vh' }}>
      <CustomScrollbar>
        <CVComponent />
      </CustomScrollbar>
    </div>
  );
}

export default CVPage;
