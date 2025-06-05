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
          <Typography $text="title1">Title1</Typography>
          <Typography $text="title2">Title2</Typography>
          <Typography $text="title3">Title3</Typography>
          <Typography $text="title4">Title4</Typography>
        </TypographyContainer>
        <TypographyContainer>
          <Typography $text="body1">Body1</Typography>
          <Typography $text="body2">Body2</Typography>
          <Typography $text="body3">Body3</Typography>
        </TypographyContainer>
        <TypographyContainer>
          <Typography $text="label1">Label1</Typography>
          <Typography $text="label2">Label2</Typography>
          <Typography $text="label3">Label3</Typography>
        </TypographyContainer>
        <TypographyContainer>
          <Typography $text="caption1">Caption1</Typography>
          <Typography $text="caption2">Caption2</Typography>
        </TypographyContainer>
      </Container>
    </Wrap>
  );
};

export default StyledDesignSystemPage;
