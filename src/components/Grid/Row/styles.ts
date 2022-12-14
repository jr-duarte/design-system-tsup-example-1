import { styled, gridGutter } from '../../../styles/stitches.config';

const Wrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  marginRight: `-${gridGutter.width}px`,
  marginLeft: `-${gridGutter.width}px`,
});

export default Wrapper;
