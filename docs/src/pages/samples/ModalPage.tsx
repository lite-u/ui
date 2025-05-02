import {Button, Col, Con, Modal, Row} from '@lite-u/ui'
import {useState} from 'react'
import CodeWrap from '../../components/codeBlock/CodeWrap.tsx'

const ModalPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  return <Col>

    <Col between style={{}}>
      <Con>
        <Button onClick={() => {
          setShowModal(true)
        }}>Open Modal</Button>
      </Con>
      <Con m={10}></Con>

      {
        showModal && <Modal onBackdropClick={() => {
          setShowModal(false)
        }}>
              <Con w={'90%'} h={'90%'} bg={'white'}>
                  <Row fw fh center jc>
                      <Col center>
                          <Button onClick={() => {
                            setShowModal(false)
                          }}>Close Modal</Button>
                      </Col>
                  </Row>
              </Con>
          </Modal>
      }

      <CodeWrap code={`
      <Modal onBackdropClick={() => {
          setShowModal(false)
        }}>
          <Con w={'90%'} h={'90%'} bg={'white'}>
              <Row fw fh center jc>
                  <Col center>
                      <Button onClick={() => {
                        setShowModal(false)
                      }}>Close Modal</Button>
                  </Col>
              </Row>
          </Con>
      </Modal>
      `}></CodeWrap>

    </Col>
  </Col>
}

export default ModalPage