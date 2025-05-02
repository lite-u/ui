import {Col, Con, Link, Select, SelectItem} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'

const LinkPage: React.FC = () => {
  return <Col>
    <Con w={300}>
      <UsageBlock title={'onChange'}>
        <Link style={{padding: '0px 20px'}} target={'_blank'} href={`/components/link`}>Click Me To Open A Tab</Link>
      </UsageBlock>
    </Con>


  </Col>
}

export default LinkPage