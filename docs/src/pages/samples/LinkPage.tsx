import {Col, Con, Link, MenuItem, Row} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'

const LinkPage: React.FC = () => {
  return <Col>
    <Row end space={10}>
      <Con w={300}>
        <UsageBlock title={'Link'}>
          <Link style={{padding: '0px 20px'}} target={'_blank'} href={`/components/link`}>Click Me To Open A Tab</Link>
        </UsageBlock>
      </Con>

      <Con mt={20} w={300}>
        <UsageBlock title={'Wrapped by a MenuItem'}>
          <MenuItem>
            <Link target={'_blank'} href={`/components/link`}>
              Click Me To Open A Tab
            </Link>
          </MenuItem>
        </UsageBlock>
      </Con>
    </Row>

  </Col>
}

export default LinkPage