import {Button, Col, Con, Modal, Row} from '@lite-u/ui'
import {useState} from 'react'
import UsageBlock from '../UsageBlock.tsx'

const ModalPage: React.FC = () => {
  // const [showModal, setShowModal] = useState(false)
  return <Col>
    <Row end space={10}>
      <Con w={300}>
        <UsageBlock title={'Link'} replacement={`
          import {Button, Col, Con, Modal, Row} from '@lite-u/ui'

          const ModalSample: React.FC = () => {
            const [showModal, setShowModal] = useState(false)
          
            return <>
              <Button onClick={() => {
                setShowModal(true)
              }}>Open Modal</Button>
          
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
            </>
          }
        `}>
          <ModalSample/>
        </UsageBlock>
      </Con>
    </Row>
  </Col>
}

const ModalSample: React.FC = () => {
  const [showModal, setShowModal] = useState(false)

  return <>
    <Button onClick={() => {
      setShowModal(true)
    }}>Open Modal</Button>

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
  </>
}

export default ModalPage