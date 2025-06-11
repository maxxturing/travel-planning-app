import { Container, Text, Button } from '@travel-planning/ui'

export default function HomePage() {
  return (
    <Container centered>
      <Text variant="heading">Travel Planning App</Text>
      <Text variant="body">Welcome to your travel companion!</Text>
      <Button onPress={() => console.log('Navigate to trips')}>
        View Trips
      </Button>
    </Container>
  )
}