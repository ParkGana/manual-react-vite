import { Color, ColorContainer, Container, Title, Typography, TypographyContainer, Wrap } from './style';

const StyledDesignSystemPage = () => {
  return (
    <Wrap>
      {/* COLOR */}
      <Container>
        <Title>COLOR</Title>
        <ColorContainer>
          <Color $color="white" />
          <Color $color="black" />
        </ColorContainer>
        <ColorContainer>
          <Color $color="gray100" />
          <Color $color="gray200" />
          <Color $color="gray300" />
          <Color $color="gray400" />
          <Color $color="gray500" />
          <Color $color="gray600" />
          <Color $color="gray700" />
          <Color $color="gray800" />
          <Color $color="gray900" />
        </ColorContainer>
      </Container>

      {/* TYPOGRAPHY */}
      <Container>
        <Title>TYPOGRAPHY</Title>
        <TypographyContainer>
          <Typography $text="title2XL">Title/2XL</Typography>
          <Typography $text="titleXL">Title/XL</Typography>
          <Typography $text="titleL">Title/L</Typography>
          <Typography $text="titleM">Title/M</Typography>
          <Typography $text="titleS">Title/S</Typography>
        </TypographyContainer>
        <TypographyContainer>
          <Typography $text="bodyXL">Body/XL</Typography>
          <Typography $text="bodyL">Body/L</Typography>
          <Typography $text="bodyM">Body/M</Typography>
          <Typography $text="bodyS">Body/S</Typography>
        </TypographyContainer>
        <TypographyContainer>
          <Typography $text="labelL">Label/L</Typography>
          <Typography $text="labelM">Label/M</Typography>
          <Typography $text="labelS">Label/S</Typography>
          <Typography $text="labelXS">Label/XS</Typography>
        </TypographyContainer>
        <TypographyContainer>
          <Typography $text="captionM">Caption/M</Typography>
          <Typography $text="captionS">Caption/S</Typography>
          <Typography $text="captionXS">Caption/XS</Typography>
        </TypographyContainer>
      </Container>
    </Wrap>
  );
};

export default StyledDesignSystemPage;
