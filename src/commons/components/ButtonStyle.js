import styled, { css } from 'styled-components';
import { buttonSize } from '../../styles/size';

const { small, normal, medium, big } = buttonSize;

export const SmallButton = styled.button`
  min-width: ${small.width}px;
  height: ${small.height}px;
`;

export const NormalButton = styled.button``;

export const MediumButton = styled.button``;

export const BigButton = styled.button``;
