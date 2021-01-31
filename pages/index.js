import styled from 'styled-components'
import db from '../db.json'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const backgroundImage = styled.div`
  background-image: url(https://i2.wp.com/css-tricks.com/wp-content/uploads/2017/06/css-is-awesome-scaled.jpg?resize=1536%2C1208&ssl=1);
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(${db.bg})` }}>
        lolololololol
    </div>
  )
}
