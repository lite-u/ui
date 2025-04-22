import Col from '@ui/components/layouts/Col.tsx'
import Title from '@ui/components/title/Title.tsx'

const Buttons: React.FC<{ id: string }> = ({id}) => {

  return <Col id={'buttons'}>
    <Title>Buttons</Title>
  </Col>
}

export default Buttons