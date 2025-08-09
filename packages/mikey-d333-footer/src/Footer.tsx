import * as S from "./Footer.styles";

export const Footer = () => {
  return (
    <S.Footer role="contentinfo">
      <p>
        © mikey diserio 2025
        <br />
      </p>
      <S.SocialLinks>
        <a href="https://github.com/mikey-d333" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/mikey-diserio/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </S.SocialLinks>
    </S.Footer>
  );
};

export default Footer;
