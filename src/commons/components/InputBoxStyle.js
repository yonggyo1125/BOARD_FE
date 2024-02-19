import styled from 'styled-components';
import { fontSize } from '../../styles/size';
const { medium } = fontSize;
/**
 * 한줄 텍스트
 *
 */
export const InputText = styled.input`
  border: 1px solid #d5d5d5;
  height: 45px;
  border-radius: 5px;
  padding: 0 10px;
  font-size: ${medium}rem;
`;
