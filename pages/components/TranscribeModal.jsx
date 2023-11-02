import React from "react";
import { Modal, ModalBody, ModalHeader, Select, Input, Checkbox, Button } from "@nextui-org/react";

const TranscribeModal = ({ isOpen, onClose }) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState("");
  const [speakerIdentification, setSpeakerIdentification] = React.useState(false);

  const handleTranscribeFile = () => {
    // Handle transcribing file logic here
    // You can send selectedLanguage, speakerIdentification, and file data to your API or perform the required actions.
  };

  return (
    <Modal open={isOpen} onClose={onClose} blockScroll={false}>
      <ModalHeader>Transcribe File</ModalHeader>
      <ModalBody>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">Select Transcription Language</label>
          <Select value={selectedLanguage} onChange={setSelectedLanguage} placeholder="Select Language">
            {/* Add language options here */}
          </Select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">Drag and Drop File</label>
          {/* Add drag and drop file input */}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">Import from Link</label>
          <Input placeholder="Paste link here" />
        </div>
        <div className="mb-4 flex items-center">
          <Checkbox checked={speakerIdentification} onChange={setSpeakerIdentification} />
          <label className="text-sm text-gray-600 ml-2">Enable Speaker Identification</label>
        </div>
        <Button color="primary" onClick={handleTranscribeFile} auto block>
          Transcribe File
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default TranscribeModal;
