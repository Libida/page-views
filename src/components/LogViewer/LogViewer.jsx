import React, { useState, useRef } from 'react';

import './LogViewer.scss';

import { getFileText, getFileFromEvent } from '../../utils/file/file';
import { getLogDetailsFromFileText } from '../../utils/log/log';
import { UploadForm } from '../UploadForm';
import { PageViewTable } from '../PageViewTable';

const LogViewer = () => {
  const logInitialValue = {};
  const [log, setLog] = useState(logInitialValue);
  const logInputRef = useRef(null);

  const handleFileChange = async (e) => {
    try {
      const file = getFileFromEvent(e);
      const fileText = await getFileText(file);
      const log = getLogDetailsFromFileText(fileText);

      setLog(log);
    }
    catch(e) {
      alert('Something went wrong, could you please try again');
    }
  };

  const handleFileReset = () => {
    setLog(logInitialValue);
    logInputRef.current.value = null;
  };

  return (
    <div className="log-viewer">
      <UploadForm
        acceptTypes=".log"
        onChange={handleFileChange}
        shouldShowReset={!!log.totalViews}
        onReset={handleFileReset}
        uploadRef={logInputRef}
      />
      <PageViewTable caption="Total page views" data={log?.totalViews}/>
      <PageViewTable caption="Unique page views" data={log?.uniqueViews}/>
    </div>
  );
};

export default LogViewer;
