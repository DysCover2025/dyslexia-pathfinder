
import React, { forwardRef } from 'react';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ onFileUpload }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        onFileUpload(files[0]);
        // Reset the input
        e.target.value = '';
      }
    };

    return (
      <input
        type="file"
        ref={ref}
        onChange={handleChange}
        accept=".txt,.pdf,.doc,.docx,.rtf,.md"
        className="hidden"
      />
    );
  }
);

FileUpload.displayName = 'FileUpload';
