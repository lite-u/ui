import {Col, Link, Panel, Row, Title} from '@ui/index.tsx'

const LinkSamples: React.FC = () => {
  return <Col  >

    <Col between style={{marginTop: 50}}>
      <Title h2 sticky>Link</Title>
      <Link href={`#link`} id={'link'}>Link</Link>
    </Col>
  </Col>
}

export default LinkSamples