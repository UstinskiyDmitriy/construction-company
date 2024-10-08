import React from 'react';
import { Modal, ConfigProvider } from 'antd';

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalComponent = ({ isOpen, onClose, children }: ModalComponentProps) => {
return (
<ConfigProvider 
  theme={{
    components: {
      Modal: {
        paddingLG: 10,
        paddingMD: -1,   
        borderRadiusLG: 30,
        margin: 0,
      }
    }
  }}
>
<Modal visible={isOpen} onCancel={onClose} footer={null}>
      {children}
    </Modal>
</ConfigProvider>
)
}

export default ModalComponent
