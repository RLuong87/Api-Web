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
          <h1 style={{ textShadow: '1px 1px black' }}>
            API WEB
          </h1>
          <h2 style={{ textShadow: '1px 1px black' }}>
            We pull APIs!
          </h2>
        </Splash>
    </Container>
  )
}

export default Home;