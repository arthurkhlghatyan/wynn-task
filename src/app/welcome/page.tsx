import { Main } from '@/components/main';
import { Heading } from '@/components/heading';
import { Container } from '@/components/container';

export default async function Welcome() {
  return (
    <Main>
      <Container>
        <Heading>Welcome!</Heading>
      </Container>
    </Main>
  );
}
