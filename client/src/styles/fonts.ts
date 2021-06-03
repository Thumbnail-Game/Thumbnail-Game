import { createGlobalStyle } from 'styled-components';
import GothicB from './gothicb.ttf';

export default createGlobalStyle`
@font-face {
    font-family: 'Gothicb';
    src: local('Gothicb'), local('Gothicb'),
    url(${GothicB}) format('ttf'),
    font-weight: 300;
    font-style: normal;
}
`;