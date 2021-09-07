import styled from 'styled-components'
import {Container} from 'reactstrap'
const Section = styled(Container)`
  background-color: black;
  position: relative;
  @media(min-width:768px){
    height: calc(100vh - 99px);
    .col, .col-md-6{
      padding-left: 3em;
      padding-right: 3em;

  }
  }
  
`;
export default Section