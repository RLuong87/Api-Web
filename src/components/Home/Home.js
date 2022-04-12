import Container from '../common/Container';
import Splash from '../common/Splash';
import splashImg from '../../assets/data/cubes.jpg';

const Home = () => {

  return (
    <Container >
      <Splash image={splashImg} style={{
        color: "#f1f1f1",
        height: "120vh",
      }}>
        <div className='message'>
          <h2>Welcome, we pull APIs!</h2>
        </div>
      </Splash>
    </Container>
  )
}

export default Home;