import React from 'react';

import './UploadForm.scss';

const UploadForm = ({
                      acceptTypes = '.txt',
                      onChange,
                      onReset,
                      shouldShowReset = false,
                      uploadRef,
                    }) => {
  return (
    <section className="upload-form-section">
      <h2 className="h-2">Add a Document</h2>
      <form className="upload-form">
        <input
          type="file"
          className="upload-form__choose-file"
          accept={acceptTypes}
          onChange={onChange}
          ref={uploadRef}
        />
        {shouldShowReset && (
          <button
            type="button"
            className="upload-form__reset"
            aria-label="Reset"
            title="Reset"
            onClick={onReset}
          />
        )}
      </form>
    </section>
  );
};

export default UploadForm;
