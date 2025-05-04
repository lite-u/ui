import {Col, Con, Link, MenuItem, Row} from '@lite-u/ui'
import SampleBlock from '../SampleBlock.tsx'

const LinkPage: React.FC = () => {
  return <Col>
    <Row end space={10}>
      <Con w={300}>
        <SampleBlock title={'Link'}>
          <Link style={{padding: '0px 20px'}} target={'_blank'} href={`/components/link`}>Click Me To Open A Tab</Link>
        </SampleBlock>
      </Con>

      <Con mt={20} w={300}>
        <SampleBlock title={'Wrapped by a MenuItem'}>
          <MenuItem>
            <Link target={'_blank'} href={`/components/link`}>
              Click Me To Open A Tab
            </Link>
          </MenuItem>
        </SampleBlock>
      </Con>
    </Row>

  </Col>
}

export default LinkPage