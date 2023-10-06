import styled from 'styled-components';

// main green #1e633f
// Styled component for the header container
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e633f;
  margin: auto;
  color: #fff;
  width: 86%;
  padding: 20px 20px;
`;

export const LeftSection = styled.div`
  margin-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4vw;
  `;


export const RightSection = styled.div`
 
  margin-right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

function giveSize(val) {
  if (val.large) return '30px'
  if (val.medium) return '22px'
  if (val.small) return '24px'
  if (val.xsmall) return '18px'
}


// for Typography
export const Typography = styled.p`
  margin-left: 0;
  display: flex;
  flex-direction: row;
  justify-content:  ${(props) => (props.start ? 'flex-start' : 'center')};
  align-items: center;
  gap: 4vw;
  font-size: ${(props) => giveSize(props)};
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  cursor: ${(props) => (props.pointer ? 'pointer' : 'default')};
  text-align:  ${(props) => (props.start ? 'left' : 'center')};
  `;

// for Box
export const Box = styled.div`
  display: block;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 20px;
  padding: 10px 30px;
  `;

function giveImageSize(val) {
  if (val.large) return '30px'
  if (val.medium) return '22px'
  if (val.small) return '15px'
  if (val.xsmall) return '10px'
}

export const StyledImage = styled.img`
  max-width: 100%;
  width: ${(props) => giveImageSize(props)};
  height: ${(props) => giveImageSize(props)};
  cursor: ${(props) => (props.point ? 'pointer' : 'default')};
`;

export const Button = styled.button`
    border-radius: 25px;
    padding: 8px 20px;
    font-size: 1rem;
    border: ${(props) => (props.brdcolorcode ? `1px solid ${props.brdcolorcode}` : '1px solid #fff')};
    color: ${(props) => (props.colorcode ? '#fff' : '#1e633f')};
    background-color: ${(props) => (props.colorcode ? props.colorcode : '#fff')};
    cursor: ${(props) => (props.nopoint ? 'default' : 'pointer')};
  `;

export const VerticalLine = styled.div`
    height: 120px;
    width: 1.2px;
    background-color: rgba(0, 0, 0, 0.15);
  `;

export const HorizontalLine = styled.div`
    width: 100%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 1px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    /* border-bottom: 1px solid rgba(27, 31, 35, 0.15); */
  `;

// for Box
export const Paper = styled.div`
  display: block;
  `;





// Modal atoms
// Styled components for the modal
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 1000;
  `;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 20vh;
  width: 24vw;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1001;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 20px;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;