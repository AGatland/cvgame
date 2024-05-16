import Character from './Character';
import Section from './Section';

const sections = [
  { title: 'About Me', description: 'This is about me.', position: { x: 100, y: 100 } },
  { title: 'Experience', description: 'My work experience.', position: { x: 300, y: 100 } },
  { title: 'Skills', description: 'My skills.', position: { x: 500, y: 100 } },
];

function Game() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Character />
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
  );
}

export default Game;