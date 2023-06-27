"use client";

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';

type ConfirmationModalProps = {
  onClose: () => void;
};

export default function ConfirmationModal({ onClose }: ConfirmationModalProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={onClose} title="Authentication">
        {/* Modal content */}
        dsadadwdasds
      </Modal>

    </>
  );
}
